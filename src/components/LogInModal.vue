<template>
    <section
        @click="$emit('close-login')" 
        class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"
    ></section>
    <div class="absolute inset-0">
        <div class="flex h-full">
            <div class="z-30 m-auto bg-white p-2 rounded shadow w-10/12 md:w-1/3">
            <div class="p-2 border">
                <h1 class="text-center text-3xl">Login</h1>
                <form class="p-2 my-2">
                    <div class="my-4">
                        <label>Email or Username</label>
                        <input v-model="form.email"
                        class="rounded shadow p-2 w-full" placeholder="Enter your email or username"/>
                    </div>
                    <div class="my-4">
                        <label>Password</label>
                        <input v-model="form.password"
                        class="rounded shadow p-2 w-full" type="password" placeholder="Enter your password"/>
                    </div>
                    <div class="my-4">
                        <button
                            type="submit"
                            class="w-full rounded shadow text-white bg-purple-700 p-2"
                        >
                        Login
                        </button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            form: {email: "", password: ""}
        }
    },
    methods: {
        submitData(){
            this.form;
        }
    }
}
</script>

<style>

</style>