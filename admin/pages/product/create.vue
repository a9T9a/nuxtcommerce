<template>
    <div>
        <b-card bg-variant="light">
            <b-form-group
            label-cols-lg="3"
            label="Create Product"
            label-size="lg"
            label-class="font-weight-bold pt-0"
            class="mb-0"
            >
                <b-form-group
                    label="Title:"
                    label-cols-sm="3"
                    label-align-sm="right"
                >
                    <b-form-input v-model="title"></b-form-input>
                </b-form-group>

                <b-form-group
                    label="Price:"
                    label-cols-sm="3"
                    label-align-sm="right"
                >
                    <b-form-input v-model="price"></b-form-input>
                </b-form-group>

                <b-form-group
                    label="Stock Number:"
                    label-cols-sm="3"
                    label-align-sm="right"
                >
                    <b-form-input v-model="stockNumber"></b-form-input>
                </b-form-group>

                <b-form-group
                    label="Summary:"
                    label-cols-sm="3"
                    label-align-sm="right"
                >
                    <b-form-input v-model="summary"></b-form-input>
                </b-form-group>

                <b-form-group
                    label="Features:"
                    label-cols-sm="3"
                    label-align-sm="right"
                >
                    <b-form-tags v-model="features" placeholder="Add Feature"></b-form-tags>
                </b-form-group>
                
                <b-form-group
                    label="Description:"
                    label-cols-sm="3"
                    label-align-sm="right"
                >
                    <b-form-tags v-model="description" placeholder="Add Description"></b-form-tags>
                </b-form-group>

                <b-form-group
                    label="Photo:"
                    label-cols-sm="3"
                    label-align-sm="right"
                >
                    <b-form-tags v-model="photo" placeholder="Add Photo Link"></b-form-tags>
                </b-form-group>

                <b-form-group
                    label="Main Category:"
                    label-cols-sm="3"
                    label-align-sm="right"
                >
                    <b-form-select
                     v-model="mainCategory"
                     :options="mainOptions"
                     text-field="title"
                     value-field="index"
                    ></b-form-select>
                </b-form-group>

                <b-form-group
                    label="Sub Category:"
                    label-cols-sm="3"
                    label-align-sm="right"
                >
                    <b-form-select
                     v-model="subCategory"
                     :options="getSubCategory" 
                    ></b-form-select>
                </b-form-group>
            
            </b-form-group>
            <b-button variant="dark" size="lg" class="px-5 float-right" @click="createProduct" :disabled="!allValueValid">Save</b-button>
        </b-card>
    </div>
</template>

<script>
    export default {
        
        data() {
            return {
                title:null,
                price:null,
                stockNumber:null,
                summary:null,
                features:null,
                description:null,
                photo:null,
                mainCategory:null,
                mainOptions: [],
                subCategory:null,
            }
        },

        computed:{
            getSubCategory(){
                if(this.mainCategory!=null){
                    return this.mainOptions[this.mainCategory].subCategory
                }else{
                    return []
                }
            },

            allValueValid(){
                if(
                    this.title != null &&
                    this.price != null &&
                    this.stockNumber != null &&
                    this.summary != null &&
                    this.features != null &&
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

        mounted() {
            this.getAllCategories()
        },

        methods: {

            async createProduct(){
                let newProduct={
                    title: this.title,
                    price: this.price,
                    stockNumber: this.stockNumber,
                    summary: this.summary,
                    features: this.features,
                    description: this.description,
                    photo: this.photo,
                    mainCategory: this.mainCategory,
                    subCategory: this.subCategory,
                }

                try {
                    let result = await this.$axios.$post('http://localhost:8080/api/product', newProduct)

                    console.log("result",result)
                    
                } catch (error) {
                    console.log(error.response.data)
                }
            },

            async getAllCategories(){
                let result = await this.$axios.$get("http://localhost:8080/api/category")
                
                let list=[]
                result.forEach((item,index) => {
                    list.push({
                        ...item,
                        index:index
                    })
                });
                this.mainOptions=list
                console.log("categories-getAllCategories",this.mainOptions)
                
            }

        },

    }
</script>

<style scoped>

</style>