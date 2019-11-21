<template>
  <div id="app">
    <router-view></router-view>
    <tabbarmain>
    </tabbarmain>
  </div>
</template>

<script>
	import tabbarmain from'./components/content/tabbarmain/tabbarmain.vue'
	export default{
		name:'App',
		components:{
			tabbarmain
		}
	}
</script>

<style>
	@import 'assets/css/base.css';
</style>
