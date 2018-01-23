<style scoped>
  @import '../css/collapses.css';
</style>

<template>

  <!-- name 判断是否有子分类展开   没有调用 noSub 样式 -->
  <div :class="[ custom === '' ? 'collapse-custom-wrap': 'collapse-wrap', {'is-active': type }, typeStyle, name ? '': 'noSub']">

    <!-- 普通手风琴 -->
    <div v-if="custom !== ''">


      <!-- 判断一级分类  名称 name 是否为空 -->
      <template v-if="name">
        <div class="collapse-header" @click="toggle">
            <div class="collapse-header-cnt">
              <div class="collapse-ico"></div>
              <div class="collapse-name" :style="hign ? {color: '#ed6363'}: ''">{{ name }}</div>
            </div>
            <div class="collapse-desc">{{ num }}项</div>
            <div class="collapse-rotated" v-if="!disabled"></div>
        </div>

      </template>


      <!-- name 为空  子菜单展示  ( 罕见疾病 ) -->
      <template v-else>
        <div class="collapse-sub-list">
          <ul>
            <li v-for="(sub, index) in sub_list">

              <!-- 判断报告列表是否含有用户报告， 有可以跳转 -->
              <template v-if="sub.in">
                <router-link :to="{path: '/' + $route.query.page + '/3', query: {phenotype_id: sub.phenotype_id, reportsCategory: reportsCategory }}" class="collapse-sub-item">
                  <div class="collapse-header-cnt" :class="{isAttention: sub.Attention}">
                    <div class="collapse-ico"></div>
                    <div class="collapse-name" :style="hign ? {color: '#ed6363'}: ''" :class="sub.in ? 'in': ''" v-html="sub.ch_name" v-if="sub.ch_name"></div>
                  </div>
                  <div class="collapse-multiple" v-if="sub.params">{{ sub.params.ch_outcome }}</div>
                </router-link>
              </template>

              <template v-else>
                <div>
                  <div class="collapse-header-cnt" :class="{isAttention: sub.Attention}">
                    <div class="collapse-ico"></div>
                    <div class="collapse-name" :style="hign ? {color: '#ed6363'}: ''" :class="sub.in ? 'in': ''" v-html="sub.ch_name" v-if="sub.ch_name"></div>
                  </div>
                  <div class="collapse-multiple" v-if="sub.params">{{ sub.params.ch_outcome }}</div>
                </div>
              </template>

            </li>
          </ul>
        </div>
      </template>


      <transition name="slide-fade">
          <div class="collapse-content" v-show="type" :style="type ? { height: height + 'px' }: { height: 0 }">
              <div class="sub-collapse" ref="content">
                <ul>
                    <li v-for="(sub, index) in sub_list">

                      <!-- 判断报告列表是否含有用户报告， 有可以跳转 -->
                      <template v-if="sub.in">

                        <router-link :to="{path: '/' + $route.query.page + '/3', query: {phenotype_id: sub.phenotype_id, reportsCategory: reportsCategory }}" class="link">
                            <div class="sub-collapse-cnt" :class="[{isAttention: sub.Attention}, $route.query.page == '1' ? 'center': '']">
                                
                                <label class="sub-name" :class="sub.in ? 'in': ''" ref="guide1">
                                  <span v-html="sub.ch_name"></span>
                                </label>

                                <!-- 判断是否是健康风险  且 true有值 -->
                                <div class="sub-multiple-numb" v-if="$route.query.page == '1' && sub.params">

                                  <!-- 如果无倍数 则显示 outcome 中文结果   注意  在健康风险排序中  odds 不存在时  默认给予 -1 所以 odds 永远都存在  判断是否为 -1 -->
                                  <span v-if="sub.params.odds != -1" ref="guide2">{{ sub.params.odds > 10 ? '>10' : Number(sub.params.odds).toFixed(2) }} 倍</span>
                                  <span v-else>{{ sub.params.ch_outcome }}</span>
                      
                                </div>
                                  <!-- <color :type="sub.params.ch_outcome" v-if="$route.query.page == '1' && sub.params"></color> -->
                                
                                  <span class="sub-multiple" v-if="$route.query.page != '1' && sub.params" v-html="p_split(sub.params.ch_outcome)"></span> 
                                
                            </div>
                        </router-link>

                      </template>

                      <template v-else>
                          <div class="sub-collapse-cnt" :class="[{isAttention: sub.Attention}, $route.query.page == '1' ? 'center': '']">

                              <label class="sub-name" :class="sub.in ? 'in': ''">
                                <span v-html="sub.ch_name"></span>
                              </label>

                              <!-- 判断是否是健康风险  且 true有值 -->
                              <div class="sub-multiple-numb" v-if="$route.query.page == '1' && sub.params">

                                <!-- 如果无倍数 则显示 outcome 中文结果   注意  在健康风险排序中  odds 不存在时  默认给予 -1 所以 odds 永远都存在  判断是否为 -1 -->
                                <span v-if="sub.params.odds != -1">{{ sub.params.odds > 10 ? '>10' : Number(sub.params.odds).toFixed(2) }} 倍</span>
                                <span v-else>{{ sub.params.ch_outcome }}</span>

                              </div>
                              <!-- <color :type="sub.params.ch_outcome" v-if="$route.query.page == '1' && sub.params"></color> -->

                              <span class="sub-multiple" v-if="$route.query.page != '1' && sub.params" v-html="p_split(sub.params.ch_outcome)"></span> 
                          </div>
                      </template>


                    </li>
                </ul>
              </div>
          </div>
      </transition>
    </div>

    <!-- 自定义手风琴 -->
    <div v-if="custom === ''">
      <div class="collapse-custom-header" @click="toggle" ref="custom_col">
        <div class="collapse-custom-header-cnt">
          <div class="collapse-custom-name" :style="hign ? {color: '#ed6363'}: ''">{{ name }}</div>
        </div>
        <div class="collapse-custom-rotated" v-if="!disabled"></div>
      </div>
      <transition name="slide-fade">
          <div class="collapse-custom-content" v-show="type" :style="type ? { height: height + 'px' }: { height: 0 }">
              <div class="sub-custom-collapse" ref="content">
                  <slot></slot>
              </div>
          </div>
      </transition>
    </div>

  </div>
</template>

<script>
import mixins from '../mixins/index';


export default {
  name: "Collapse",
  mixins: [mixins],
  props: ['name', 'num', 'sub_list', 'current', 'accordion', 'disabled', 'reportsCategory', 'hign', 'typeStyle', 'custom', 'active_default'],
  components: {
    
  },
  computed: {

    //  判断是否  每次显示单个   true ( 单个 )
    type() {

      if(this.accordion === ''){

        //  在单个显示中   指定显示的其余部分  状态全部重置成 关闭
        if(this.current != this._uid){
          this.active = false;
        }

        return this.active && this.current == this._uid;

      } else {

        return this.active;
      }
    }
    
  },
  data() {
    return {
      height: 0,
      active: false,
      menu_url: [
        '3_1',
        '3_2', 
        '3_3',
        '3_4',
        '3_5',
        '3_6'
      ]
    }
  },
  mounted () {

    //  默认打开
    if(this.active_default){
      this.openCol();
    }
    
  },
  methods: {

    //  手风琴切换
    toggle () {

      //  屏蔽点击
      if(this.disabled){
        return false;
      }

      //  判断是否  每次显示单个   true （ 单个 ）
      if(this.accordion === ''){
        this.$emit('_uid', this._uid);
      }

      //  当前切换状态
      this.active = !this.active;

      this.$nextTick(function(){

        this.height = this.$refs.content.offsetHeight;

        //  自定义手风琴  自适应文本内容展现方式
        if(this.custom === ''){

          //  元素的绝对距离
          //var eleTop = this.getTop(this.$refs.custom_col);
          //document.documentElement.scrollTop = eleTop;

          var scrollTop = document.body.scrollTop;

          var i = 0;

          var interval = '';

          interval = setInterval(function(){
            
            if(i < 100){
              i += 5;
            } else {
              clearInterval(interval)
            }
            
            document.body.scrollTop = scrollTop + i;
          });
          
          //window.scrollTo(0,scrollTop + 50 + 'px');

        }

      });

    },

    //  打开手风琴第一列
    openCol() {
      this.active = true;
      this.$nextTick(function(){
        this.height = this.$refs.content.offsetHeight;
      });
    },


    //  用户首次引导  -  获取某元素 dom 第二级报告第一个元素
    getDom(info) {

      var domArray = [];
      this.$nextTick(function(){
        for(var i in info){
          domArray.push(this.$refs[info[i].ref][0]);
        }

        this.$emit('domArray', domArray);

      });
    }

  }
}
</script>