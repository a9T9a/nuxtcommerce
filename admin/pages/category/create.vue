<template>
    <div>
        <b-card bg-variant="light">
            <b-form-group
             label-cols-lg="3"
             label="Main Category"
             label-size="lg"
             label-class="font-weight-bold pt-0"
            >
                <b-form-group
                label-cols-sm="3"
                label="Category Name"
                label-align-sm="right"
                >
                    <b-form-input v-model="mainCategory"></b-form-input>
                    <b-button variant="dark" size="lg" class="px-5 float-right mt-3" @click="createMainCategory">Add</b-button>
                </b-form-group>
            </b-form-group>
        </b-card>

        <b-card bg-variant="light">
            <b-form-group
             label-cols-lg="3"
             label="Sub Category"
             label-size="lg"
             label-class="font-weight-bold pt-0"
             class="mt-5"
            >
                <b-form-group
                 label-cols-sm="3"
                 label="Select Main"
                 label-align-sm="right"
                >
                    <b-form-select 
                     v-model="selectedMainCategory" 
                     :options="categories" 
                     value-field="index" 
                     text-field="title"
                    >
                    </b-form-select>
                    <b-list-group class="mt-3">
                        <b-list-group-item v-for="(item,index) in this.getSubCategory" :key="index">
                            {{item}}
                        </b-list-group-item>
                    </b-list-group>
                </b-form-group>
                <b-form-group
                 label-cols-sm="3"
                 label="Category Name"
                 label-align-sm="right"
                >
                    <b-form-input v-model="subCategory"></b-form-input>
                    <b-button variant="dark" size="lg" class="px-5 float-right mt-3" @click="createSubCategory">Add</b-button>
                </b-form-group>
            </b-form-group>
        </b-card>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                categories:[],
                mainCategory:null,
                selectedMainCategory:null,
                mainCategoryList:[],
                subCategory:null,
            }
        },

        mounted() {
            this.getAllCategries()
        },

        computed:{
            getSubCategory(){
                if(this.selectedMainCategory!=null){
                    return this.categories[this.selectedMainCategory].subCategory
                }else{
                    return []
                }
            }
        },

        methods: {
            
            async createMainCategory(){
                
                let newCategory={
                    title:this.mainCategory
                }
    
                let result = await this.$axios.$post("http://localhost:8080/api/category", newCategory)
                console.log(result)
    
            },
    
            async createSubCategory(){
                console.log(this.categories[this.selectedMainCategory]._id)
                console.log(this.subCategory)
                    await this.$axios.$post(`http://localhost:8080/api/category/${this.categories[this.selectedMainCategory]._id}`, {subCategory:this.subCategory})
            },

            async getAllCategries(){
                let result = await this.$axios.$get("http://localhost:8080/api/category")
                
                let list=[]
                result.forEach((item,index) => {
                    list.push({
                        ...item,
                        index:index
                    })
                });
                this.categories=list
                console.log("catehories-getAllCategories",this.categories)
                
            }

        },


    }
</script>

<style>

</style>