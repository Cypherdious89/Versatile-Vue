/*jshint esversion: 6 */ 

const app = Vue.createApp({
    data(){
        return {
            title: 'Some Text',
            author: 'me',
            age: 20
        };
    },
    methods: {
        changetitle(){
            this.title = 'Priyansh';
        }
    }
});

app.mount('#app');