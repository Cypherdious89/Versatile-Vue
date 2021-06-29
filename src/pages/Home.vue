<template>
  <div class="m-auto">
        <h1 class="text-center text-4xl">Home Page</h1>
        <ul class="text-center my-4">
            <router-link 
              class="text-lg" 
              v-for="item in list" 
              :key="item.to" 
              :to="item.to"
            >
            <li class="mb-4">{{item.title}}</li>
            </router-link>
        </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      list:[
        {title: "To-Do List", to: "/todo"},
        {title: "Calendar", to: "/calendar"},
        {title: "Markdown", to: "/markdown"},
        {title: "Slider Carousel", to: "/slider"},

      ]
    }
  }
}
</script>

<style>

</style>