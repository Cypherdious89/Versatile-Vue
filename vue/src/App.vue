<template>
  <h1>Marvel Heros</h1>
  <ul>
    <li v-for="(hero, index) in marvelHeros" v-bind:key="index">{{index + 1}}:{{hero.name}}</li>
  </ul>
</template>



<script>
export default {
  data(){
    return{
      marvelHeros: [
        {name: "Iron Man"},
        {name: "Captain America"},
        {name: "Thor"},
        {name: "Wanda"},
        {name: "Hulk"},
      ],
    };
  },
};
</script>