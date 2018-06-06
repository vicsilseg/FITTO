<template>
    <div class="my-container">
        <section class="my-section">
            <div class="profile-data">
                <span>Bienvenid<span>o</span>,</span>
                <h2 id="userdata">{{nombre}} {{apellidos[0]}}</h2>
                <div id="avatar"></div>
                <!-- TODO: component: avatar selector -->
                <p @click="editProfile()">Editar Perfil</p>
                <p @click="savedPosts()">Publicaciones Guardadas</p>
            </div>
            <v-touch @swipeup="swipeToCreations($event)" class="swipe-more">
                <p>Desliza para ver tus creaciones</p>
                <img id="swipe-up" src="../assets/icon/Fitto–swipeUp.svg" alt="Swipe Up">
            </v-touch>
        </section>
    </div>
</template>

<script>
/* eslint-disable */
import { mapState } from 'vuex'
export default {
  data () {
    return {}
},
  computed: {
    ...mapState({
      nombre: state => state.usuario.nombre,
      apellidos: state => state.usuario.apellidos,
      bio: state => state.usuario.bio,
      email: state => state.usuario.email,
      codigo: state => state.usuario.codigo,
      avatar: state => state.usuario.avatar
    }),

  },
 
  methods: {
    editProfile () {
      console.log("edit profile")
      this.$router.push('/user/edit')
    },
    savedPosts () {
      console.log("saved posts")
      this.$router.push('/user/saved')
    },
    swipeToCreations (e) {
      this.$router.push('/user/creations')
    }
  }
};
</script>
<style src="../styles/main.css" scoped></style>
<style scoped>
.profile-data {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 60%;
}
.profile-data span {
  font-weight: 200;
}
.profile-data p,
.swipe-more p {
  text-align: center;
  flex-basis: 100%;
  cursor: pointer;
  margin-bottom: 0;
}
#userdata {
  text-align: center;
  font-weight: 400;
  flex-basis: 100%;
  height: auto;
  margin-top: 10px;
  margin-bottom: 20px;
}
#userdata {
  font-size: 2rem;
}
#avatar {
  min-width: 200px;
  min-height: 200px;
  background: #accb53;
}
.my-section {
  align-items: center;
  position: relative;
}
.swipe-more {
  position: absolute;
  width: 60%;
  bottom: 40px;
  align-self: flex-end;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
#swipe-up {
  height: 30px;
  order: -1;
  transform: rotate(180deg);
}
</style>
