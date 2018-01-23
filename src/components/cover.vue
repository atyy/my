<style scoped>
  @import '../css/cover';
</style>

<template>
  <div class="cover-wrap" :class="[typeStyle]">
      <div class="cover-cnt">
        <i class="cover-icon"></i>
        <div class="cover-txt">
          <h2 class="cover-title">{{ name }}</h2>
          <span class="cover-num">{{ num }} 项报告</span>
        </div>
      </div>
  </div>
</template> 


<script>

export default {
  name: 'cover',
  data () {
  	return {
      
  	}
  },
  props: ['typeStyle', 'name', 'num'],
  mounted () {}
}
</script>