<template>
<div class="home">
  <mt-header fixed title="我的主页">
    <div slot="left">
      <mt-button @click="$router.back(-1)" icon="back">返回</mt-button>
    </div>
  </mt-header>
  <div class="block">
      <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
      </el-date-picker>
  </div>
<mt-cell title="午餐" class="cell">
  <mt-switch v-model="value2" @change="turn()"></mt-switch>
</mt-cell>
<mt-cell title="晚餐" class="cell">
  <mt-switch v-model="value3" @change="turn()"></mt-switch>
</mt-cell>     
</div>
</template>

<script>
// import Calendar from '@/views/calendar/index'
export default {
  components:{},
  name: 'HomePage',
  data(){
    return{
      value:'',
      value1:'',
      value2:false,
      value3:false,
      // Switch:'',
      // Switch2:''
    }
  },
  created(){
  // this.turn()
  },
  mounted(){
  },
  methods: {
    // turn(){
    //     this.value2==true?this.Switch='已支付':this.Switch='未支付'
    //     this.value3==true?this.Switch2='已支付':this.Switch2='未支付'
    //  console.log(this.value2)
    //  console.log(this.value3)
    // }
  }
}
</script>

<style>
.home{
  width: 100%;
}
.cell{
  margin-left: -100px;
}
</style>
