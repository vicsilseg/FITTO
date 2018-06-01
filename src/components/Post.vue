<template>
<div>
    <template v-if="persona">
        <h1 v-text="datosPersona.nombre"></h1>
        <h2 v-text="datosPersona.email"></h2>
        <img :src="datosPersona.foto">
    </template>
</div>
</template>
<script>

import axios from 'axios';

export default {
  mounted(){
      axios.get('https://randomuser.me/api/') //FIXME: Cambiar la api
      .then((respuesta) =>{
          this.persona = respuesta.data.results[0]; 
      });
  },
  data(){
      return{
          persona: null,
      }
  },
  computed:{
      datosPersona(){
          return{
              nombre:`${this.persona.name.first} ${this.persona.name.last}`,
              foto: this.persona.picture.large,
              email: this.persona.email,
          }
      }
  },
}
</script>

<style scoped>
h1,h2,h3{
    font-family:'futura-pt';
    font-weight:300;
    color:#444444;
}
</style>


