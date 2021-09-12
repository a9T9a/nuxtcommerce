<template>
    <div>
        <UnregisteredUserNavbar/>
        <nuxt/>
        <Footer/>
    </div>
</template>

<script>
import UnregisteredUserNavbar from "../components/UnregisteredUserNavbar.vue"
import Footer from "../components/TheFooter.vue"

export default {
    components:{
        UnregisteredUserNavbar,
        Footer
    }
}
</script>

<style scoped>

</style>