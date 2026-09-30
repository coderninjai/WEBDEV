let speeding=(speedlimit,actualspeed)=>{
    if(actualspeed>speedlimit){
        console.log(`You are speding`)
    }
console.log(`you are going with speed of ${actualspeed}`)
}


speeding(39,303030)


//reduce method

let numbers = [1, 2, 3, 4];

let sum=numbers.reduce((sum,numbers)=>{
    return sum+numbers
},0)
console.log(sum); // 10