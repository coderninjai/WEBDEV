// const prompt=require("prompt-sync")();

let a = prompt("enter a no");
let b = prompt("enter a no");
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("errorr");
}
let sum = parseInt(a) + parseInt(b);
let x=7;

function main(){

    
    try {
        console.log("The sum is ", sum*x)
        return true;
    } catch (error) {
        console.log('error aaya hai dost ');
        return false;
    }
    finally{
        console.log("finally done")
    }
}

let c =main()