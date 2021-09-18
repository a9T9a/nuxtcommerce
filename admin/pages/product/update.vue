<template>
<div>
    <div>
        <b-card bg-variant="light">
            <b-form-group
            label-cols-lg="3"
            label="Product Update"
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
            <b-button varian="light" size="lg" class="px-5 float-right" @click="getProduct" :disabled="productID==''">Find Product</b-button>
        </b-card>
    </div>
    <div v-if="title!=null">
        <b-card bg-variant="light">
            <b-form-group
            label-cols-lg="3"
            label="Product"
            label-size="lg"
            label-class="font-weight-bold pt-0"
            class="mt-4"
            >
                <b-form-group
                    label="Title:"
                    label-for="nested-street"
                    label-cols-sm="3"
                    label-align-sm="right"
                >
                    <b-form-input v-model="title" id="nested-street"></b-form-input>
                </b-form-group>

                <b-form-group
                    label="Price:"
                    label-for="nested-city"
                    label-cols-sm="3"
                    label-align-sm="right"
                >
                    <b-form-input v-model="price" id="nested-city"></b-form-input>
                </b-form-group>

                <b-form-group
                    label="Stock Number:"
                    label-for="nested-state"
                    label-cols-sm="3"
                    label-align-sm="right"
                >
                    <b-form-input v-model="stockNumber" id="nested-state"></b-form-input>
                </b-form-group>

                <b-form-group
                    label="Description:"
                    label-for="nested-country"
                    label-cols-sm="3"
                    label-align-sm="right"
                >
                    <b-form-tags input-id="tags-basic" v-model="description" placeholder="Add Description"></b-form-tags>
                </b-form-group>

                <b-form-group
                    label="Photo:"
                    label-cols-sm="3"
                    label-align-sm="right"
                >
                    <b-form-tags input-id="tags-basic" v-model="photo" placeholder="Add Photo Link"></b-form-tags>
                </b-form-group>

                <b-form-group
                    label="Main Category:"
                    label-for="main-state"
                    label-cols-sm="3"
                    label-align-sm="right"
                >
                    <b-form-select v-model="mainCategory" :options="mainOptions"></b-form-select>
                </b-form-group>

                <b-form-group
                    label="Sub Category:"
                    label-for="sub-state"
                    label-cols-sm="3"
                    label-align-sm="right"
                >
                    <b-form-select v-model="subCategory" :options="subOptions"></b-form-select>
                </b-form-group>
            
            </b-form-group>
            <b-button varian="light" size="lg" class="px-5 float-right" @click="updateProduct" :disabled="!allValueValid">Update Product</b-button>
        </b-card>
    </div>
</div>
</template>

<script>
    export default {
        
        data() {
            return {
                productID:null,
                title:null,
                price:null,
                stockNumber:null,
                description:null,
                photo:null,
                mainCategory:null,
                mainOptions: [
                    { value: null, text: 'Please select a main category', disabled: true},
                    { value: 'A', text: 'A' },
                    { value: 'B', text: 'B' },
                    { value: "C", text: 'C' },
                ],
                subCategory:null,
            }
        },

        computed:{
            subOptions(){
                if(this.mainCategory === "A"){
                    let sub = [
                        {value:null, text:"Please select a sub category", disabled: true},
                        {value:"1", text:"1"},
                        {value:"2", text:"2"},
                        {value:"3", text:"3"},
                        {value:"4", text:"4"},
                    ]
                    return sub
                }else if(this.mainCategory === "B"){
                    let sub = [
                        {value:null, text:"Please select a sub category", disabled: true},
                        {value:"5", text:"5"},
                        {value:"6", text:"6"},
                        {value:"7", text:"7"},
                    ]
                    return sub
                }else if(this.mainCategory === "C"){
                    let sub = [
                        {value:null, text:"Please select a sub category", disabled: true},
                        {value:"8", text:"8"},
                        {value:"9", text:"9"},
                    ]
                    return sub
                }
            },

            allValueValid(){
                if(
                    this.title != null &&
                    this.price != null &&
                    this.stockNumber != null &&
                    this.description != null &&
                    this.photo != null &&
                    this.mainCategory != null &&
                    this.subCategory != null
                ){
                    return true
                }else{
                    false
                }
            },
        },

        methods:{

            async getProduct(){
                let result = await this.$axios.$get(`http://localhost:8080/api/product/${this.productID}`)
                console.log(result)
                this.title=result.product.title
                this.price=result.product.price
                this.stockNumber=result.product.stockNumber
                this.description=result.product.description
                this.photo=result.product.photo
                this.mainCategory=result.product.mainCategory
                this.subCategory=result.product.subCategory


                console.log("product",result)
            },

            async updateProduct(){
                let updatedProduct={
                    title: this.title,
                    price: this.price,
                    stockNumber: this.stockNumber,
                    description: this.description,
                    photo: this.photo,
                    mainCategory: this.mainCategory,
                    subCategory: this.subCategory,
                }

                try {
                    let result = await this.$axios.$put(`http://localhost:8080/api/product/${this.productID}`, updatedProduct)

                    console.log("result",result)
                    
                } catch (error) {
                    console.log(error.response.data)
                }
            }

        }
    }
</script>

<style scoped>

</style>