<template>

    <div class="bg border">

        <b-tabs class="m-5 w-50 bg">

            <b-form-group
             label-cols-lg="2"
             label="Main Category"
             label-align-sm="left"
             class="my-3"
            >
                <b-form-select
                 v-model="mainCategory"
                 :options="mainOptions"
                 text-field="title"
                 value-field="index"
                 class="w-75"
                ></b-form-select>
            </b-form-group>
            
            <b-tab title="Main Category">

                <b-button variant="dark" size="sm" class="px-4 float-left mr-5" @click="deleteCategory('main')">Delete</b-button>

            </b-tab>
            <b-tab title="Sub Category">

                <b-form-group
                 label-cols-lg="2"
                 label="Sub Category"
                 label-align-sm="left"
                 class="my-3"
                >
                    <b-form-select
                    v-model="subCategory"
                    :options="getSubCategory"
                    text-field="title"
                    class="w-75"
                    ></b-form-select>

                </b-form-group>

                <b-button variant="dark" size="sm" class="px-4 float-left" @click="deleteCategory('sub')">Delete</b-button>

            </b-tab>

        </b-tabs>
    </div>
</template>

<script>
    export default {
        
        data() {
            return {
                mainCategory:null,
                subCategory:null,
                mainOptions:[],
                
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
        },

        mounted() {
            this.getAllCategories()
        },

        methods: {

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
                
            },

            async deleteCategory(type){
                
                let _id = this.mainOptions[this.mainCategory]._id
                
                switch (type) {
                    
                    case 'main':
                        
                        await this.$axios.$delete(`http://localhost:8080/api/category/${_id}`)

                    break;

                    case "sub":
                        
                        await this.$axios.$put(`http://localhost:8080/api/category/${_id}`,{subCategory:this.subCategory})

                    break;

                }

            }

        },

    }
</script>

<style scoped>
    .bg{
        background-color:whitesmoke;
    }
    .border{
        border: 1px solid red;
    }
</style>