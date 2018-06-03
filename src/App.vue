<template>
    <router-view></router-view>
    <!-- <post></post> -->
</template>

<script>
import { mapState } from 'vuex'
import post from './components/Post.vue'
/* import { mapState } from "vuex" */
export default {
  name: 'app',
  components: {
    post
  },
  beforeMount () {
    this.$router.push('/login')
  },
  computed: mapState({
    nombre: state => state.usuario.nombre,
    apellidos: state => state.usuario.apellidos,
    bio: state => state.usuario.bio,
    email: state => state.usuario.email,
    codigo: state => state.usuario.codigo,
    avatar: state => state.usuario.avatar
  })
}
</script>

<style>
.router-link-active {
  color: red;
}
</style>
