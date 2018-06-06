
<template>
    <div class='gallery'>
        <header>
            <h2>Galería</h2>
        </header>
        <section class='grid-container'>
            <div v-for="picture in pictures" :key='picture' class='gallery-pic'></div>
        </section>
    </div>
</template>

<script>
export default {
    data () {
        return{
            pictures:{
                pic1: null,
                pic2: null,
                pic3: null,
                pic4: null,
                pic5: null,
                pic6: null,
                pic7: null,
                pic8: null,
                pic9: null,
                pic10: null,
                pic11: null,
                pic12: null,
            }
        }
    }
}
</script>


<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100vw;
  height: 78vh;
}
header {
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}
header h2 {
  margin: 0;
}
/* .gallery-pic{
    box-shadow: inset 0 -1px 3rem 1rem rgba(104, 104, 104, 0.404);
    mix-blend-mode: multiply;
} */
</style>
