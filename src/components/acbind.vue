
<template>
    <div class="wrap">
        
      <div class="header">
        <div class="logo">
            <img src="/static/img/favico.png">
        </div>
      </div>
        
      <div class="form-cnt">

          <!-- 绑定手机 -->
          <div class="cart" v-if="isbind">
            <yd-cell-group>
                <yd-cell-item>

                    <yd-icon slot="icon" name="phone3" size=".45rem"></yd-icon>
                    <input type="tel" slot="right" v-model="tel" placeholder="请输入手机号码" maxlength="11" minlength="11">
                    <yd-sendcode slot="right" 
                                 v-model="start" 
                                 @click.native="sendCode1" 
                                 type="warning"
                                 init-str="获取验证码"
                                 run-str="{%s}秒重新获取"
                                 reset-str="重新获取"
                                 storage-key="true"
                    ></yd-sendcode>
                </yd-cell-item>
                <yd-cell-item>
                  <yd-input slot="right" type="tel" required v-model="code" max="4" min="4" placeholder="验证码"></yd-input>
                </yd-cell-item>
            </yd-cell-group>
            <yd-button size="large" type="primary" :readonly="tel.length != 11 || isNaN(tel) || code.length != 4" @click.native="bind('bind')">绑定</yd-button>
          </div>

          <!-- 解绑手机 -->
          <div class="cart" v-else>
            <yd-cell-group>
                <yd-cell-item>
                    <span slot="left">手机号：</span>
                    <yd-input slot="right" type="tel" v-model="tel" regex="mobile" min="11" max="11" placeholder="请输入手机号码" readonly></yd-input>
                </yd-cell-item>
            </yd-cell-group>
            <yd-button size="large" type="primary" :readonly="tel.length != 11 || isNaN(tel)" @click.native="bind('unbind')">解绑</yd-button>
          </div>
      </div>
        
    </div>
</template>


<script>

export default {
  data () {
  	return {
      isbind: false,    //  是否绑定
      tel: '',          //  手机号
      code: '',         //  验证码
      access_token: '', //  用户标识
      start: false      //  发送手机验证码是否开始
  	}
  },
  created () {

/*    var vConsole = new VConsole();*/

    //  获取 url 参数
    var tel = this.GetQueryString("tel");
    if(tel){
      document.title = '账号解绑';
      this.tel = tel;
    } else {
      document.title = '账号绑定';
      this.isbind = true;
    }

    //  获取用户标识
    this.access_token = this.GetQueryString("access_token");

    //  请求微信配置信息
    this.getWxConfig();

  },
  computed: {


  },
  methods: {


    //  请求微信配置信息
    getWxConfig(){

      var self = this;

      var url = encodeURIComponent(location.href);

      this.$axios({
        url: '/wx_jssdk',
        data: {url: url},
        method: 'post'
      }).then(function(res){

          var data = res.data.data;
          var isSuccess = res.data.success;

          if(!isSuccess){
            self.$dialog.toast({
                mes: data.error,
                icon: 'error',
                timeout: 1500
            });
            return false;
          }

          //  微信配置  SDK
          wx.config(data);

      });
    },


    //  获取 url 参数
    GetQueryString(name) {
      var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if(r!=null)return  unescape(r[2]); 
      return null;
    },

    //  发送验证码
    sendCode1() {

      var self = this;

      if(this.tel.length == '11' && !isNaN(this.tel)){
        this.$dialog.loading.open('发送中...');

        this.$axios({
          url: '/send_sms?tel='+this.tel
        }).then(function(res){

            var data = res.data.data;
            var isSuccess = res.data.success;

            if(isSuccess){

                self.start = true;
                self.$dialog.toast({
                    mes: '已发送',
                    icon: 'success',
                    timeout: 1500
                });

            } else {

              self.$dialog.toast({
                  mes: data.error,
                  icon: 'error',
                  timeout: 1500
              });

            }

            self.$dialog.loading.close();

        });
      } else {

          self.$dialog.loading.close();

          self.$dialog.toast({
              mes: '手机号格式错误',
              icon: 'error',
              timeout: 1500
          });
      }
    },

    //  绑定手机
    bind(action) {

      var self = this;

      this.$dialog.loading.open('绑定中...');

      var data = {
        action: action,
        access_token: this.access_token,
        tel: this.tel,
        captcha: this.code
      };


      this.$axios({
        url: '/wx/bind_tel',
        method: 'post',
        data: data
      }).then(function(res){
       
          var data = res.data.data;
          var isSuccess = res.data.success;


          //  判断绑定是否成功
          if(isSuccess){

            self.$dialog.loading.close();

            if(action == 'bind'){

              var mes = '绑定成功！';
            } else {

              var mes = '解绑成功！';
            }

            self.$dialog.toast({
                mes: mes,
                icon: 'success',
                timeout: 2000
            });

            setTimeout(function(){
              wx.closeWindow();
            },2000);


          } else {

              self.$dialog.loading.close();
              self.$dialog.toast({
                  mes: data.error,
                  icon: 'error',
                  timeout: 2000
              });

          }
          
      });

    }

  },
  watch: {
  	
  }
}
</script>

<style>
  
</style>