<template>
    <form class="p-2" @submit.prevent="submit">
        <div class="my-4">
            <label>Email or Username</label>
            <input v-model="email" ref="emailRef"
                class="rounded shadow p-2 w-full" placeholder="Enter your email or username"/>
        </div>
        <div class="my-4">
            <label>Password</label>
            <input v-model="password"
                class="rounded shadow p-2 w-full" type="password" placeholder="Enter your password"/>
        </div>
        <div class="my-4">
            <button
                type="submit"
                class="w-full rounded shadow text-white bg-purple-700 p-2"
            >
                <span v-if="!isLoading">Login</span>
                <span v-else>⏳</span>
            </button>
        </div>
    </form>
</template>

<script>
import firebase from "../../utilities/firebase"
export default {
    data(){
        return {
            email: "", 
            password: "",
            isLoading: false
        }
    },
    mounted(){
        this.$refs.emailRef.focus()
    },
    methods: {
        submit(){
            this.isLoading = true;
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(() => {
                this.isLoading = false;
                this.email = "";
                this.password = "";
                this.close()
            })
            .catch((e) => {
            this.isLoading = false;
                console.log(e);
            });
        },
        close(){
            this.$emit('close-login');
        },
    }
}
</script>

<style>

</style>