<template>
    <div>
        <h2>Mis Creaciones</h2>
        <section class='grid-container'>
            <div v-for="picture in pictures" :key='picture' class='gallery-pic'></div>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pictures: {
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

<style src="../styles/main.css" scoped></style>