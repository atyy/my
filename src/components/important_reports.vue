<style scoped>
  @import '../css/important_reports.css';
  
</style>

<template>
    <div class="important-reports-wrap">
        
      <gw-header></gw-header>
        
    
      <div v-if="attention_items.length > 0">

          <div class="bg-header">
            <div class="avat-wrap">
              <img src="/static/img/important_reports/im1.png" class="img">
              <img src="/static/img/important_reports/im2.png" class="img2">
              <img :src="user.headimgurl" class="myavat" v-if="!example">   <!-- 用户头像 -->
              <div class="defaultavat" v-if="example"></div>                <!-- 默认头像 -->
            </div>
            <h4 class="myname"> {{ example ? '示例报告' : user.nickname }} </h4>
          </div>

          

          <!-- 健康风险 -->
          <div class="reports reports_1" v-if="reports_1.length > 0">
            <div class="im3">
              <img src="/static/img/important_reports/im3.png" class="img">
            </div>
            <ul>
              <li v-for="item in reports_1">
                <router-link :to="{path: '/' + genoArray[item.supercategory] + '/3', query: {phenotype_id: item.phenotype_id, reportsCategory: item.supercategory }}">
                  <div class="inb">
                    <span class="reports-name font" v-html="item.report['CN'].name"></span>
                  </div>
                  <i class="da">······································································································································································</i>
                  <div class="cnt numb">
                    <span class="reports-val" v-if="item.params.odds != -1">
                      {{ item.params.odds > 10 ? '>10' : Number(item.params.odds).toFixed(2) }} 倍
                    </span>
                    <span class="reports-val" v-else>
                      {{ item.zh_outcome }}
                    </span>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>




          <!-- 罕见疾病 -->
          <div class="reports reports_2" v-if="reports_2.length > 0">
            <div class="im4">
              <img src="/static/img/important_reports/im4.png" class="img">
            </div>
            <ul>
              <li v-for="item in reports_2">
                <router-link :to="{path: '/' + genoArray[item.supercategory] + '/3', query: {phenotype_id: item.phenotype_id, reportsCategory: item.supercategory }}">
                  <i class="da">······································································································································································</i>
                  <div class="cnt">
                    <p class="name1 block" v-html="item.report['CN'].name"></p>
                  </div>
                  <p class="name2 font">{{ item.zh_outcome }}</p>
                </router-link>
              </li>
            </ul>
          </div>



          <!-- 药物反应 -->
          <div class="reports reports_3" v-if="reports_3.length > 0">
            <div class="im5">
              <img src="/static/img/important_reports/im5.png" class="img">
            </div>
            <ul>
              <li v-for="item in reports_3">
                <router-link :to="{path: '/' + genoArray[item.supercategory] + '/3', query: {phenotype_id: item.phenotype_id, reportsCategory: item.supercategory }}">
                  <div class="cnt">
                    <span class="name1 block" v-html="item.report['CN'].name"></span>
                  </div>
                  <i class="da">······································································································································································</i>
                  <p class="name2 font">{{ item.zh_outcome }}</p>
                </router-link>
              </li>
            </ul>
            <div class="im6">
              <img src="/static/img/important_reports/im6.png" class="img">
            </div>
          </div>



          <!-- 运动健身 -->
          <div class="reports reports_4" v-if="reports_4.length > 0">
            <div class="im7">
              <img src="/static/img/important_reports/im7.png" class="img">
            </div>
            <ul>
              <li v-for="item in reports_4">
                <router-link :to="{path: '/' + genoArray[item.supercategory] + '/3', query: {phenotype_id: item.phenotype_id, reportsCategory: item.supercategory }}">
                  <p class="name" v-html="item.report['CN'].name"></p>
                  <div class="container">
                    <i class="da">······································································································································································</i>
                    <div class="cnt">
                      <span class="val block">{{ item.zh_outcome }}</span>
                    </div>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>


          <!-- 饮食营养 -->
          <div class="reports reports_5" v-if="reports_5.length > 0">
            <div class="im8">
              <img src="/static/img/important_reports/im8.png" class="img">
            </div>
            <ul>
              <li v-for="item in reports_5">
                <router-link :to="{path: '/' + genoArray[item.supercategory] + '/3', query: {phenotype_id: item.phenotype_id, reportsCategory: item.supercategory }}">
                  <div class="side lside">
                    <span class="name1 block" v-html="item.report['CN'].name"></span>
                    <p class="name2">{{ item.zh_outcome }}</p>
                  </div>
                  <div class="side rside">
                    <i class="da">······································································································································································</i>  
                  </div>
                </router-link>
              </li>
            </ul>
          </div>  


          <!-- 体质特征 -->
          <div class="reports reports_6" v-if="reports_6.length > 0">
            <div class="im9">
              <img src="/static/img/important_reports/im9.png" class="img">
            </div>
            <ul>
              <li v-for="item in reports_6">
                <router-link :to="{path: '/' + genoArray[item.supercategory] + '/3', query: {phenotype_id: item.phenotype_id, reportsCategory: item.supercategory }}">
                  <p class="name1 font" v-html="item.report['CN'].name"></p>
                  <div class="container">
                    <i class="da">······································································································································································</i>
                    <div class="cnt">
                      <p class="name2 block">{{ item.zh_outcome }}</p>
                    </div>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
      </div>


      <!-- 获取报告列表加载 -->
      <transition name="fade">
        <div v-if="get_loading" class="loading">
          <img src="/static/img/important_loading.gif">
        </div>
      </transition>


      <!-- 为空 -->
      <div class="nothing" v-if="nothing">
        <h2 class="title">无报告信息</h2>
      </div>


    </div>
</template> 


<script>
import gwHeader from './header';
import axios from 'axios';
import mixins from '../mixins/index';



export default {
  name: 'important_reports',
  mixins: [mixins],
  components: {
    gwHeader
  },
  data () {
  	return {
      example: false,       //  true 示例报告
      attention_items: [],  //  总风险项列表
      user: [],             //  用户信息
      reports_1: [],        //  健康风险
      reports_2: [],        //  罕见疾病
      reports_3: [],        //  药物反应
      reports_4: [],        //  运动健身
      reports_5: [],        //  饮食营养
      reports_6: [],        //  体质特征
      get_loading: false,   //  加载
      nothing: false,
      genoArray: {
        '健康风险': 1,
        '罕见疾病': 2,
        '药物反应': 3,
        '运动健身': 4,
        '饮食营养': 5,
        '体质特征': 6
      }
  	}
  },
  mounted () {


    this.reportsId = this.GetQueryString("reportsId");
    this.access_token = this.GetQueryString("access_token");

    if(this.reportsId == '-1'){
      this.example = true;
    }

      
    this.getReports();

  },
  computed: {


  },
  methods: {


    //  请求微信配置信息
    getWxConfig(){

        var self = this;

        var url = encodeURIComponent(location.href.split('#')[0]);

        this.$axios({
          url: '/wx_jssdk',
          data: {url: url},
          method: 'post'
        }).then(function(res){

            var data = res.data.data;
            var isSuccess = res.data.success;

            if(!isSuccess){
              self.$dialog.toast({
                  mes: data.error,
                  icon: 'error',
                  timeout: 1500
              });
              return false;
            }

            //  微信配置  SDK
            wx.config(data);


            wx.ready(function () {

              //  如果是示例报告
              if(self.example){
                wx.onMenuShareTimeline({
                    title: '健路基因的示例报告',
                    link: location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: 'http://wx.jianlujiyin.com/static/img/share_logo.png',          // 分享图标
                    success: function () {
                      // 用户确认分享后执行的回调函数
                    }
                });
              } else {
                wx.onMenuShareTimeline({
                    title: self.user.nickname + '的报告',
                    link: location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: self.user.headimgurl,          // 分享图标
                    success: function () {
                      // 用户确认分享后执行的回调函数
                    }
                });
              }
            });
        });

    },

    getReports() {

      var self = this;

      this.get_loading = true;    //  开启加载

      axios({
        url: '/outstanding_phenotype/' + this.reportsId +'?access_token=' + this.access_token
      }).then(function(res){

        self.attention_items = res.data.data.attention_items;   //  项目列表
        self.user = res.data.data.user;                         //  用户信息


        //  如果无数据
        if(self.attention_items.length == 0){
          self.nothing = true;
        }


        for(var i in self.attention_items){

          var supercategory = self.attention_items[i].supercategory;


          self.attention_items[i].report['CN'].name = self.customLatex(self.attention_items[i].report['CN'].name);



          switch(supercategory){

            case '健康风险': 
                  self.reports_1.push(self.attention_items[i]);
                  break;

            case '罕见疾病': 
                  self.reports_2.push(self.attention_items[i]);
                  break;

            case '药物反应': 
                  self.reports_3.push(self.attention_items[i]);
                  break;

            case '运动健身': 
                  self.reports_4.push(self.attention_items[i]);
                  break;

            case '饮食营养': 
                  self.reports_5.push(self.attention_items[i]);
                  break;

            case '体质特征': 
                  self.reports_6.push(self.attention_items[i]);
                  break;

          }

        }


        //  健康风险倍数排序  从高到低
        var v = '';
        for(var a = 0; a < self.reports_1.length; a++){

          //   如果没有 odds 倍数 则移到最下方
          if(!self.reports_1[a].params){
            self.reports_1[a].params = {
              odds: -1
            }
          } else if(!self.reports_1[a].params.odds) {
            self.reports_1[a].params.odds = -1;
          }

          for(var b = a + 1; b < self.reports_1.length; b++){

            //   如果没有 odds 倍数 则移到最下方
            if(!self.reports_1[b].params){
              self.reports_1[b].params = {
                odds: -1
              }
            } else if(!self.reports_1[b].params.odds){
              self.reports_1[b].params.odds = -1;
            }

            if(self.reports_1[a].params && self.reports_1[b].params && self.reports_1[a].params.odds < self.reports_1[b].params.odds){
              v = self.reports_1[a];
              self.reports_1[a] = self.reports_1[b];
              self.reports_1[b] = v;
            }
          }
      }

        //  请求微信配置信息
        self.getWxConfig();

        self.get_loading = false; //  关闭加载


      });
    }

  }


}
</script>