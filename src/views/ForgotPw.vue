<template>
    <div class="forgotPw">
        <mt-header fixed title="找回密码">
            <div slot="left">
                    <mt-button @click="$router.back(-1)" icon="back">返回</mt-button>
            </div>   
        </mt-header>
        <br><br>
        <mt-field label="手机号" placeholder="请输入手机号" type="tel"></mt-field>
        <mt-field label="短信校验码" placeholder="请输入校验码" >
        <el-button size="mini" >点击获取</el-button>
        </mt-field>
        <br>
        <mt-button class="btn-item" size="normal" type="primary" @click="handleSubmit()">提交</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            username:''          
        }
    },
    methods:{
        handleSubmit(){
        this.$messageBox('提示', '提交成功');
      } 
    }
}
</script>
<style scoped>
.forgotPw{
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top:0;
}
.field-code{
    margin-right: 50px;
}
.btn-item{
  width:70%;
  margin: 20px 0;
}
</style>

