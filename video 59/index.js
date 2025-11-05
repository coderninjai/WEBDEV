// We jave to made a faulty calculator 
const prompt = require("prompt-sync")();

let a = Math.random();
console.log(a);
let b = prompt("Enter first no ");
let c = prompt("Enter second no ");


let operation = prompt("Enter which operation do you want ");

function assignFaultyOperation() {
    
    if (a < 0.1) {
        if (operation === '+') operation = '-';
        else if (operation === '-') operation = '+';
        else if (operation === '*') operation = '/';
        else if (operation === '/') operation = '*';
       
    }
}
function operations(a, b) {
    assignFaultyOperation();
   
    let result = eval(`${b}${operation}${c}`);
    console.log(result)
}

operations(a, b);