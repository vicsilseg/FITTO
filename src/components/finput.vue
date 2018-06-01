<template>
   <div>
       <h1>Mundo</h1>
        <!-- <div v-for="(key,value,index) in UserData">
          <input 
          :key = UserData[index]
          :placeholder="capitalize(value)"
          v-model="UserData[value]">
        </div> -->
        <input type="text" v-model="UserData.nombre">
        <input type="text" v-model="UserData.apellidos">
        <input type="email" v-model="UserData.email">
        <input type="number" v-model="UserData.codigo">
        <pre>{{$data}}</pre>
   </div>  
</template>
<script>
export default {
  data() {
    return {
      UserData: {
        nombre: null,
        apellidos: null,
        email: null,
        codigo: null,
      }
    };
  },
  methods: {
    capitalize(value){
        return value.charAt(0).toUpperCase() + value.slice(1);
    },
  }
};
</script>

<style scoped>
div {
  flex-basis: 100%;
}
</style>

