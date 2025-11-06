const prompt = require("prompt-sync")();

let a =Number(prompt("Enter a number you want factorial of "));

let result=1;
for(let i=a;i>=1;i--){
    
    result=i*result;
}

console.log(result);