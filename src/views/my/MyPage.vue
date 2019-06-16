<template>
<div>
    <mt-header fixed title="我的信息" >
        <div slot="left">
                <mt-button @click="$router.back(-1)" icon="back">返回</mt-button>
        </div>
    </mt-header>
    <div>
    <mt-cell title="用户名" class="cell-item" >
        <span >{{userName}}</span>
    </mt-cell>
    <mt-cell title="手机" class="cell-item">
        <span >{{phoneNum}}</span>
    </mt-cell>
    <mt-cell title="修改密码" to="/views/mychangepw" is-link class="cell-item" >
    <!-- <span >这里是元素</span> -->
    </mt-cell>
      <router-view></router-view>
    </div>
    <br>
    <mt-button class="btn-item" size="normal" type="primary" @click="handleSubmit()">退出登录</mt-button>
</div>
</template>
<script>
export default {
    data(){
        return{
            userName:'李锦容',
            phoneNum:'13420112432',
        }
    },
    methods:{
        handleSubmit(){
            // setTimeout(function(){ this.$router.push('/') }, 1000);
            this.$router.push('/')
            
        }
    }
}
</script>

<style scoped>
.my{
    width: 200px;
    height: 200px;
    background-color: blueviolet;
}
.cell-items{
    display: flex;
    flex-direction: column;
    justify-content: center;   
}
.cell-item{
    /* position: relative; */
    /* width: 80%; */
    /* margin-left:10%; */
    text-align: left;
}
.btn-item{
  width:70%;
  margin: 20px 0;
  font-size: 15px;
}
</style>
