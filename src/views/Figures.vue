<template>
    <div class='figures'>
        <header>
            <h2>Figuras</h2>
        </header>
        <section class='figures-container'>
            <div class='figure-banner'>
                <img id='rhino' src="../assets/Figures/Fitto-figureRhino.svg" alt="">
            </div>
            <div class='figure-banner'>
                <img id='bird' src="../assets/Figures/Fitto-figureBird.svg" alt="">
            </div>
            <div class='figure-banner'>
                <img id='boat' src="../assets/Figures/Fitto-figureBoat.svg" alt="">
            </div>
        </section>
    </div>
</template>
<script>
export default {};
</script>

<style scoped>
.figures {
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
.figures-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 80%;
}
.figures-container div:nth-of-type(odd){
  background:#453543;
}
.figures-container div:nth-of-type(even){
  background:#ACCB53;
}
.figure-banner {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#rhino,
#bird,
#boat {
  width:20%;
}
#bird{
  height: 50%;
}
#rhino{
  height:50%;
}
</style>

