
<template>
    <div class="wrap">

      <div class="header">
        <div class="logo">
            <img src="/static/img/favico.png">
        </div>
      </div>

      <div class="form-cnt">

        <yd-cell-group>

            <div class="barcode_form">
              <yd-cell-item>
                  <span slot="left">条形码<span class="required"> *</span>：</span>
                  <yd-input slot="right" v-model="barcode" placeholder="请输入采集器上的条形码" :on-blur="outproduct" required :show-clear-icon="false" :show-error-icon="false" :show-success-icon="false" :show-required-icon="false" min="6" max="10"></yd-input>
                  
                  <yd-icon slot="icon" name="qrscan" size=".4rem" @click.native="qrscan"></yd-icon>
                 
              </yd-cell-item>

              <span class="yd-input-error input_state" v-show="!barcode_success"></span>
              <span class="yd-input-success input_state" v-show="barcode_success"></span>
            </div>

            <yd-cell-item>
                <span slot="left">检测产品：</span>
                <yd-input slot="right" v-model="product" :readonly="true" :show-clear-icon="false"></yd-input>
            </yd-cell-item>
        </yd-cell-group>


        <yd-cell-group>
            <yd-cell-item>
                <yd-icon slot="icon" name="phone3" size=".45rem"></yd-icon>
                <input type="tel" slot="right" v-model="tel" placeholder="请输入手机号码" :readonly="phoneIn" maxlength="11" minlength="11">
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

            <div class="captcha_wrap">
              <img src="/static/img/code.png" class="captcha_ico">
              <yd-cell-item class="captcha_input">
                  <yd-input slot="right" type="tel" required v-model="captcha" max="4" min="4" placeholder="验证码"></yd-input>
              </yd-cell-item>
            </div>

        </yd-cell-group>

        <yd-cell-group>    
            <yd-cell-item>
                <span slot="left">姓名<span class="required"> *</span>：</span>
                <yd-input slot="right" v-model="name" regex="/\S{2,}/" :show-clear-icon="false" placeholder="请输入受检者的姓名" required></yd-input>
            </yd-cell-item>

            <yd-cell-item arrow type="label">
                <span slot="left">性别<span class="required"> *</span>：</span>
                <select slot="right" v-model="gender" style="color: #555">
                    <option value="male">男</option>
                    <option value="female">女</option>
                </select>
            </yd-cell-item> 

            <yd-cell-item arrow>
                <span slot="left">出生日期<span class="required"> *</span>：</span>
                <yd-datetime type="date" v-model="dob" slot="right" startYear="1900" :endDate="today" :class="{show: isdob}" class="hide"></yd-datetime>
            </yd-cell-item>     

            <yd-cell-item arrow type="label">
                <span slot="left">民族<span class="required"> *</span>：</span>
                <select slot="right" v-model="ethnicity" style="color: #555">
                    <option :value="item" v-for="item in ethnicityArray" v-text='item'></option>
                </select>
            </yd-cell-item> 

            <yd-cell-item>
                <span slot="left">身高(cm)<span class="required"> *</span>：</span>
                <yd-input slot="right" type="number" v-model="height" placeholder="请输入受检者的身高，厘米" required></yd-input>
            </yd-cell-item>

            <yd-cell-item>
                <span slot="left">体重(kg)<span class="required"> *</span>：</span>
                <yd-input slot="right" type="number" v-model="weight" placeholder="请输入受检者的体重，千克" required></yd-input>
            </yd-cell-item>

            <yd-cell-item>
                <span slot="left">电子邮箱：</span>
                <yd-input slot="right" v-model="email" :debug="true" regex="email" placeholder="请输入您的电子邮箱"></yd-input>
            </yd-cell-item>

            <yd-cell-item>
                <span slot="left">国籍：</span>
                <yd-input slot="right" v-model="country" placeholder="请输入您的国籍"></yd-input>
            </yd-cell-item>

            <yd-cell-item arrow>
                <span slot="left">籍贯：</span>
                <input slot="right" type="text" @click.stop="show2 = true" v-model="pob" readonly>
            </yd-cell-item>
            <yd-cityselect v-model="show2" :callback="result2" :items="city"></yd-cityselect>

            <yd-cell-item>
                <span slot="left">家族病史：</span>
                <yd-input slot="right" v-model="disease" placeholder="可提高结果的准确度"></yd-input>
            </yd-cell-item>

            
            <yd-cell-item arrow>
                <span slot="left">所在地区：</span>
                <input slot="right" type="text" @click.stop="show1 = true" v-model="location" readonly>
            </yd-cell-item>
            <yd-cityselect 
                v-model="show1" 
                :callback="result1" 
                :items="district" 
                :provance="address_provance" 
                :city="address_city" 
                :area="address_area" 
                v-if="address_provance && address_city && address_area" 
            ></yd-cityselect>

            <yd-cell-item>
                <span slot="left">详细地址：</span>
                <yd-input slot="right" v-model="address" placeholder="请输入您可邮寄的地址"></yd-input>
            </yd-cell-item>

          </yd-cell-group>

          <yd-button size="large" type="primary" @click.native="bind" class="bind-btn">绑定</yd-button>
      </div>
    </div>
</template>


<script>
import Vue from 'vue';
import District from 'ydui-district/dist/jd_province_city_area_id';
import District_city from 'ydui-district/dist/gov_province_city_id.js';
import {DateTime} from 'vue-ydui/dist/lib.rem/datetime';
Vue.component(DateTime.name, DateTime);

//  计算今天时间
var myDate = new Date();
var year = myDate.getFullYear();
var month = (myDate.getMonth() + 1) < 10 ? '0' + (myDate.getMonth() + 1) : (myDate.getMonth() + 1);
var date = myDate.getDate() < 10 ? '0' + myDate.getDate() : myDate.getDate();

var today = year + '-' + month + '-' + date;


export default {
  data () {
  	return {
  		show1: false,
      show2: false,
      location: '',                       //  所在地 默认值
      address_provance: '',               //  所在地 省
      address_city: '',                   //  所在地 市
      address_area: '',                   //  所在地 区
      district: District,
      city: District_city,
	    ethnicityArray: ["其他", "汉族", "蒙古族", "回族", "藏族", "维吾尔族", "苗族", 				 //	名族
	    "彝族", "壮族", "布依族", "朝鲜族", "满族", "侗族", "瑶族", "白族", "土家族", "哈尼族", 
	    "哈萨克族", "傣族", "黎族", "傈僳族", "佤族", "畲族", "高山族", "拉祜族", "水族", "东乡族", 
	    "纳西族", "景颇族", "柯尔克孜族", "土族", "达斡尔族", "仫佬族", "羌族", "布朗族", "撒拉族", 
	    "毛难族", "仡佬族", "锡伯族", "阿昌族", "普米族", "塔吉克族", "怒族", "乌孜别克族", "俄罗斯族", 
	    "鄂温克族", "崩龙族", "保安族", "裕固族", "京族", "塔塔尔族", "独龙族", "鄂伦春族", "赫哲族",
	    "门巴族", "珞巴族", "基诺族"],
      start: false,        //  是否触发发送验证码
	    barcode: '',			//	条形码
	    product: '',			//	检测产品
	    name: '',				  //	姓名
	    dob: today,		    //	出生日期
	    tel: '',				  //	手机
	    height: '',				//	身高
	    weight: '',				//	体重
	    email: '',				//	邮箱
	    country: '',			//	国籍
	    pob: '',				  //	籍贯
      gender: 'male',       //  性别
      ethnicity: '',    //  民族
	    disease: '',			//	家族病史
	    area: '',				  //	所在地区
	    address: '',			//	详细地址
	    isdob: false,			//	判断是否显示出生日期
      captcha: '' ,             //  验证码
      today: today,
      access_token: '',         //  用户标识
      barcode_success: false,   //  条形码正确
      phoneIn: true             //  手机是否可以输入  ( 默认不可以 )
  	}
  },
  created () {

    //var vConsole = new VConsole();


  	//	获取 url 参数
  	this.access_token = this.GetQueryString("access_token");

    //  请求微信配置信息
    this.getWxConfig();

    //  获取手机
    this.tel = this.GetQueryString("tel");
   
    if(!this.tel){
      this.phoneIn = false;   //  如果没有绑定手机  则手动输入，解除不可输入限制
    }

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



          wx.ready(function () {
            
            //  获取地理位置
            wx.getLocation({
              type: 'wgs84',
              success: function (res) {
                
                var lat = res.latitude;
                var lnt = res.longitude;


                // 地址解析:http://lbs.qq.com/javascript_v2/guide-service.html#link-four
                //  通过获取的  经纬度 解析成地址
                let geocoder = new qq.maps.Geocoder({
                  complete: function (result) {
                    
                    //  给地址赋值
                    var province = result.detail.addressComponents.province.replace('省','');     //  省
                    var city = result.detail.addressComponents.city;                              //  市
                    var district = result.detail.addressComponents.district;                      //  区

                    //  所在地 选项
                    self.address_provance = province;
                    self.address_city = city;
                    self.address_area = district;

                    //  所在地  赋值
                    self.location = province + ' ' + city + ' ' + district;
                   
                    console.log(result)
                    
                  }
                })
                var coord = new qq.maps.LatLng(lat,lnt)
                geocoder.getAddress(coord)
              }
            })
          });


      });
    },


  	//	获取 url 参数
  	GetQueryString(name) {
      var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if(r!=null)return  unescape(r[2]); 
      return null;
  	},

  	//	今天日期
  	today_m() {
  		var myDate = new Date(); 
  		return myDate.toLocaleDateString();
  	},
  	
  	result1(ret) {
      this.location = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
    },

    result2(ret) {
      this.pob = ret.itemName1 + ' ' + ret.itemName2;
    },

    //	手机短信验证
    sendCode1() {
      
      var self = this;

      if(this.tel.length == '11' && !isNaN(this.tel)){
        this.$dialog.loading.open('发送中...');

        this.$axios({
          url: '/send_sms?tel='+this.tel,
        }).then(function(res){


            var data = res.data.data;
            var isSuccess = res.data.success;

            if(isSuccess){

              self.start = true;
              self.$dialog.loading.close();
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

    //	根据条形码  检索  检测产品
    outproduct() {

    	var self = this;

      var reg = /[a-zA-Z0-9]{8,}/;
      var isPass = reg.test(this.barcode);


      //  清空检测产品
      self.product = '';


      //  格式验证
      if(!isPass){

        this.$dialog.notify({
            mes: '条形码至少8位大小写英文数字！',
            timeout: 5000
        });
       
        self.barcode_success = false;

        return false;
      }


    	var data = {
    		access_token: this.access_token,
    		barcode: this.barcode
    	};

    	this.$axios({
    		url: '/orders/check_barcode',
    		method: 'post',
    		data: data,
    	}).then(function(res){

        var data = res.data.data;
        var isSuccess = res.data.success;

        if(isSuccess){

          //  检测产品
          self.product = data.tests.products_label.join(',');

          self.barcode_success = true;

        } else {

          self.$dialog.notify({
              mes: data.error,
              timeout: 5000
          });

          self.barcode_success = false;
        }
    		
    	});
    },

    //  绑定信息验证
    validate(){


      if(!this.barcode_success){              //  条形码  
        this.$dialog.notify({
            mes: '条形码错误',
            timeout: 5000
        });
        return false;
      }


      var tel = this.tel;               //  手机
      var reg = /[0-9]{11}/;

      if(!reg.test(tel)){
        this.$dialog.notify({
            mes: '手机格式错误',
            timeout: 5000
        });
        return false;
      }


      var captcha = this.captcha;       //  验证码
      var reg = /[0-9]{4}/;

      if(!reg.test(captcha)){
        this.$dialog.notify({
            mes: '验证码格式错误',
            timeout: 5000
        });
        return false;
      }



      var name = this.name;             //  姓名
      var reg = /\S{2,}/;

      if(!reg.test(name)){
        this.$dialog.notify({
            mes: '姓名请填写两位以上',
            timeout: 5000
        });
        return false;
      }


      var gender = this.gender;         //  性别
      if(!gender){
        this.$dialog.notify({
            mes: '请选择性别',
            timeout: 5000
        });
        return false;
      }

      var dob = this.dob;               //  出生日期
      if(!dob){
        this.$dialog.notify({
            mes: '请选择出生日期',
            timeout: 5000
        });
        return false;
      }

      var ethnicity = this.ethnicity;   //  民族
      if(!ethnicity){
        this.$dialog.notify({
            mes: '请选择民族',
            timeout: 5000
        });
        return false;
      }

      var height = this.height;         //  身高
      if(!height){
        this.$dialog.notify({
            mes: '请填写身高',
            timeout: 5000
        });
        return false;
      }

      var weight = this.weight;         //  体重
      if(!weight){
        this.$dialog.notify({
            mes: '请填写体重',
            timeout: 5000
        });
        return false;
      }



      return true;
    },

    //	绑定
    bind() {

      //  表单验证
      if(!this.validate()){
        return false;
      }

      var self = this;

      var data = {
        access_token: this.access_token,  //  用户标识
      	barcode: this.barcode,			      //	条形码
  	    product: this.product,			      //	检测产品
  	    name: this.name,				          //	姓名
  	    dob: this.dob,					          //	出生日期
  	    tel: this.tel,					          //	手机
        gender: this.gender,              //  性别
        ethnicity: this.ethnicity,        //  民族
  	    height: this.height,			        //	身高
  	    weight: this.weight,			        //	体重
  	    email: this.email,				        //	邮箱
  	    country: this.country,			      //	国籍
  	    pob: this.pob,					          //	籍贯
  	    disease: this.disease,			      //	家族病史
  	    province: this.area.split(' ')[0],				    //	所在地区
        city: this.area.split(' ')[1],                //  所在地区
        district: this.area.split(' ')[2],            //  所在地区
  	    address: this.address,			                  //	详细地址
        captcha: this.captcha             //  验证码
      };


      this.$axios({
        url: '/orders/bind',
        method: 'post',
        data: data,
      }).then(function(res){

        var data = res.data.data;
        var isSuccess = res.data.success;


        if(!isSuccess){

          this.$dialog.notify({
              mes: data.error,
              timeout: 5000
          });

          return false;
        }


        self.$dialog.toast({
            mes: '绑定成功',
            timeout: 3000,
            icon: 'success'
        });

        setTimeout(function(){
          location.href = '/orders';
        },2000);
        
      });

    },

    //  扫一扫
    qrscan() {

      var self = this;

      wx.scanQRCode({
          needResult: 1,         // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
          scanType: ["barCode"], // 可以指定扫二维码还是一维码，默认二者都有
          success: function (res) {
              var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
              self.barcode = result.split(',')[1];

              //  触发验证  条码正确性
              self.outproduct();
          }
      });
    }

  },
  watch: {
  	dob: function(curVal,oldVal){
  		this.isdob = true;
  	}
  }
}
</script>

<style>
  
</style>