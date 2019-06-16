<template>
    <div class="singin">
        <mt-header title="注册页面">
                <div slot="left">
                    <mt-button @click="$router.back(-1)" icon="back">返回</mt-button>
                </div>
        </mt-header>
        <br>
        <mt-field label="用户名" placeholder="请输入用户名" v-model="userName"></mt-field>
        <mt-field label="姓名" placeholder="请输入用户名" v-model="name"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phoneNum"></mt-field>
        <br>
        <mt-button @click="submit" type='primary' style="width:70%">提交</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            userName:'',
            name:'',
            password:'',
            phoneNum:'',
            value:'',
        }
    },
    methods:{
        submit(){
            this.$http.post('/api/api/user/addUser', {
                    userName: this.userName,
                    name: this.name,
                    sex: this.value,
                    phoneNum: this.phoneNum,
                    password: this.password
            }, {}).then((response) => {
                this.$messageBox('提示', '提交成功');
                    console.log(response)
            })
        }
    }
    
}
</script>
<style scoped>
.singin{
     position: absolute;
     width: 100%;
     height: 100%;
     left: 0;
     top:0;
}
</style>


