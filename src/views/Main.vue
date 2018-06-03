/* Componente de vista principal */
<template>
<main class="my-container" id="main">
    <header id='secondary-menu'>
      <router-link to='/'>
        <img class='logo-menu' src='../assets/Logo/fittoLogoDark.svg' alt='Logo'>
      </router-link>
      <router-link to='/profile'>
        <img class='profile-icon' src='../assets/icon/Fitto-perfil.svg' alt='Mi Perfil'>
      </router-link>
    </header>
    <section id='main-content'>
    <v-touch @swipedown="swipeToReload($event)" v-bind:enabled="true" class="swipe-container"></v-touch>
    </section>
    <footer id='primary-menu'>
      <router-link to='/about'>
        <div class='route item'>
          <img class='menu-icon' src='../assets/icon/Fitto-info.svg' alt='¿Qué Es Fitto?'></div>
        </router-link>
      <router-link to='/about/gallery'>
        <div class='route item'>
          <img class='menu-icon' src='../assets/icon/Fitto-galeria.svg' alt='Galería'></div>
      </router-link>
      <router-link to=''>
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
export default {
  data() {
    return {};
  },
  methods: {
    swipeToReload(e){
      alert('Reloading')
    }
  }
};
</script>

<style scoped>
.menu-icon {
  width: auto;
  height: 100%;
}
#primary-menu, #secondary-menu{
  width: 100%;
  display: flex;
  background: #f7f7f2;
  align-items: center;
}
#primary-menu {
  height: 12%;
  justify-content: space-between;
}
#primary-menu a{
  flex-basis: 60px;
  height: 60px;
}
#primary-menu a, #secondary-menu a{
  display: flex;
  align-items: center;
  justify-content: center;
}
#primary-menu a:first-of-type{
  margin-left:5%;
}
#primary-menu a:nth-of-type(3){
  margin: 0 2%;
}
#primary-menu a:last-of-type{
  margin-right:5%;
}

#secondary-menu {
  position: relative;
  text-align: center;
  justify-content: center;
  height: 10%;
}
#secondary-menu a{
  height: 100%;
}
#secondary-menu a:first-of-type{
  width: 30%;
  padding: 5px 20px;
}
#secondary-menu a:last-of-type{
  position:absolute;
  right: 2%;
  width: 60px;
  height: 60px;
  padding:5px;
}
.route {
  border: 2px solid rgba(69, 53, 67, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.item{
  padding: 8px;
  height: 70%;
  width: 70%;
}
.juega{
  padding: 10px;
  height: 100%;
  width: 100%;
}
#main {
  overflow: visible;
}
.profile-icon {
  height: 45%;
  width: auto;
}
.logo-menu {
  height: 40%;
  width: auto;
}
#main-content{
  color: red;
  height: 78%;
  width: 100%;
}
.swipe-container{
  height:100%;
  width: 100%;
  background:#f7f7f7
}
</style>
