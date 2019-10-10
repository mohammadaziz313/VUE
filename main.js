new Vue({
    el:'#app',
    data:{
        title: 'Hey World',
        link: 'http://some.com',
        finishedLink: '<a href="https://berlin3.com">Berlin3</a>',
        counter: 0
    },
    methods:{
        changeTitle:function(event){
            this.title = event.target.value;
        },
        increase:function(){
            this.counter++;
        }
    },
});