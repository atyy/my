
<template>
    <div class="app">
        
      <!-- 报告首页 -->  
      <div class="outter" :class="{'hideLeft': $route.name > 1}">  
        <router-view></router-view>
      </div>
      

      <!-- 报告第二层 -->
      <transition name="custom-classes-transition" :enter-active-class="enterAnimate" :leave-active-class="leaveAnimate">
        <router-view name="subPage_2" class="sub-page outter" :class="{'hideLeft': $route.name > 3}"></router-view>
      </transition>


      <!-- 重点关注项 -->
      <transition name="custom-classes-transition" :enter-active-class="enterAnimate_3" :leave-active-class="leaveAnimate_3">
        <router-view name="subPage_4" class="sub-page outter" :class="{'hideLeft': $route.name > 3 && $route.name < 4}"></router-view>
      </transition>


      <!-- 报告第三层 -->
      <transition name="custom-classes-transition" :enter-active-class="enterAnimate_3" :leave-active-class="leaveAnimate_3">
        <router-view name="subPage_3" class="sub-page"></router-view>
      </transition>


    </div>
</template> 


<script>


export default {
  data () {
  	return {
      "enterAnimate": "",   //  页面进入动效
      "leaveAnimate": "",   //  页面离开动效
      "enterAnimate_3": "",
      "leaveAnimate_3": "",
      "enterAnimate_4": "",
      "leaveAnimate_4": ""
  	}
  },
  mounted () {

    
      
  },
  computed: {


  },
  methods: {


  },
  watch: {
      // 监听 $route 为店内页设置不同的过渡效果
      "$route" (to, from) {


        const toDepth = Number(to.name);
        const fromDepth = Number(from.name);


        this.enterAnimate = toDepth > fromDepth ? "animated fadeInRight" : "animated fadeInLeft";
        this.leaveAnimate = toDepth > fromDepth ? "animated fadeOutLeft" : "animated fadeOutRight";


        this.enterAnimate_3 = toDepth > fromDepth ? "animated fadeInRight" : "animated fadeInLeft";
        this.leaveAnimate_3 = toDepth < fromDepth ? "animated fadeOutLeft" : "animated fadeOutRight";


        if (toDepth > 2) {
            this.leaveAnimate = "animated fadeOutRight"
        }
      }
  }
}
</script>

<style lang="less">
  @import "../css/animate.css";
  @import "../css/common.css";

</style>