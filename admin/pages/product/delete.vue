<template>
    <div>
        <b-card bg-variant="light">
            <b-form-group
            label-cols-lg="3"
            label="Delete Product"
            label-size="lg"
            label-class="font-weight-bold pt-0"
            class="mb-0"
            >
                <b-form-group
                    label="Product ID:"
                    label-for="nested-street"
                    label-cols-sm="3"
                    label-align-sm="right"
                >
                    <b-form-input v-model="productID" id="nested-street"></b-form-input>
                </b-form-group>            
            </b-form-group>
            <b-button varian="light" size="lg" class="px-5 float-right" @click="deleteProduct" :disabled="productID==''">Delete Product</b-button>
        </b-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                productID:null
            }
        },

        methods: {
            async deleteProduct(){
                let result = await this.$axios.$delete(`http://localhost:8080/api/product/${this.productID}`)
                console.log(result)
            }
        },

    }
</script>

<style scoped>

</style>