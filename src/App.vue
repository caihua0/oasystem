<template>
    <div id="app">
<!--     {{msg}}
    <login></login>
    <not-found></not-found> -->
    <transition name="fade"
                mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Login from './components/Login.vue'
import NotFound from './components/404.vue'
export default {
  name: 'app',
  components: {
    Login,NotFound
  },
  data(){
    return {
      msg:"this is appvue"
    }
  }
}

</script>
<style>

</style>