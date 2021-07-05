<template>
    <div v-if="isLoginOpen">
        <section
            @click="close" 
            class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"
        ></section>
        <div class="absolute inset-0">
            <div class="flex h-full">
                <div class="z-30 m-auto bg-white p-2 rounded shadow w-10/12 md:w-1/3">
                    <div class="p-2 border">
                        <h1 class="text-center text-3xl">Login</h1>

                        <GoogleLogIn @close-login-from-google="close"/>

                        <p class="my-3 text-center font-bold">OR</p>

                        <UserLogIn @close-login="close" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import GoogleLogIn from "../components/auth/GoogleLogin"
import UserLogIn from "../components/auth/UserLogin"
export default {
    components: {GoogleLogIn, UserLogIn},
    computed: {
        isLoginOpen(){
            return this.$store.state.isLoginOpen;
        },
    },
    emits: ["close-login"],
    methods: {
        close(){
            this.$store.commit("setLoginModal", false)
        },
    }
}
</script>

<style>

</style>