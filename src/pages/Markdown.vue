<template>
  <div class="flex flex-wrap w-full">
      <h1 class="w-full text-center text-3xl my-4">Markdown App</h1>
      <section class="flex m-auto w-10/12 h-screen">
          <article class="w-1/2 border">
            <textarea class="h-full w-full p-1" :value="text" @input="update" ref="MarkdownTextArea"></textarea>
          </article>
          <article class="w-1/2 border bg-gray-100" v-html="markedText"></article>
      </section>
  </div>
</template>

<script>
import marked from "marked";
import useDebounce from "../utilities/hooks/useDebounce"
export default {
    data(){
        return {
            text: "**this is markdown app**",
            deBounce: ""
        }
    },
    computed:{
        markedText(){
            return marked(this.text);
        }
    },
    mounted(){
        this.deBounce = useDebounce()
        this.$refs.MarkdownTextArea.focus()
    },

    methods:{
        update(e){
            const task = () => {this.text = e.target.value};
            this.deBounce(task, 500);
        },
        
    },
}
</script>