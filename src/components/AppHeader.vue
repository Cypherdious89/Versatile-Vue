<template>
  <nav class="w-full bg-gradient-to-r from-blue-700 to-blue-600 text-white px-4 py-3">
      <router-link class="mr-6 text-2xl" to="/"><i class="fab fa-vuejs"></i> Home</router-link>
      <router-link 
        class="text-lg mx-4" 
        v-for="item in list" 
        :key="item.to" 
        :to="item.to"
      >
      {{item.title}}
      </router-link>
      <button v-if="isLoggedIn" class="float-right text-lg mx-4" @click="logout">Logout</button>
      <button v-else class="float-right text-lg mx-4" @click="openLogin">Login</button>

  </nav>
</template>

<script>
import firebase from "../utilities/firebase"
export default {
  data(){
    return {
      list:[
        {title: "To-Do List", to: "/todo"},
        {title: "Calendar", to: "/calendar"},
        {title: "Markdown", to: "/markdown"},
        {title: "Slider Carousel", to: "/slider"},
        {title: "Calculator", to: "/calculator"},
        {title: "Modals", to: "/reuse-modal"},
        {title: "Chat", to: "/chat"},
        {title: "User Crud", to: "/user-crud"},
        {title: "Tensorflow", to: "/tensorflow"},
      ],
    }
  },
  computed:{
    isLoggedIn(){
      return this.$store.state.isLoggedIn;
    }
  },
  methods: {
    logout(){
      firebase.auth().signOut().catch((e) => {
        console.log(e);
      });
    }, 
    openLogin(){
      this.$store.commit("setLoginModal", true)
    }
  }
}
</script>