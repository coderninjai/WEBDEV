function nice(name){
    console.log("hey " +name+ " you are nice!");
    console.log("hey " +name+ " you are good!");
}

nice("Rohan")

nice ("shivam dubey");


function sum(a,b,c=3){
    // console.log(a+b);
    return a+b+c;

}

// sum(3,8);

result =sum(3,99,-3);
console.log("The sum of these numbers is ",result);

// Arrow function 
const funct1 =(x)=>{
    console.log("I am a arrow function",x);
}

funct1(34);