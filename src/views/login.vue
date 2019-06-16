<template>
  <div class="login">
    <meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0, user-scalable=no, width=device-width">
    <div class="title">
    <span> <img src="../assets/logo.png" width="45px"/>CSKJ订餐</span>
    </div>
    
    <br>
    <div >
    <div ref='myfield'>
      <span class='myfield-title'>登录账号</span>
      <br><br>
      <el-form  label-width="100px" :model="field" class="form"> 
        <el-form-item label="手机号：">
          <el-input v-model="field.phone"></el-input>
        </el-form-item>
        <el-form-item label="密码：">
          <el-input v-model="field.password" type="password"></el-input>
        </el-form-item>
      </el-form>
    </div>
<div>
<!-- <mt-button class="btn-item" size="normal" type="primary" @click="handleSubmit('myfield')">登录</mt-button> -->
<el-button class="btn-item" size="normal" type="primary" @click="login()">登录</el-button>
</div>
<span size="normal" type="default" class="pwBtn" @click="signIn()">立即注册</span>
<span>|</span>
<span size="normal" type="default" class="pwBtn" @click="backPw()">忘记密码?</span>
</div>
<router-view></router-view>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui';
export default {
  components:{ },
  name: 'App',
  data(){
    return{
      // show:true,
      field:{
      username:'',
      phone:'',
      password:'',
      },
    }
  },
  mounted(){
  },
 methods:{
   login(){
     this.$router.push('/views/home')
   },
   signIn(){
    var that=this
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    });
     setTimeout(function(){
       that.$router.push('/views/signin')
       Indicator.close();
     },500); 
   },
   backPw(){
    var that=this
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    });
     setTimeout(function(){
       that.$router.push('/views/forgotpw')
       Indicator.close();
     },500); 
   }
 }
}
</script>

<style>
.login {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top:0;
}
.title{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  width: 100%;
  height: 80px;
  background: url('../assets/bg2.jpg') no-repeat 0 center;
}
.myfield-title{
  font-size: 20px;
}
.field{
  background: white;
  border:1px #ffffff solid;
  
}
.btn-item{
  width:70%;
  margin: 20px 0;
  font-size: 15px;
}
.form{
  width: 80%;
}
.pwBtn{
  /* margin-right:-160px; */
  font-size: 17px;
  color:rgb(112, 197, 253);
}
</style>
