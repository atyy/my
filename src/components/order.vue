
<template>
    <div class="wrap">
        
        <div class="header">
          <div class="logo">
              <img src="/static/img/favico.png">
          </div>
        </div>

        <div class="order-list" v-if="orders.length > 0">
            <ul>
              <li v-for="item in orders">
                <a href="javascript:;" class="cart" @click="info(item)">
                    <div class="cart_header">
                        <div class="filed code">
                          <span class="val" v-text="item.barcode" v-if="item.barcode"></span>
                        </div>
                    </div>
                    <div class="cart_body">
                        <div class="filed patients">
                          <label class="title">受检者</label>
                          <span class="val" v-text="item.patient.name" v-if="item.patient"></span>
                        </div>
                        <div class="filed project">
                          <label class="title">检测项目</label>
                          <div class="pro_list">
                            <span class="val" v-for="sub in item.tests.products_label" v-text="sub"></span>
                          </div>
                        </div>
                        <div class="filed project">
                          <label class="title">检测状态</label>
                          <span class="val" v-text="(item.task ? task[item.task] : '') + (item.state ? state[item.state] : '')"></span>
                        </div>
                    </div>
                </a>
              </li>
            </ul>
        </div>

        <!-- 为空 -->
        <div class="nothing" v-if="nothing">
          <h2 class="title">您还没有订单</h2>
        </div>

        <yd-popup v-model="detail_in" position="left" width="80%" v-if="patient_data">
          <yd-cell-group>
            <yd-cell-item>
                <span slot="left">订单号</span>
                <span slot="right" v-text="patient_data.order_id"></span>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">公司</span>
                <span slot="right" v-text="patient_data.company"></span>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">条码</span>
                <span slot="right" v-text="patient_data.barcode"></span>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">受检者姓名</span>
                <span slot="right" v-text="patient_data.patient.name"></span>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">产品</span>
                <span slot="right" v-for="sub in patient_data.tests.products_label" v-text="sub"></span>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">状态</span>
                <span slot="right" v-text="(patient_data.task ? task[patient_data.task] : '') + (patient_data.state ? state[patient_data.state] : '')"></span>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">创建时间</span>
                <span slot="right" v-text="patient_data.created_at"></span>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">电话</span>
                <span slot="right" v-text="patient_data.patient.phone_no"></span>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">受检者性别</span>
                <span slot="right" v-text="patient_data.patient.gender == 'male'? '男': '女'"></span>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">受检者生日</span>
                <span slot="right" v-text="patient_data.patient.dob"></span>
            </yd-cell-item>
          </yd-cell-group>
        </yd-popup>
        

        <!-- 加载 -->
        <transition name="fade">
          <div v-if="loading" class="loading">
            <img src="/static/img/orders_loading.gif">
          </div>
        </transition>

    </div>
</template>


<script>


export default {
  data () {
  	return {
      access_token: '',   //  用户标识
      orders: [],         //  订单列表
      detail_in: false,   //  订单详情开关
      patient_data: '',   //  订单详情数据
      nothing: false,     //  判断是否为空数据
      state: {
        'Queue': '等待中',
        'In Progress': '进行中',
        'Completed': '已完成',
        'Aborted': '失败',
        'Canceled': '已取消',
        'Disregarded': '已放弃'
      },
      task: {
        'Verify Order': '激活码验证',
        'Deliver Kits': '寄送采集器',
        'Return Kits': '回寄采集器',
        'Send Reports': '发送报告'
      },
      loading: false      //  加载
  	}
  },
  created () {
      
      this.access_token = this.GetQueryString("access_token");

      //  判断是否绑定
      this.check_token();
  },
  computed: {


  },
  methods: {

    //  获取 url 参数
    GetQueryString(name) {
      var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if(r!=null)return  unescape(r[2]); 
      return null;
    },

    //  订单列表
    init() {

      var self = this;

      //  开启加载
      this.loading = true;

      this.$axios({
        url: '/orders_list',
        method: 'post',
        data: {access_token: this.access_token},
      }).then(function(res){

        var data = res.data.data;
        var isSuccess = res.data.success;

        if(isSuccess){

          for(var i in data){

            data[i].patient = JSON.parse(data[i].patient);
            data[i].tests = JSON.parse(data[i].tests);
          }

          self.orders = data;

          //  如果无数据
          if(self.orders.length == 0){
            self.nothing = true;
          }

        } else {

          //  判断是错误还是未绑定
          if(data.code == '25'){

            self.$dialog.alert({
                mes: '您尚未绑定，请先绑定手机',
                callback: () => {
                    location.href = '/acbind?access_token=' + self.access_token;
                }
            });

          } else {

            self.$dialog.toast({
                mes: data.error,
                icon: 'error',
                timeout: 2000
            });
          }
        }

        //  关闭加载
        self.loading = false;

      });
    },

    //  详情
    info(data) {

      //  保存详情数据
      this.patient_data = data;
      //  打开详情
      this.detail_in = true;
    },

    //  判断是否绑定
    check_token() {

      var self = this;

      this.$axios({
        url: '/wx/check_token',
        method: 'post',
        data: {access_token: this.access_token},
      }).then(function(res){

          var data = res.data.data;
          var isSuccess = res.data.success;

          
          //  报错
          if(!isSuccess){

            self.$dialog.toast({
                mes: data.error,
                icon: 'error',
                timeout: 2000
            });

            return false;
          }

          if(!data.verify){

            self.$dialog.alert({
                mes: '您尚未绑定，请先绑定手机',
                callback: () => {
                    location.href = '/acbind?access_token=' + self.access_token;
                }
            });

            return false;
          } else {

            //  初始化订单列表
            self.init();
            
          }

      });
    }
        


  },
  watch: {
  	
  }
}
</script>

<style>
  
</style>