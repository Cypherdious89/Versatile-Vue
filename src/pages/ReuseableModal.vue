<template>
    <section class="w-full flex flex-wrap">
        <div class="m-auto">
            <h1 class="text-2xl text-center my-5">Re-Useable Modals</h1>
            
            <Modal v-if="isModal1Open" @close="isModal1Open = false">
                <template #title>
                    Modal 1
                </template>
                <template #body>
                    This is body part of modal 1
                </template>
            </Modal>
            <button class="border rounded shadow bg-blue-500 text-white p-2 m-2" @click="isModal1Open = true">Modal 1</button>
            
            <Modal v-if="isModal2Open" @close="isModal2Open = false">
                <template #title>
                    Modal 2
                </template>
                <template #body>
                    This is body part of modal 2
                </template>
            </Modal>
            <button class="border rounded shadow bg-blue-500 text-white p-2 m-2" @click="isModal2Open = true">Modal 2</button>
        </div>
    </section>
</template>

<script>
import Modal from '../components/Modal'
import {ref} from "vue";
export default {
    components: {Modal},
    setup(){
        const isModal1Open = ref(false);
        const isModal2Open = ref(false);
        return {isModal1Open, isModal2Open};
    }
}
</script>

<style>

</style>