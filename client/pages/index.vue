<template>
  <div class="client">
    <Slider/>
    <div class="centerArea">
      <div class="accordionMenu">
        <Menu/>
      </div>
      <div class="productlist">
        <div class="productarea" v-for="i in 12" :key="i"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "../components/TheSlider.vue"
import Menu from "../components/CategoriesMenu.vue"
export default {
  layouts:"default",
  components:{
        Slider,
        Menu,
    }
}
</script>

<style scoped>
  .client{
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
  .centerArea{
    display: flex;
    width: 80%;
    padding-inline: 20px;
  }
  .accordionMenu{
    width: 20%;
  }
  .productlist{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 80%;
    background-color: whitesmoke;
    padding-inline: 20px;
  }
  .productarea{
    background-color: antiquewhite;
    height: 250px;
    width: 250px;
    margin-bottom: 20px;
  }
</style>
