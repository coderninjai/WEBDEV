// let obj ={
//     a : 1,
//     b:"Harry"
// }

const { use } = require("react");

// console.log(obj)

// let animal ={
//     eats:true
// };


// let rabbit ={
//     jumps:true
// }


// rabbit.__proto__=animal;



class Animal {
    constructor(name) {
        this.name = name;
        console.log("object is created... ")
    }

    eats() {
        console.log('Kha raha hu -- ' + this.name);
    }

    jumps() {
        console.log('I am jumping ');

    }
}


class lion extends Animal {
    constructor(name) {
        super(name)
        console.log("Lion is borned and ready to rule... ")
    }
}
let a = new Animal("Salman-Bhai");
console.log(a);

let l = new Animal("Sheru bhai");
console.log(l);
l.eats()



// Getters and Setters 

class user {
    constructor(name) {
        this.name
    }

    get name() {
        return this.name;
    }

    set name(value) {
        if (value.length() < 4) {
          console.log('user name is too short ');
          
            return;
        }
        this._name = value;
    }
}


let user = new user("Tony Stark");
console.log(user.name);


user = new user("");