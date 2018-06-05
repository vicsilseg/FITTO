<template>
<div>
    <h2>Juega</h2>
    <form @submit.prevent="pasarFoto($event)">
    <input name="myFile" type="file" accept="image/*">
    <input type="submit">
    </form>
</div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    pasarFoto(e) {
      console.log(e);
      console.log(e.srcElement["0"].files["0"]);
    }
  }
};
</script>

