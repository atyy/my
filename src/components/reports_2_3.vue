<style scoped>
  @import '../css/reports_2.css';
</style>

<template>
    <div class="reports-2-wrap">
        
      <gw-header explain @openExplain="getRef"></gw-header>

      <div class="content" v-if="list.length > 0">

          <!-- 封面 -->
          <cover :typeStyle="typeStyle" name='药物反应' :num="$route.query.num" />
          
          <!-- 手风琴 -->
          <collapses v-for="(item, index) in list" :name="item.name" :num="item.subArray.length" :sub_list="item.subArray" @_uid="get" :current="current" :disabled="item.subArray.length == 0" :reportsCategory="reportsCategory" :hign="item.num > 0 ? true : false" :typeStyle="typeStyle" :active_default="index == 0 ? true : false" ref="col" @domArray="domArray" />

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

      <!-- 用户引导 -->
      <guide :guide_info="guide_info" v-if="guide_info.length > 0" ref="header_guide"></guide>

    </div>
</template> 


<script>
import gwHeader from './header';
import cover from './cover';
import collapses from './collapses';
import mixins from '../mixins/index';
import guide from './guide';


export default {
  name: 'reports_2_3',
  mixins: [mixins],
  components: {
    collapses,
    gwHeader,
    cover,
    guide
  },
  data () {
  	return {
      typeStyle: 'reports_3',    //  3  药物反应
      get_loading: false,       //  获取报告列表加载
      current: '',
      list: [],
      nothing: false,           //  判断是否为空数据
      active: false,            //  切换
      reportsCategory: false,   //  报告类型
      guide_info: '',
      guide_conf: [             //  用户引导配置数据
        {
          id: 1,
          ref: 'guide1',
          cnt: '项目名称：检测项目的名称，主要包括疗效、毒副作用、代谢、敏感性等'
        }
      ]
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


    //  获取到用户引导 节点
    domArray(info) {

      //  调用手风琴组件  - 触发第一列下拉
      this.$refs.col[0].openCol();

      setTimeout(()=> {

          //  强制回滚到顶部 - 告知报告说明
          window.scrollTo(0,0);

          for(var i in info){
            this.guide_conf[i].width = info[i].offsetWidth;
            this.guide_conf[i].height = info[i].offsetHeight;
            this.guide_conf[i].top = this.getTop(info[i]);
            this.guide_conf[i].left = this.getLeft(info[i]);
            this.guide_conf[i].right = document.body.offsetWidth - this.guide_conf[i].width - this.guide_conf[i].left;
          }
        
          //  如果引导有数据  直接调用组件内部打开方法
          if(this.guide_info.length > 0){
            this.$refs.header_guide.open();
          } else {
            //  配置与数据存入最终集合 ( 初始话引导数据 )
            this.guide_info = this.guide_conf;
          }

      },600);
      
    },

    //获取元素的纵坐标 
    getTop(ele){
      var offset=ele.offsetTop; 
      if(ele.offsetParent!=null) offset+=this.getTop(ele.offsetParent); 
      return offset; 
    },

    //获取元素的横坐标 
    getLeft(ele){ 
      var offset=ele.offsetLeft; 
      if(ele.offsetParent!=null) offset+=this.getLeft(ele.offsetParent); 
      return offset; 
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

            //  判断是否第一次进入  开启引导
            var guide_2_3 = localStorage.getItem('guide_2_3');
            if(!guide_2_3){

              //  获取组件内部节点
              self.getRef();
              localStorage.setItem('guide_2_3',true);
            }
            
          }


        } else {

          
        }

        //  关闭加载
        self.get_loading = false;
        
      });
    },

    //  获取组件内部节点
    getRef() {
      //  获取手风琴列表第一个元素
      this.$nextTick(function(){
        this.$refs.col[0].getDom(this.guide_conf);
      });
    }

  }


}
</script>