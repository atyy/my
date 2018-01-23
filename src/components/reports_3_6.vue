<style scoped>
  @import '../css/reports_3.css';
  @import '../css/reports_3_6.css';
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
              <!-- <p>（人群比例）</p> -->
            </div>
            <div class="myMultiple">
                <span v-for="item in resultSort" :class="info.params.ch_outcome === info.report['CN'].outcome[item].name ? 'current': ''">
                  <label class="result-inner" v-html="p_split(info.report['CN'].outcome[item].name)"></label>
                  <!-- <label class="result-val" href="javascript:;">{{ info.refs.outcome_pct[item] + '%' }}</label> -->
                </span>
            </div>
        </div>


        <!-- 模块消息-->
        <div class="solution">
          <collapses custom name="食物护理" :typeStyle="typeStyle" v-if="info.report['CN'].food">
            <div class="sub_wrap">
             
              <div class="para_cnt">
                <div class="font">
                  <span>下列食物可以改善肤色暗沉</span>
                </div>
                <div class="type-cnt" v-html="info.report['CN'].food"></div>
              </div>

            </div>
          </collapses>

          <collapses custom name="口服产品" :typeStyle="typeStyle" v-if="info.report['CN'].oral">
            <div class="sub_wrap">
              
              <div class="txt" v-html="info.report['CN'].oral"></div>

            </div>
          </collapses>

          <collapses custom name="外用产品" :typeStyle="typeStyle" v-if="info.report['CN'].topical">
            <div class="sub_wrap">
              
              <div class="txt" v-html="info.report['CN'].topical"></div>

            </div>
          </collapses>

          <collapses custom name="能力训练要点" :typeStyle="typeStyle" v-if="info.report['CN'].method_of_training">
            <div class="sub_wrap">
              
              <!-- method_of_training -->

            </div>
          </collapses>

          <collapses custom name="能力培养方法" :typeStyle="typeStyle" v-if="info.report['CN'].training_methods">
            <div class="sub_wrap">
              
              <div class="txt" v-html="info.report['CN'].training_methods"></div>

            </div>
          </collapses>

          <collapses custom name="干预措施" :typeStyle="typeStyle" v-if="info.report['CN'].procedure">
            <div class="sub_wrap">
              
              <div class="txt" v-html="info.report['CN'].procedure"></div>

            </div>
          </collapses>

          <collapses custom name="临床意义" :typeStyle="typeStyle" v-if="info.report['CN'].clinical_significance">
            <div class="sub_wrap">
              
              <div class="txt" v-html="info.report['CN'].clinical_significance"></div>

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
  name: 'reports_3_6',
  data () {
  	return {
      typeStyle: 'reports_6',    //  6  体质特征
      get_loading: false,
      info: '',                  //  信息
      resultSort: ''            //  排序后的检测结果
  	}
  },
  mixins: [mixins],
  components: {
    gwHeader,
    collapses
  },
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


            //  对检测结果进行排序
            var ids = self.info.refs.outcome_ids;
            var keys = Object.keys(ids);             //  初始化检测结果列表  keys
            var values = Object.values(ids);         //  初始化检测结果列表  values

            var v = '';


            //  遍历删除  值 为 15 的结果   *** 特殊处理
            for(var i = 0; i < values.length; i++){
              if(values[i] == '15'){
                values.splice(i, 1);
                keys.splice(i, 1);
              }
            }



            for(var i = 0; i < values.length; i++){
              for(var j = i + 1; j < values.length; j++){
                
                if(values[i] > values[j]){
                  v = values[i];
                  values[i] = values[j];
                  values[j] = v;

                  v = keys[i];
                  keys[i] = keys[j];
                  keys[j] = v;
                }
                
              }
            }
            

            //  得到检测结果排序后的顺序
            self.resultSort = keys;

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

  }
}
</script>