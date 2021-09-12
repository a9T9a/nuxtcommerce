<template>
    <div class="accordion" role="tablist">
        <span class="menuHeader">All Categories</span>
        <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <button class="categoriesButton" block v-b-toggle.accordion-1>Category A</button>
            </b-card-header>
            <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                <button class="categoriesButton">A sub 1</button><br>
                <button class="categoriesButton">A sub 2</button><br>
                <button class="categoriesButton">A sub 3</button><br>
                <button class="categoriesButton">A sub 4</button><br>
                <button class="categoriesButton">A sub 5</button><br>
            </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <button class="categoriesButton" block v-b-toggle.accordion-2 variant="info">Category B</button>
            </b-card-header>
            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                <button class="categoriesButton">B sub 1</button><br>
                <button class="categoriesButton">B sub 2</button><br>
                <button class="categoriesButton">B sub 3</button><br>
            </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <button class="categoriesButton" block v-b-toggle.accordion-3 variant="info">Category C</button>
            </b-card-header>
            <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                <button class="categoriesButton">C sub 1</button><br>
                <button class="categoriesButton">C sub 2</button><br>
                <button class="categoriesButton">C sub 3</button><br>
                <button class="categoriesButton">C sub 4</button><br>
            </b-collapse>
        </b-card>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        text: `
          Anim pariatur cliche reprehenderit`
      }
    }
  }
</script>

<style scoped>
    .menuHeader{
        font-size: 16px;
        font-weight: 600;
        font-family: sans-serif;
    }
    .categoriesButton{
        border-radius: 5px;
        border: none;
        background-color: transparent;
    }
</style>