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
                <b-button
                 variant="dark"
                 size="sm"
                 class="px-5 float-left mr-5"
                 @click="deleteCategory('main')"
                >Delete</b-button>
            </b-tab>
            <b-tab title="SubCategory">
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
                <b-button
                 variant=dark
                 size="sm"
                 class="px-5 float-left"
                 @click="deleteCategory('sub')"
                >Delete</b-button>
            </b-tab>

        </b-tabs>
    </div>    
</template>