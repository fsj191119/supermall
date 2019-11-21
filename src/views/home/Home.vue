<template>
  <div>
    <navbar class='nav'>
      <div slot="center">购物街</div>
    </navbar>
    <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" />
        </a>
      </swiper-item>
    </swiper>
    </div>
     </template>
     <script>
    import navbar from '../../components/common/navbar/NavBar.vue'
    import {getHomeMultidata} from '../../network/home.js'
    import {Swiper, SwiperItem} from '../../components/common/swiper/index.js'

    export default{
    name:'Home',
    data(){
    return{
    banners:[],
    recommends:[]
    }
    },
    components:{
    navbar,
    Swiper,
    SwiperItem
    },
    created(){
    // console.log(this.banners)
    getHomeMultidata().then(res=>{
    console.log(res.data.banner.list[0])
    this.banners=res.data.banner.list
    this.recommends=res.data.recommend.list
    })
    }
    }
    </script>

    <style>
      .nav {
        background: #FF888F;
        color: white;
      }
    </style>
