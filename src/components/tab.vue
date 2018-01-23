<style scoped>
  @import '../css/tab.css';
</style>

<template>
  <div class="tab-wrap">

    <!-- 选项卡 -->
    <div class="tab-menu">
      <a href="javascript:;" class="item" @click="toggle(0)">代谢</a>
      <a href="javascript:;" class="item" @click="toggle(1)">疗效</a>
      <div class="bor" :style="{left: tabVal * 50 + '%'}"></div>
    </div>


    <div class="tab-content">
      
        <div class="tab-head">
          <a href="javascript:;" class="col_1">基因</a>
          <a href="javascript:;" class="col_2">表型</a>
          <a href="javascript:;" class="col_3">结果</a>
        </div>


        <!-- 滑动区块 -->
        <div class="tab-block" :style="move">

          <div class="tab-toggle">
            <div class="tab-body">
              <a class="col_1">CYP2C19</a>
              <a class="col_2">超快代谢</a>
              <a class="col_3">考虑到代谢产生活性产物速
                  度快，建议您换成不被CYP
                  2C19代谢的药物。</a>
            </div>
            <div class="tab-body">
              <a class="col_1">CYP2C19</a>
              <a class="col_2">正常代谢</a>
              <a class="col_3">依据药物标签推荐标准剂量。</a>
            </div>
          </div>

          <div class="tab-toggle">
            <div class="tab-body">
              <a class="col_1">CYP2C19</a>
              <a class="col_2">中间代谢</a>
              <a class="col_3">依据药物标签推荐标准剂量。</a>
            </div>
            <div class="tab-body">
              <a class="col_1">CYP2C19</a>
              <a class="col_2">慢代谢</a>
              <a class="col_3">建议您减少50%起始标准剂
              量，或者换成不被CYP2C1
              9酶代谢的药物。</a>
            </div>
          </div>
      </div>
      


    </div>
  </div>
</template>

<script>
export default {
  name: "Tab",
  props: [],
  computed: {

   move() {

    var style = {
      '-webkit-transform': 'translateX(-' + (this.tabVal * 100) + '%)',
      'transform': 'translateX(-' + (this.tabVal * 100) + '%)'
    }
    return style;
   }

    
  },
  data() {
    return {
      tabVal: ''
    }
  },
  mounted () {

  },
  methods: {
    toggle (val) {

      this.tabVal = val;

    }
  }
}
</script>