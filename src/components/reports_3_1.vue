<style scoped>
  @import '../css/reports_3.css';
  @import '../css/reports_3_1.css';
</style>

<template>
    <div class="reports-3-wrap" :class="typeStyle">

      <gw-header></gw-header>

        
      <div class="reports-3-content" v-if="info">

        <h2 class="title" v-html="info.report['CN'].name"></h2>

        <div class="bg">
          <div class="desc">
              <div class="desc-inner">
                  <h4>项目描述</h4>
              </div>
              <div class="desc-content">
                  <p v-html="info.report['CN'].introduction"></p>
              </div>
          </div>
        </div>

        <div class="myresult">
            <div class="result-name">
              <h2>我的检测结果</h2>
            </div>
            <div class="myMultiple">
                <span class="current">
                  <label class="result-title">{{ info.params.ch_outcome }}</label>
                  <label class="result-val" href="javascript:;">{{  info.params.odds > 10 ? '>10' : Number(info.params.odds).toFixed(2) }} 倍</label>
                </span>
            </div>
        </div>


        <!-- 模块消息-->
        <div class="solution">
          <collapses custom name="流行病学" :typeStyle="typeStyle">
            <div class="sub_wrap">
              <div class="para_cnt">
              
                <div class="col" v-if="info.report['CN'].table.prevalence_world">
                  <div class="col-head">
                    <label class="name">患病率</label>
                    <span class="val" v-html="info.report['CN'].table.prevalence_world"></span>
                  </div>
                </div>
                <div class="col" v-if="info.report['CN'].incidence_world">
                  <div class="col-head">
                    <label class="name">发病率</label>
                    <span class="val" v-html="info.report['CN'].incidence_world"></span>
                  </div>
                </div>

                <div class="explain" v-html="info.report['CN'].epidemiology"></div>
              </div>
            </div>
          </collapses>

          <collapses custom name="危险因素" :typeStyle="typeStyle" v-if="info.report['CN'].risk_elements">
            <div class="sub_wrap">
            
              <div class="txt">
                {{ info.report['CN'].risk_elements }}
              </div>

            </div>
          </collapses>

          <collapses custom name="临床表现" :typeStyle="typeStyle" v-if="info.report['CN'].symptom">
            <div class="sub_wrap">

              <!-- <img src="/static/img/reports/reports_3_1.png" class="coverImg"> -->
              <div class="para_cnt">
                <ul>
                    <li>
                      <!-- <div class="para_title">
                        <i class="icon reports_2"></i>
                        <label class="name">发热</label>
                      </div> -->
                      <span class="about" v-html="info.report['CN'].symptom"></span>
                    </li>
                </ul>
              </div>
            </div>
          </collapses>

          <collapses custom name="检查方法" :typeStyle="typeStyle" v-if="info.report['CN'].accessory_examination">
            <div class="sub_wrap">
              <div class="para_cnt">
                <ul>
                    <li>
                      <!-- <div class="para_title">
                        <i class="icon reports_2"></i>
                        <label class="name">发热</label> 
                      </div>-->
                      <span class="about" v-html="info.report['CN'].accessory_examination"></span>
                    </li>
                </ul>
              </div>
            </div>
          </collapses>

          <collapses custom name="行动措施" :typeStyle="typeStyle" v-if="info.report['CN'].procedure">
            <div class="sub_wrap">
              <div class="para_cnt">
                <ul>
                    <li>
                      <!-- <div class="para_title">
                        <i class="icon reports_2"></i>
                        <label class="name">发热</label>
                      </div> -->
                      <span class="about" v-html="info.report['CN'].procedure"></span>
                    </li>
                </ul>
              </div>
            </div>
          </collapses>

          <collapses custom name="检测位点" :typeStyle="typeStyle">
            <div class="sub_wrap">
              
              <div class="table-wrap">
                  <div class="table-head">
                    <span class="td name">检测位点</span>
                    <span class="td gene">基因</span>
                    <span class="td ref">野生</span>
                    <span class="td alt">突变</span>
                    <span class="td allele">检测结果</span>
                  </div>
                  <div class="table-body">
                    <ul>
                      <li v-for="(item, index) in info.tests">
                        <span class="td name">{{ item.name }}</span>
                        <span class="td gene">{{ item.gene }}</span>
                        <span class="td ref">{{ item.alleles.ref }}</span>
                        <span class="td alt">{{ item.alleles.alt }}</span>
                        <span class="td allele">{{ info.gw[index].allele }}</span>
                      </li>
                    </ul>
                  </div>
              </div>
            </div>
          </collapses>

        </div>

        <!-- 相关操作 -->
        <div class="oper-wrap"></div>

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
import collapses from './collapses';
import mixins from '../mixins/index';


export default {
  name: 'reports_3_1',
  data () {
  	return {
      typeStyle: 'reports_1',    //  1  健康风险
      get_loading: false,
      info: '',                  //  信息
  	}
  },
  components: {
    gwHeader,
    collapses
  },
  mixins: [mixins],
  mounted () {

    this.reportsId = this.GetQueryString("reportsId");
    this.access_token = this.GetQueryString("access_token");

    //  调用报告
    this.getReports();

  },
  computed: {},
  methods: {


    getReports() {

      var self = this;

      //  开启加载
      self.get_loading = true;

      var phenotype_id = this.$route.query.phenotype_id;

      this.$axios({
        url: '/web_reports/detail/' + this.reportsId + '?access_token=' + this.access_token + '&phenotype_id=' + phenotype_id,
        method: 'get'
      }).then(function(res){

        var data = res.data.data;
        var isSuccess = res.data.success;

        if(isSuccess){

          //  判断是否有结果
          if(data.phenotype.length > 0){

            self.info = data.phenotype[0];

            //  集中 latex解析处理
            self.fieldshandle();

            
          } else {
            self.$dialog.alert({
              mes: '您没有该表型结果',
              callback: () => {
                 self.$router.push('/');
              }
            });
          }

        } else {

        }

        //  关闭加载
        self.get_loading = false;
        
      });
    }
  },


}
</script>