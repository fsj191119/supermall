<template>
  <div id="app">
    <tabbar>
        <tabbaritem path="/home">
          <span class="iconfont icon-zhuye" slot="item-icon"></span>
          <span  class="iconfont icon-zhuye active" slot="item-icon-active"></span>
          <div slot="item-text">首页</div>
        </tabbaritem>
      <tabbaritem path="/classify">
        <span  class="iconfont icon-mulu" slot="item-icon"></span>
         <span  class="iconfont icon-mulu active" slot="item-icon-active"></span>
        <div slot="item-text">分类</div>
      </tabbaritem>
      <tabbaritem path="/cart">
        <span class="iconfont icon-gouwuche" slot="item-icon"></span>
        <span  class="iconfont icon-gouwuche active" slot="item-icon-active"></span>
        <div slot="item-text">购物车</div>
      </tabbaritem>
      <tabbaritem path='/profile'>
        <span class="iconfont icon-gerenzhongxinjibenxinxi" slot="item-icon"></span>
      <span  class="iconfont icon-gerenzhongxinjibenxinxi active" slot="item-icon-active"></span>
        <div slot="item-text">我的</div></tabbaritem>
    </tabbar>
  </div>
</template>

<script>
  import tabbar from '../../common/tabbar/Tabbar.vue'
  import tabbaritem from '../../common/tabbar/Tabbaritem.vue'
export default {
  name: 'App',
  data(){
    return{
    }
  },
  components:{
    tabbar,
    tabbaritem
  },
  methods:{

  }
}
</script>

<style scoped>
</style>
