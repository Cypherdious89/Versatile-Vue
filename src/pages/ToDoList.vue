<template>
  <div class="m-auto pt-5">
      <h1 class="text-4xl text-center pb-2">Pending Tasks : {{itemCount}}</h1>
      <ul>
        <li class="flex justify-between p-2 mb-2 text-xl border rounded" v-for="(item, index) in listItems" :key="item.name">
          <div>{{item.name}}</div>
          <button @click="remove(index)">
              <i class="fas fa-trash"></i>
            </button>
        </li>
      </ul>
      <form @submit.prevent="addItem" class="flex justify-between mt-8">
        <input 
        class="border rounded border-black p-1" 
        type="text" v-model="newItem" 
        placeholder="Type name here" ref="taskInput">
        <button class="border rounded text-sm text-white bg-blue-600 px-2 py-1" type="submit">Add Task</button>
      </form>
    </div>
</template>

<script>
export default {
    computed: {
    itemCount(){
      return this.listItems.length;
    },
  },
  data(){
    return{
      newItem: "",
      listItems: [
        {name: "Task 1"},
        {name: "Task 2"},
        {name: "Task 3"},
        {name: "Task 4"}
      ],
    };
  },
  mounted(){
    this.$refs.taskInput.focus()
  },
  methods: {
    addItem(){
      if(this.newItem !== ""){
        this.listItems.unshift({name: this.newItem}); 
        this.newItem="";
      }
    },
    remove(index){
      this.listItems = this.listItems.filter((item, i) => i != index);
    }
  },
}
</script>