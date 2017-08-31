<template>
<div class="main">
	<top></top>
	<left></left>
	<right></right>
</div>
</template>
<script>
import Top from './Head.vue'
import Left from './Left.vue'
import Right from './Right.vue'
export default {
  data(){
    return {
      username:"admin"
    }
  }
  ,
  components:{
  	Left,Top,Right
  }
}
</script>
<style>
.main{
	box-sizing: border-box;
}
</style>