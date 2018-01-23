<style scoped>
  .color-cnt{
    font-size: 0;
  }
  .color-block{
    display: inline-block;
    width: 12px;
    height: 12px;
    background: #e4e6e8;
    margin-right: 3px;
    border-radius: 100%;
  }
  .color-block:nth-child(1).show{
    background: #82af45;
  }
  .color-block:nth-child(2).show{
    background: #aacd03;
  }
  .color-block:nth-child(3).show{
    background: #dadf00;
  }
  .color-block:nth-child(4).show{
    background: #fab714;
  }
  .color-block:nth-child(5).show{
    background: #dc0068;
  }

/* 展开动画 */
.collapse-wrap.is-active .color-block.show:nth-child(1){
  animation: show 2s;
  -webkit-animation: show 2s;
}
.collapse-wrap.is-active .color-block.show:nth-child(2){
  animation: show 3s;
  -webkit-animation: show 3s;
}
.collapse-wrap.is-active .color-block.show:nth-child(3){
  animation: show 4s;
  -webkit-animation: show 4s;
}
.collapse-wrap.is-active .color-block.show:nth-child(4){                                                                                                                                    
  animation: show 5s;
  -webkit-animation: show 5s;
}
.collapse-wrap.is-active .color-block.show:nth-child(5){
  animation: show 6s;
  -webkit-animation: show 6s;
}

@keyframes show
{
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@-webkit-keyframes show
{
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}


</style>

<template>
  <div class="color-wrap">
    <div class="color-cnt">
      <a href="javascript:;" class="color-block" :class="level > 0 ? 'show': ''"></a>
      <a href="javascript:;" class="color-block" :class="level > 1 ? 'show': ''"></a>
      <a href="javascript:;" class="color-block" :class="level > 2 ? 'show': ''"></a>
      <a href="javascript:;" class="color-block" :class="level > 3 ? 'show': ''"></a>
      <a href="javascript:;" class="color-block" :class="level > 4 ? 'show': ''"></a>
    </div>
  </div>
</template> 


<script>
import mixins from '../mixins/index';
import gwHeader from './header';


export default {
  name: 'color',
  props: ['type'],
  mixins: [mixins],
  data () {
  	return {
      level: ''
  	}
  },
  mounted () {

    this.level = this.levelhandle(this.type);
  },
  computed: {
    
  },
  methods: {



  }

}
</script>