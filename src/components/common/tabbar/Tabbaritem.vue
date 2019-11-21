<template>
  <div class="item" @click="toPath">
    <!-- <span class="iconfont icon-zhuye"></span>
    <div>首页</div> -->
    <div v-if="!isactive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :class="{active:isactive}"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default{
    name:'Tabbaritem',
    data(){
      return{
        // isactive:true
      }
    },
    props:['path'],
    computed:{
      isactive(){
        return this.$route.path.indexOf(this.path)!=-1
      }
    },
    methods:{
      toPath(){
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  .item {
      flex: 1;
      height: 49px;
      font-size: 14px;
      background-color: #eee;
      position: relative;
      text-align: center;
      margin-top: 3px;
    }
    .item span{
      font-size: 22px;
      text-align: center;
    }
    .active{
      color: hotpink;
    }
</style>
