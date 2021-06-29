/*jshint esversion: 6 */ 
export default {
    data(){
        return {
            timeOut: "",
        };
    },
    methods: {
        deBounce(func, wait = 1000){
            clearTimeout(this.timeOut);
            this.timeOut = setTimeout(func, wait);
        },
    }
};