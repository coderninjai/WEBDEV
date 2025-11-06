let arr=[99,3,3,99,3,355,532]
// let newArr=[];
// for(let i=0;i<arr.length;i++){
//     const element =arr[i];
//     newArr.push(element**2)
// }

// let newArr=arr.map((e)=>{
//   return e**2;  
// })

// console.log(newArr)

// const greaterthanSeven=(e)=>{
//     if(e>7){
//         return true

//     }
//     return false
// }

// console.log(arr.filter(greaterthanSeven))


const red=(a,b)=>{
    return a+b;
}

console.log(arr.reduce(red))