<style scoped>
  @import '../css/search.css';
</style>

<template>
  <div class="search">


    <div class="search-wrap" :class="{active: active}">

      <!-- 搜索展现 -->
      <div class="search-open-bg">
        <div class="search-open" @click="open">
          <i class="search-icon"></i>
          <span class="search-font">搜索</span>
        </div>
      </div>

      <div class="search-cnt">

        <!-- 搜索列表 -->
        <div class="search-list">

          <div class="search-input-block">
            <div class="search-form">
              <i class="search-icon"></i>
              <input type="text" name="search-input" class="search-input" placeholder="搜索" v-model="term" ref="input">
            </div>
            <a href="javascript:;" class="cancel" @click="cancel">取消</a>
          </div>

          <div class="search-list-cnt">

            <div class="search-list-item" v-for="item in result">
              <router-link :to="{path: '/' + genoRouter[item.type] + '/3', query: {phenotype_id: item.id, reportsCategory: item.name}}">
                <p v-html="item.name"></p>
              </router-link>

            </div>
           
          </div>
        </div>
      </div>

    </div>
    
  </div>
</template>

<script>
export default {
  name: "search",
  props: ['result'],
  computed: {},
  data() {
    return {
      genoRouter: {             //  类型对应路由链接
        '健康风险': 1,
        '罕见疾病': 2,
        '药物反应': 3,
        '运动健身': 4,
        '饮食营养': 5,
        '体质特征': 6
      },
      active: false,
      term: '',          //  搜索内容
    }
  },
  mounted () {

     
  },
  methods: {

    //  打开搜索
    open() {
      this.active = true;

      this.$nextTick(function(){
        this.$refs.input.focus();
      });
      
    },

    //  取消
    cancel() {
      this.term = '';
      this.active = false;
    },

    //  点击
    itemClick(item) {
      this.$emit('itemClick', item);
    }
  },

  watch: {
    term(newVal) {
      this.$emit('term', newVal);
    }
  }
}
</script>