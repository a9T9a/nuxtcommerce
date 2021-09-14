<template>
  <div class="mainContainer">
    <div class="centerArea">
      <div class="accordionMenu">
        <Menu/>
      </div>
      <div class="productContent">
        <div class="topArea">
            <div class="imgArea">
                <img class="fullSizeImage" :src="imgSrc[imgIndex]">
                <div class="smallSizedImagesArea">
                    <img 
                     v-for="(link,index) in imgSrc"
                     :key="index"
                     :src="link"
                     class="smallSizedImage"
                     @click="changeImageIndex(index)"
                    >
                </div>
            </div>
            <div class="infoArea">
                <h4>Product title Lorem ipsum dolor sit amet</h4>
                <br>
                <span>ID: 123456789</span>
                <br>
                <h5>$ 99.99</h5>
                <br>
                <b-form-spinbutton
                 id="demo-sb"
                 v-model="value"
                 min="1"
                 max="100"
                ></b-form-spinbutton>
                <br>
                <span>Stock: 80</span>
                <br>
                <div>
                    <b-button class="mr-4" variant="danger">Buy Now</b-button>
                    <b-button class="mr-4" variant="danger">Add to Cart</b-button>
                </div>
            </div>
        </div>
        <div class="productDescription">
            <b-tabs content-class="mt-3">
                <b-tab title="Description"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus itaque ut quaerat saepe sit soluta illo vel! Dignissimos voluptatibus sapiente, laboriosam pariatur, eveniet beatae quae facere eum natus corrupti veritatis.</p></b-tab>
                <b-tab title="Features"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quae nisi asperiores exercitationem culpa molestiae fugit nulla, qui accusamus molestias ipsa! Ea nam sequi, recusandae cupiditate at provident necessitatibus vel.<p/></b-tab>
            </b-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../../components/CategoriesMenu.vue"
export default {
    
    layouts:"default",
  
    components:{
        Menu,
    },

    data() {
        return {
            imgIndex:0,
            imgSrc:[
                require("@/src/images/products/1.jpg"),
                require("@/src/images/products/2.jpg"),
                require("@/src/images/products/3.jpg"),
                require("@/src/images/products/4.jpg"),
            ]
        }
    },

    methods: {
        changeImageIndex(index){
            this.imgIndex=index
        }
    },
}
</script>

<style scoped>
    .mainContainer{
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
    .productContent{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .topArea{
        display: flex;
    }
    .imgArea{
        display: flex;
        flex-direction: column;
        width: 60%;
    }
    .fullSizeImage{
        width: 500px;
        height: 500px;
        padding: 20px;
        object-fit: cover;
        animation: toTop ease 1s;
    }
    .smallSizedImagesArea{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 20px;
    }
    .smallSizedImage{
        width: 100px;
        height: 100px;
        margin-bottom: 10px;
        object-fit: cover;
        cursor: pointer;
    }
    .infoArea{
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 20px 20px 0 0 ;
    }
    .productDescription{
        margin:20px;
    }
    @keyframes toTop {
        from{
            margin-top: 300px;
            opacity: 0
        }
        to{
            margin-top: 0;
            opacity: 1;
        }

    }
</style>
