<template>
    <router-view></router-view>
    <!-- <post></post> -->
</template>

<script>
import post from './components/Post.vue'
/* import { mapState } from "vuex" */
export default {
  name: 'app',
  components: {
    post
  },
  data () {
    return {}
  },
  beforeMount () {
    this.$router.push('/login')
  }
}
</script>

<style>
.router-link-active {
  color: red;
}
</style>
