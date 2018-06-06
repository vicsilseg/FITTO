/* Componente de vista principal */
<template>
<main class='my-container' id='main'>
    <header id='secondary-menu'>
      <router-link v-show="this.$route.name !=='Main'" to='/main'><img id='arrow-back' src='../assets/icon/Fitto-arrowBack.svg' alt='Back to Feed'></router-link>
      <router-link to='/main'>
        <img class='logo-menu' src='../assets/Logo/fittoLogoDark.svg' alt='Logo'>
      </router-link>
      <router-link to='/user'>
        <img class='profile-icon' src='../assets/icon/Fitto-perfil.svg' alt='Mi Perfil'>
      </router-link>
    </header>

    <section id='main-content'>
      <router-view></router-view>
    </section>

    <footer id='primary-menu'>
      <router-link to='/about'>
        <div class='route item'>
          <img class='menu-icon' src='../assets/icon/Fitto-info.svg' alt='¿Qué Es Fitto?'></div>
        </router-link>
      <router-link to='/gallery'>
        <div class='route item'>
          <img class='menu-icon' src='../assets/icon/Fitto-galeria.svg' alt='Galería'></div>
      </router-link>
      <router-link to='/play'>
        <div class='route juega'>
          <img class='menu-icon' src='../assets/icon/Fitto-juega.svg' alt='Juega'></div>
      </router-link>
      <router-link to='/figures'>
        <div class='route item'>
          <img class='menu-icon' src='../assets/icon/Fitto-figuras.svg' alt='Figuras'>
        </div>
      </router-link>
      <router-link to=''>
        <div class='route item'>
          <img class='menu-icon' src='../assets/icon/Fitto-help.svg' alt='Ayuda'>
        </div>
      </router-link>
    </footer>
    <!-- <router-link to='/' exact>Main</router-link>
    <router-link to='/about'>¿Que es fitto?</router-link>
    <router-link to='/figures'>Figuras</router-link>
    <router-link to='/profile'>Mi Perfil</router-link> -->
</main>
</template>
<script>
import { mapState } from 'vuex'
import post from '../components/Post.vue'
export default {
  data () {
    return {};
  },
  computed: mapState({
    nombre: state => state.usuario.nombre,
    apellidos: state => state.usuario.apellidos,
    bio: state => state.usuario.bio,
    email: state => state.usuario.email,
    codigo: state => state.usuario.codigo,
    avatar: state => state.usuario.avatar
  }),
  methods: {
    swipeToReload(e) {
      alert('Reloading');
    }
  },
  components: {
    post
  }
};
</script>

<style scoped>
#main {
  position: absolute;
  top: 10%;
  height: 78%;
}
.menu-icon {
  width: auto;
  height: 100%;
}
#primary-menu,
#secondary-menu {
  width: 100%;
  display: flex;
  background: #f7f7f2;
  align-items: center;
  z-index: 1;
}
#primary-menu {
  height: 12%;
  position: fixed;
  bottom: 0;
  justify-content: space-between;
  box-shadow: rgba(69, 53, 67, 0.3) 0px 0px 50px 1px;
}
#primary-menu a {
  flex-basis: 60px;
  height: 60px;
}
#primary-menu a,
#secondary-menu a {
  display: flex;
  align-items: center;
  justify-content: center;
}
#primary-menu a:first-of-type {
  margin-left: 5%;
}
#primary-menu a:nth-of-type(3) {
  margin: 0 2%;
}
#primary-menu a:last-of-type {
  margin-right: 5%;
}

#secondary-menu {
  position: fixed;
  top: 0;
  text-align: center;
  justify-content: center;
  height: 10%;
  box-shadow: rgba(69, 53, 67, 0.3) 0px 1px 10px 1px;
}
#secondary-menu a {
  height: 100%;
}
#secondary-menu a:first-of-type {
  position: absolute;
  left: 2%;
  width: 60px;
  height: 60px;
  padding: 5px;
}
#secondary-menu a:nth-of-type(2) {
  width: 30%;
  padding: 5px 20px;
}
#secondary-menu a:last-of-type {
  position: absolute;
  right: 2%;
  width: 60px;
  height: 60px;
  padding: 5px;
}
#arrow-back{
  height:30%;
  
}
.route {
  border: 1px solid rgba(69, 53, 67, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.item {
  padding: 8px;
  height: 70%;
  width: 70%;
}
.juega {
  padding: 10px;
  height: 100%;
  width: 100%;
}

.profile-icon {
  height: 45%;
  width: auto;
}
.logo-menu {
  height: 40%;
  width: auto;
}
#main-content {
  position: absolute;
  width: 100%;
  height:100%;
  overflow-y: scroll;
  z-index: 0;
  background: #f7f7f2;
}
.swipe-container {
  height: 100%;
  width: 100%;
  background: #f7f7f7;
}
</style>
