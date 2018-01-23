<style scoped>
  @import '../css/header.css';
</style>

<template>
  <div class="header">
    <div class="logo">
      <a href="javascript:;" class="back" @click="back"></a>
      <img src="/static/img/favico.png">
      <span class="explain" v-if="explain === ''" @click="openExplain">报告说明</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "header",
  props: ['explain'],
  computed: {},
  data() {
    return {
      tabVal: ''
    }
  },
  mounted () {

  },
  methods: {

    //  返回
    back() {
      this.$router.go(-1);
    },

    //  打开报告说明
    openExplain() {
      this.$emit('openExplain');
    }
  }
}
</script>