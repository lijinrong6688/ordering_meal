<template>
    <div class="test">
        <!-- <div>
            <mt-cell class="page-part" title="当前选中" :value="selected" />
        </div> -->
        <router-view></router-view>
        <mt-tabbar v-model="selected" fixed>
            <mt-tab-item id="home" >
                <img slot="icon" :src="imgUrl1">
                主页
            </mt-tab-item>
            <mt-tab-item id="count" >
                <img slot="icon" :src="imgUrl2">
                统计
            </mt-tab-item>
            <mt-tab-item id="my">
                <img slot="icon" :src="imgUrl4">
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>    
</template>

<script>
export default {
    name: 'testpage',
  data(){
    return{
        selected:'',
    //   message:this.selected,
      userName:'',
      name:'',
      password:'',
      phoneNum:'',
      sex:'',
      value:'',
      imgUrl1:require('@/assets/img/主页1.png'),
      imgUrl2:require('@/assets/img/统计1.png'),
      imgUrl3:require('@/assets/logo.png'),
      imgUrl4:require('@/assets/img/我的1.png'),
    }
  },
//     props:{
//     selected:String,
//   },
  watch: {
        selected: function (val, oldVal) {
            // 这里就可以通过 val 的值变更来确定去向
            switch(val){
                case 'home':
                  this.imgUrl1=require('@/assets/img/主页2.png')
                  this.imgUrl2=require('@/assets/img/统计1.png')
                  this.imgUrl4=require('@/assets/img/我的1.png')
                  this.$router.push('/views/home')
                break;
                case 'count':
                   this.imgUrl1=require('@/assets/img/主页1.png')
                   this.imgUrl2=require('@/assets/img/统计2.png')
                   this.imgUrl4=require('@/assets/img/我的1.png')
                   this.$router.push('/views/count')
                break;
                case 'my':
                   this.imgUrl1=require('@/assets/img/主页1.png')
                   this.imgUrl2=require('@/assets/img/统计1.png')
                   this.imgUrl4=require('@/assets/img/我的2.png')
                   this.$router.push('/views/my')
                break;
            }
        }
    },
}
</script>
<style scoped>
.test{
margin-top: 60px;
}
</style>

