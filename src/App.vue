<template>
  <AppHeader />
  <div class="w-full flex">
    <!-- <ToDoList /> -->
    <Calendar />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader"
// import ToDoList from './components/ToDoList.vue';
import Calendar from './components/Calendar'
export default {
  components: {AppHeader, Calendar},
};
</script>