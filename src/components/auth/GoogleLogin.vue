<template>
  <section class="mt-5 text-center">
        <button @click="loginWithGoogle" 
            class="w-2/3 rounded shadow text-white bg-purple-700 p-2">
            Login with Google
        </button>
    </section>
</template>

<script>
import firebase from "../../utilities/firebase"
export default {
    emits: ["close-login-from-google"],
    methods: {
        loginWithGoogle(){
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider)
            .then(()=>{
                this.$emit('close-login-from-google');
            }).catch((e) => {console.log(e)});
        }
    }
}
</script>