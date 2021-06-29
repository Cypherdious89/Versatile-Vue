<template>
  <AppHeader @open-login-modal="isLoginOpen = true"/>
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <logInModal v-if="isLoginOpen" @close-login = "isLoginOpen = false"/>
</template>

<script>
import AppHeader from "./components/AppHeader"
import LogInModal from "./components/LogInModal"
export default {
  data(){
    return {
      isLoginOpen: false
    }
  },
  components: {AppHeader, LogInModal},
};
</script>