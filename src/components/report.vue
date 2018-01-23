
<template>
    <div class="wrap">
        
        <div class="header">
          <div class="logo">
              <img src="/static/img/favico.png">
          </div>
        </div>

        <div class="content" v-if="reports.length > 0">

          <!-- 新旧报告 切换 -->
          <div class="toggle">
            <span @click="isPdf = false" v-if="isPdf" class="ispdf">查看 网页 报告</span>
            <span @click="isPdf = true" v-else>查看 pdf 报告</span>
          </div>

          <div ref="wrapper" class="report_wrap">
          
              <div class="order-list">
                  <ul>
                    <li v-for="item in reports">
                      <a href="javascript:;" class="cart" @click="find_reports(item.id, item.product_id)">
                        <div class="filed company">
                          <label class="title">公司</label>
                          <span class="val" v-text="item.company"></span>
                        </div>
                        <div class="filed code">
                          <label class="title">条码</label>
                          <span class="val" v-text="item.barcode"></span>
                        </div>
                        <div class="filed patients">
                          <label class="title">受检者</label>
                          <span class="val" v-text="item.name"></span>
                        </div>
                        <div class="filed product">
                          <label class="title">产品</label>
                          <div class="pro_list">
                            <span class="val" v-text="item.product_label.zh_label"></span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
              </div>

          </div>
        </div>

        
        <!-- 为空 -->
        <div class="nothing" v-if="nothing">
          <h2 class="title">您还没有报告</h2>
        </div>

        <!-- 获取报告列表加载 -->
        <transition name="fade">
          <div v-if="get_loading" class="loading">
            <img src="/static/img/reports_loading.gif">
          </div>
        </transition>


        <!-- 下载报告加载 -->
        <transition name="fade">
          <div v-if="download_loading" class="loading">
            <img src="/static/img/download.gif">
          </div>
        </transition>

    </div>
</template>


<script>
import BScroll from 'better-scroll';

export default {
  data () {
  	return {
      access_token: '',       //  用户标识
      reports: [],            //  报告列表
      nothing: false,         //  判断是否为空数据
      get_loading: false,     //  获取报告列表加载
      download_loading: false, //  下载报告加载
      isPdf: false            //  切换 PDF 与 网页报告
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

    //  报告列表
    init() {

      var self = this;

      //  开启加载
      self.get_loading = true;

      this.$axios({
        url: '/reports',
        method: 'post',
        data: {access_token: this.access_token},
      }).then(function(res){

        var data = res.data.data;
        var isSuccess = res.data.success;

        if(isSuccess){

          self.reports = data;


          self.$nextTick(function(){
            self.scroll = new BScroll(this.$refs.wrapper,{
                click: true,
                momentum: true
            });
          });


          //  如果无数据
          if(self.reports.length == 0){
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
        self.get_loading = false;

      });
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
    },


    //  获取 网页 报告
    get_web_reports(id){

        location.href = '/reports/info?access_token=' + this.access_token + '&reportsId=' + id;
    },

    //  获取 pdf 报告
    get_pdf_reports(id){

        var self = this; 

        this.$nextTick(function(){

          //  开启加载
          self.download_loading = true;
          

          this.$axios({
            url: '/reports/'+ id +'/download?access_token=' + this.access_token
          }).then(function(res){

            var data = res.data.data;


            if(!data.key){
              self.$dialog.alert({mes: '无法下载报告'});
              return;
            }

            var key = data.key;
            var fid = data.fid;

            //  关闭加载
            self.download_loading = false;

            location.href = '/api/report/get?access_token=' + self.access_token + '&key=' + key + '&fid=' + fid



          });
        });

        
    },


    //  查看我的报告
    find_reports(id, product_id){

      //  判断加载网页 | pdf报告 (true - pdf, false - web)
      if(this.isPdf){
        this.get_pdf_reports(id);
      } else {

        if(product_id !== 'GW-WellWise-D'){
          this.$dialog.alert({
            mes: '此产品不支持新版报告，请查看PDF报告'
          });
          return;
        }

        this.get_web_reports(id);
      }

    }

  },
  watch: {

  }
}
</script>

<style>
  
</style>