<template>
    <div>
        <mt-header fixed title="密码修改">
            <div slot="left">
                    <mt-button @click="$router.back(-1)" icon="back">返回</mt-button>
            </div>
        </mt-header>
        <mt-field label="旧密码" placeholder="请输入旧密码" type="password" v-model="oldword"></mt-field>
        <mt-field label="新密码" placeholder="请输入新密码" type="password" v-model="password"></mt-field>
        <mt-field label="确认密码" placeholder="请再次输入新密码" type="password" v-model="checkword"></mt-field>
        <br>
        <el-button class="btn-item" size="normal" type="primary" @click="handleSubmit()">提交</el-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            oldword:'',
            password:'',
            checkword:''
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
.btn-item{
  width:70%;
  margin: 20px 0;
}
</style>


