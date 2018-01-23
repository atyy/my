<style scoped>
  @import '../css/reports_1.css';
</style>

<template>
    <div class="reports-1-wrap">
        

      <gw-header></gw-header>

      <div class="reports-cnt" v-if="out_phenotype">


        <!-- 搜索 -->
        <gw-search @term="getResult" :result="result"></gw-search>


        <!-- 产品信息 -->
        <div class="title">
            <label>WellWise 疾病风险及健康管理基因检测</label>
            <h2>{{ product.product_name }}</h2>
        </div>


        <!-- 封面导航 -->
        <div class="cover">
            <router-link :to="{path: '/important'}">
              <img src="/static/img/reports/cover1.png" class="cover-pic">
              <img src="/static/img/reports/go.png" class="cover-move">
            </router-link>
        </div>


        <!-- 基因分类 -->
        <div class="type">
            
            <div class="area-title">
                <i></i>
                <span>表型分类</span>
            </div>

            <div class="type-cnt">

                <router-link :to="{path: '/' + (index + 1), query: {type: name, page: (index + 1), num: phenotype[name]}}" v-for="(name, index) in genoArray" class="cart">

                    <h2 class="report-name" :class="'reports_' + (index + 1)">{{ name }}</h2>
                    <span class="reports-num">{{ (phenotype[name] ? phenotype[name] : '0') + ' / ' + (group_rules[name] ? group_rules[name] : '0') }} 项报告</span>
                    <i class="type-icon"></i>
                    <span class="follow">重点关注 {{ out_phenotype[name] ? out_phenotype[name] : '0' }} 项</span>
                    <label class="inner">Go</label>
                    
                </router-link>
            </div>

        </div>


        <!-- 指导说明 -->
        <div class="guide">
            <div class="area-title">
                <i></i>
                <span>指导说明</span>
            </div>
            <div class="guide-cnt">

                <!-- <a href="javascript:;" class="col read">
                    <i></i>
                    <span>阅读指南</span>
                </a>
                <i class="hr"></i> -->
                <a href="javascript:;" class="col reg" @click="declare">
                    <i></i>
                    <span>免责申明</span>
                </a>
            </div>
        </div>
      </div>

      <!-- 获取报告列表加载 -->
      <transition name="fade">
        <div v-if="get_loading" class="loading">
          <img src="/static/img/reports_2.gif">
        </div>
      </transition>


      <!-- 为空 -->
      <div class="nothing" v-if="nothing">
        <h2 class="title">
          <p>无法获取报告</p>
          <p>请联系客服人员</p>
        </h2>
      </div>

      <!-- 免责声明 -->
      <transition name="declareshow">
        <div v-if="open_declare">
          <div class="declare-bg" @click="open_declare = false"></div>
          <div class="declare-wrap">
            <div class="declare-close" @click="open_declare = false">×</div>
            <div class="declare-alert">
              <div class="declare-cnt">
                <p style="margin-bottom: 5px;color: #647eaf;">尊敬的用户</p>
                <p style="margin-bottom: 5px;color: #647eaf;">您好！</p>
                <p style="margin-bottom: 20px;color: rgb(100, 126, 175);border-bottom: 1px solid #f3f3f3;padding-bottom: 15px;">请您做基因检测前，仔细阅读以下内容：</p>
                <p style="font-weight: bold;">一、关于基因检测的信息</p>
                <p>1. 检测的目的是检测DNA的变异，评估个体的健康状况及患病风险；</p>
                <p>2. 检测的基因依据科学报道，检测并不一定包含所有的相关基因；</p>
                <p>3. 该检测需要高质量的DNA，如果样本体积、质量或初始样本的其它条件不能满足检测要求，可能需要重新采集样本；</p>
                <p>4. 该检测服务仅用于评估个体患上疾病的风险程度及健康状况，而非诊断措施</p>
                <p>5. 本公司承诺对受检者所有的信息进行保密，包括个人信息及检测结果信息；</p>
                <p>6. 在收到样本后一般在20个工作日内会完成检测并出具报告，特殊情况可能需要更长时间。</p>
                <p>7. 检测结果所引起的不同程度的精神压力和负担，本公司不承担相关责任。</p>
                <p style="font-weight: bold;">二、隐私声明</p>
                <p>我们承诺对受检者个人信息与遗传信息给予严格保密，除非得到本人的确认，不会透露给第三方。但允许我们在隐去受检者姓名等私人信息后，在报告解读、科研、教学及质量控制中使用受检者的临床数据。</p>
                <p style="font-weight: bold;">三、申请人承诺与声明</p>
                <p>1. 我已经阅读了以上内容，了解基因检测可能会带来的精神压力；</p>
                <p>2. 我有机会提问而且所有相关问题均已得到解答，并对解答无异议；</p>
                <p>3. 我自愿并同意将自己样本的基因检测结果用于本人基因检测报告的制作；</p>
                <p>4. 我已知晓该技术服务仅用于评估个体患上疾病的风险程度及健康状况，而非诊断措施，我自愿进行此次基因检测，并同意签字。</p>
              </div>
            </div>
          </div>
        </div>
      </transition>

    </div>
</template> 


<script>
import gwHeader from './header';
import gwSearch from './search';
import mixins from '../mixins/index';


export default {
  name: 'reports-1',
  mixins: [mixins],
  components: {
    gwHeader,
    gwSearch
  },
  data () {
  	return {
      get_loading: false,        //  获取报告列表加载
      result: [],                //  初始搜索列表
      term: '',                  //  搜索值
      out_phenotype: '',
      phenotype: '',
      product: '',               //  产品信息  
      patient: '',               //  受检者信息
      nothing: false,            //  判断是否为空数据
      genoArray: ['健康风险', '罕见疾病', '药物反应', '运动健身', '饮食营养', '体质特征'],
      group_rules: '',           //  报告总数
      search_array: [],          //  存储搜索表信息   用于搜索后，点击结果跳转  需要抓取的参数
      open_declare: false        //  打开免责声明弹出层
  	}
  },
  mounted () {

    /*var vConsole = new VConsole();*/
    
    this.reportsId = this.GetQueryString("reportsId");
    this.access_token = this.GetQueryString("access_token");

    if(this.reportsId == '-1'){
      document.title = '示例报告';
    }


    //  获取报告数量
    this.getReport();

    
  },
  computed: {},
  methods: {



      //  获取报告
      getReport() {

        var self = this;

        self.get_loading = true;

        this.$axios({
          url: '/web_reports_total/' + this.reportsId + '?access_token=' + this.access_token,
          method: 'get'
        }).then(function(res){

          var data = res.data.data;
          var isSuccess = res.data.success;

          if(isSuccess){

             self.out_phenotype = data.phenotype.out_phenotype; //  关注报告数量
             self.phenotype = data.phenotype.phenotype;         //  具有报告数量
             self.product = data.product;                       //  产品信息
             self.patient = data.patient;                       //  受检者信息
             self.group_rules = data.meta.group_rules;          //  报告总数

          } else {

            self.$dialog.toast({
                mes: data.error,
                timeout: 1500,
                icon: 'error'
            });
          }

          //  判断是否有数据
          if(data.length == 0){
            self.nothing = true;
          }

          self.get_loading = false;
          
        });
      },


      //  搜索列表
      getResult(val) {

        var self = this;

        if (!val) return self.result = [];

        this.$axios({
          url: '/search/phenotype?access_token=' + this.access_token + '&term=' + val,
          method: 'get'
        }).then(function(res){

          var data = res.data.data;
          var isSuccess = res.data.success;


          if(isSuccess){
            

            for(var i = 0; i < data.length; i++){

              var name = data[i].report['CN'].name;
              

              var obj = {
                name: self.customLatex(name),
                type: data[i].taxonomy.supercategory,
                id: data[i]._id
              };

              self.result.push(obj);          //  存储搜索列信息
            }


          } else {

          }

        });
      },

      //  免责声明
      declare() {
        this.open_declare = true;
      }
  },
  watch: {


  }


}
</script>