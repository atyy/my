
<template>
    <div class="example-wrap">
        
      

    </div>
</template>


<script>


export default {
  data () {
  	return {
      
  	}
  },
  created () {

      this.access_token = this.GetQueryString("access_token");
      this.reportsId = this.GetQueryString("reportsId");

      //  请求事例报告
      this.getExample();
  },
  computed: {


  },
  methods: {

    //  获取 url 参数
    GetQueryString(name) {
      var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if(r!=null)return  unescape(r[2]); 
      return null;
    },

    //  获取 路由 参数
    GetRouteString(name) {
      var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
      var r = window.location.href.substr(1).match(reg);
      if(r!=null)return (r[2]); 
      return null;
    }



  },
  watch: {
  	
  }
}
</script>

<style>
  
</style>