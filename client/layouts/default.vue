<template>
    <div>
        <TheNavbar/>
        <nuxt/>
        <Footer/>
    </div>
</template>

<script>
import TheNavbar from "../components/TheNavbar.vue"
import Footer from "../components/TheFooter.vue"

export default {
    components:{
        TheNavbar,
        Footer
    }
}
</script>

<style scoped>

</style>