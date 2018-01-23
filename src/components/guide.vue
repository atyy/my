<style scoped>
  
.area{
    position: fixed;
    border: 2px solid #25f57f;
    z-index: 101;
}
.mask{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.40);
}
.explain-wrap{
    position: fixed;
    z-index: 100;
}
.explain-icon{
    display: block;
    width: 0;
    height: 0;
    border-width: 18px 10px;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
    position: absolute;
    top: 0;
    z-index: 98;
}
.explain-cnt{
    max-width: 250px;
    max-height: 150px;
    background: #fff;
    padding: 10px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    font-size: 14px;
    color: #464646;
    margin-top: 36px;
}
.oper{
  margin-top: 30px;
  text-align: center;
}
.oper h3{
  font-size: 16px;
  border: 1px solid #ade015;
  display: inline-block;
  padding: 5px 15px;
  border-radius: 5px;
  color: #ade015;
}

</style>

<template>
  <div class="guide-wrap" v-show="active" @click="close">

    <!-- 区域 -->
    <div class="area" 
      v-for="item in guide_info"
      :style="{ 
        'width': item.width + 10 + 'px',
        'height': item.height + 10 + 'px',
        'top': item.top - 5 + 'px',
        'left': item.left - 5 + 'px' 
      }"
      v-show="showIndex == item.id ? true : false"
      ></div>

    <!-- 遮罩层 -->
    <div class="mask"></div>

    <!-- 说明 -->
    <div class="explain-wrap"
      v-for="item in guide_info"
      :style="{
        'top': item.top + item.height + 'px',
        'right': item.right < item.left ? item.right + 'px' : '',
        'left': item.left < item.right ? item.left + 'px' : ''
      }"
      v-show="showIndex == item.id ? true : false"
      >
      <i class="explain-icon" 
      :style="{
        'right': item.right < item.left ? item.right + 'px' : '',
        'left': item.left < item.right ? item.left + 'px' : ''
      }"
      ></i>
      <div class="explain-cnt">
        {{ item.cnt }}
      </div>

      <!-- 用户操作 -->
      <div class="oper">
        <h3>{{ oper_font }}</h3>
      </div>

    </div>

    

  </div>
</template> 


<script>
import mixins from '../mixins/index';


export default {
  name: 'guide',
  props: ['guide_info'],
  mixins: [mixins],
  data () {
  	return {
      active: true,        //  控制整个引导开关
      showIndex: 1,        //  默认显示第一个
      oper_font: '下一步'  //  用户操作文字
  	}
  },
  computed: {

    
  },
  mounted () {

    //  锁定屏幕
    //document.body.style.overflow = "hidden";

    document.getElementsByClassName('sub-page')[0].style.overflow = 'hidden';

    //  判断当前是否为最后一个引导
    if(this.showIndex == this.guide_info.length){
      this.oper_font = '我知道了';
    }


  },
  computed: {
    
  },
  methods: {

    //  关闭引导
    close() {

      //  判断是否加载完全部的引导
      if(this.showIndex == this.guide_info.length){

        //document.body.style.overflow = "";
        document.getElementsByClassName('sub-page')[0].style.overflow = '';
        this.active = false;

      } else {

        if(this.showIndex + 1 == this.guide_info.length){
          this.oper_font = '我知道了';
        }

        ++this.showIndex;

      }
    },

    //  打开引导
    open() {

      //var scrollTop = document.documentElement.scrollTop;

      //document.body.style.overflow = "hidden";
      document.getElementsByClassName('sub-page')[0].style.overflow = 'hidden';
      this.active = true;
    }

  },

  watch: {
    
  }

}
</script>