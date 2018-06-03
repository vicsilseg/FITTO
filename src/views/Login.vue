<template>
    <main class='my-container'>
      <section class='my-section'>
        <!-- Menu UpBar -->
        <div id='upbar-menu'>
          <transition name='fade' :duration="{ enter: 400, leave: 200 }">
          <img @click="closeLogin" class='close-cross' v-if="isSignIn" src='../assets/icon/Fitto–crossMenu.svg' alt='Close'>
          </transition>
          <transition name='fade' :duration="{ enter: 400, leave: 200 }">
          <span v-if="isSignIn">Inicia Sesión</span>
          </transition>
          <transition name='fade' :duration="{ enter: 400, leave: 200 }">
          <img @click="closeLogin" class='close-cross' v-if="isSignUp" src='../assets/icon/Fitto–crossMenu.svg' alt='Close'>
          </transition>
          <transition name='fade' :duration="{ enter: 400, leave: 200 }">
          <span v-if="isSignUp">Regístrate</span>
          </transition>
        </div>
        <!-- Logo -->
        <img id='logo' class='logo' src='../assets/Logo/fittoLogoDark.svg' alt='Fitto Logo' :class="{ 'logo-sign-in' : isSignIn || isSignUp }">
        <!-- Sign up  //TODO: v-for-->
        <div v-if="isSignUp" class='fitto-form signup'>
          <label for='my-name'>Nombre</label>
          <input v-model="LoginForm.nombre"  id='my-name' type='text'>
          <label for='my-lastname'>Apellidos</label>
          <input v-model="LoginForm.apellidos"  id='my-lastname' type='text'>
          <label for='my-email'>Correo Electrónico</label>
          <input v-model="LoginForm.email"  id='my-email' type='email'>
          <label for='my-code'>Código de Usuario</label>
          <input maxlength='14'
          @keyup="forCodeFormat($event)"
          v-model="formatCode" id='my-code' type='text'>
        </div>
        <!-- Sign in //TODO: v-for-->
        <div v-if="isSignIn" class='fitto-form signup'>
          <label for='my-email'>Correo Electrónico</label>
          <input v-model="LoginForm.email" id='my-email' type='email'>
          <label for='my-code'>Código de Usuario</label>
          <input maxlength='14'
          @keyup="forCodeFormat($event)"
          v-model="formatCode" id='my-code' type='text'>
        </div>
        <!-- Buttoner -->
        <div class='buttoner'>
          <transition name='fade' :duration="{ enter: 400, leave: 400 }">
          <div v-if="isLogin||isSignIn" class='button active'>
            <div class ='button__item' @click="SignIn">Inicia Sesión</div>
          </div>
          </transition>
          <transition name='fade' :duration="{ enter: 400, leave: 400 }">
          <div v-if="isLogin||!isSignIn" class='button'
          :class="{
            inactive: isLogin,
            active: !isLogin }">
            <div class='button__item' @click="SignUp"><span v-if="isLogin">¿No Tienes Cuenta?</span><strong>Regístrate</strong></div>
          </div>
          </transition>
        </div>
      </section>
      <!-- Background -->
      <div id='fittoGradient'></div>
      <video autoplay muted loop id='fittoVideo'>
          <source src='../assets/VideoFitto.mp4' type='video/mp4'>
      </video>
      <!-- <pre style='position:absolute; top:0; right:0; font-size:8px; color: green;'>{{$data}}</pre> -->
    </main>
</template>

<script>
// eslint-disable-next-line
import VideoFitto from '../assets/VideoFitto.mp4'
export default {
  data () {
    return {
      isLogin: true,
      isSignIn: false,
      isSignUp: false,
      formatCode: null,
      maxLength: 0,

      LoginForm: {
        nombre: null,
        apellidos: null,
        email: null,
        codigo: null
      }
    }
  },

  methods: {
    forCodeFormat (e) {
      this.formatCode = String(this.formatCode)
      this.LoginForm.codigo = this.formatCode
      var char = []
      if (this.formatCode.length === 0) {
        return (this.maxLength = 0)
      }
      if (this.formatCode.length === 4 && this.maxLength === 0) {
        char[0] = this.formatCode.substring(0, 4)
        this.formatCode += '-'
        this.maxLength = 1
      }
      if (this.formatCode.length === 9 && this.maxLength === 1) {
        char[1] = this.formatCode.substring(6, 9)
        this.formatCode += '-'
        this.maxLength = 2
      }
      /* if (this.formatCode.length === 14) {
        this.LoginForm.codigo = this.formatCode
      } */
    },

    closeLogin () {
      if (this.isSignIn) {
        this.isSignIn = !this.isSignIn
        this.isLogin = !this.isLogin
      } else {
        this.isSignUp = !this.isSignUp
        this.isLogin = !this.isLogin
      }
    },
    SignIn (e) {
      /* console.log("sign in", e) */
      if (this.isLogin) {
        this.isSignIn = !this.isSignIn
        this.isLogin = !this.isLogin
      } else if (!this.isLogin && this.isSignIn) {
        console.log('Signin In')
      }
    },

    SignUp (e) {
      const commit = this.$store.commit
      let valores = {}

      if (this.isLogin) {
        this.isSignUp = !this.isSignUp
        this.isLogin = !this.isLogin
      } else if (!this.isLogin && this.isSignUp) {
        this.infoToStore(valores)
        commit('settingInitialValues', valores)
        this.$router.push('/')
      }
    },
    infoToStore (valores) {
      let userInfo = this.LoginForm
      for (let propiedad in userInfo) {
        valores[propiedad] = userInfo[propiedad]
      }
      return valores
    }
  }
}
</script>

<style src='../styles/main.css' scoped></style>
<style scoped>
.fitto-form {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10%;
}

.fitto-form input {
  flex-basis: 100%;
  max-height: 35px;
}

#upbar-menu {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  position: absolute;
  top: 45px;
}

.my-section {
  width: 80%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.close-cross {
  width: 8%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
}

#logo {
  flex-basis: 100%;
  max-height: 5%;
  min-height: 40px;
  height: auto;
}
.logo {
  margin-top: 80px;
  transition: margin-top 0.35s ease-in-out;
}
.logo-sign-in {
  margin-top: 120px;
}

.logo-sign-up {
  margin-top: 150px;
}
.buttoner {
  position: relative;
  margin: 50px 0;
}

#fittoGradient {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
  opacity: 0.2;
  background: #accb53;
  background: -moz-linear-gradient(top, #accb53 0%, #7f7a60 50%, #453543 100%);
  background: -webkit-linear-gradient(
    top,
    #accb53 0%,
    #7f7a60 50%,
    #453543 100%
  );
  background: linear-gradient(to bottom, #accb53 0%, #7f7a60 50%, #453543 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#accb53', endColorstr='#453543',GradientType=0 );
}
#fittoVideo {
  position: absolute;
  min-width: 100vw;
  min-height: 100vh;
  z-index: -10;
  opacity: 0.5;
  background-image: url('../assets/img/Stopmotion/Loginbackground.png');
}
</style>
