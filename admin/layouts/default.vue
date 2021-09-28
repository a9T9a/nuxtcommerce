<template>
    <div id="layout">
        <the-navbar/>
        <nuxt/>
    </div>
</template>

<script>
import TheNavbar from "../components/TheNavbar.vue"
    export default {
        
        components:{
            TheNavbar
        }

    }
</script>

<style scoped>
    #layout{
        background-color: whitesmoke;
    }
</style>