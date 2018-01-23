<style scoped>
  @import '../css/reports_2.css';
</style>

<template>
    <div class="reports-2-wrap">
        
      <gw-header></gw-header>

      <div class="content" v-if="list.length > 0">

          <!-- 封面 -->
          <cover :typeStyle="typeStyle" name='罕见疾病' :num="$route.query.num" />

          <collapses v-for="item in list" :name="item.name" :num="item.subArray.length" :sub_list="item.subArray" @_uid="get" :current="current" :disabled="item.subArray.length == 0" :reportsCategory="reportsCategory" :hign="item.num > 0 ? true : false" :typeStyle="typeStyle"/>

      </div>


      <!-- 为空 -->
      <div class="nothing" v-if="nothing">
        <h2 class="title">无报告信息</h2>
      </div>


      <!-- 获取报告列表加载 -->
      <transition name="fade">
        <div v-if="get_loading" class="loading">
          <img src="/static/img/reports_2.gif">
        </div>
      </transition>

    </div>
</template> 


<script>
import gwHeader from './header';
import cover from './cover';
import collapses from './collapses';
import mixins from '../mixins/index';


export default {
  name: 'reports_2_2',
  mixins: [mixins],
  components: {
    collapses,
    gwHeader,
    cover
  },
  data () {
    return {
      typeStyle: 'reports_2',    //  2  罕见疾病
      get_loading: false,       //  获取报告列表加载
      current: '',
      list: [],
      nothing: false,           //  判断是否为空数据
      active: false,            //  切换
      reportsCategory: false    //  报告类型
    }
  },
  mounted () {
      
    this.reportsId = this.GetQueryString("reportsId");
    this.access_token = this.GetQueryString("access_token");

    //  传入报告类型
    if(this.$route.query.type){
      this.reportsCategory = decodeURI(this.$route.query.type);
    }

    //  获取列表
    this.getReports();

  },
  computed: {},
  methods: {


    get(val) {
      this.current = val;
    },

    getReports() {

      var self = this;

      //  开启加载
      self.get_loading = true;



      //  在第三层获取 url 保留分类
      if(!this.reportsCategory){

        this.reportsCategory = decodeURI(this.GetRouteString("reportsCategory"));
      }


      
      this.$axios({
        url: '/web_reports/list/' + this.reportsId + '?access_token=' + this.access_token + '&reportsCategory=' + this.reportsCategory,
        method: 'get'
      }).then(function(res){

        var data = res.data;
        var isSuccess = res.data.success;

        if(isSuccess){

          self.list = data.data;

          //  如果无数据
          if(self.list.length == 0){
            self.nothing = true;
          } else {

            //  二级菜单名称解析
            for(var i in self.list){
              for(var j in self.list[i].subArray){
                if(self.list[i].subArray[j].ch_name){
                  self.list[i].subArray[j].ch_name = self.customLatex(self.list[i].subArray[j].ch_name);  
                }
                
              }
            }
            
          }

        } else {

          
        }

        //  关闭加载
        self.get_loading = false;
        
      });
    }

  }


}
</script>