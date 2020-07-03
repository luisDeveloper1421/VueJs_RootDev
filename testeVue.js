
var app = new Vue({
el:"#app",
data:{

    name:'',
    surname:'',
    age:'',

    listInfoUser:[],
},

methods:{

    add: function(){
        
        if(!this.name || !this.surname || !this.age)
            return;

        this.listInfoUser.push({
            name: this.name,
            surname: this.surname,
            age:this.age,
        });

        this.name = "";
        this.surname = "";
        this.age = "";
    },

    remove:function(index){

        this.listInfoUser.splice(index, 1);
    }
}

});