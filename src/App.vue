<template>
  <AppHeader :isLoggedIn="isLoggedIn" @open-login="isLoginOpen = true"/>
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  
  <teleport to="body">
    <logInModal v-if="isLoginOpen" @close-login = "isLoginOpen = false"/>
  </teleport>
</template>

<script>
import AppHeader from "./components/AppHeader"
import LogInModal from "./components/LogInModal"
import firebase from "./utilities/firebase"
export default {
  data(){
    return {
      isLoginOpen: false,
      isLoggedIn: false,
      authUser: {}
    }
  },
  mounted(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedIn = true;
        this.authUser = user;
      } else {
        this.isLoggedIn = false;
        this.authUser = {};
      }
    });
  },
  components: {AppHeader, LogInModal},
};
</script>