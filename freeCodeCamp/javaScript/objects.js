
// Revising the object methods  in the javascript
export const obj = {
    name:"Glass",
    age:23,
    silly:function(){
        console.log("this glass is silly")
    }
}

// console.log(obj.name)

// Revising the objects 
let person={
    name:"Pradip",
    age:21,
    country:"India"
}


// function logData(){
//         console.log(person.name + " is "+ person.age +" years old and lives in " + person.country)
// }

// logData()


// if/else-if/else revision it is easy so i am not doing it 
//for (let i =0;i<arr.length;i++){console.log(i)}

// we could also use export like this 
//export {obj, and other }







function callback1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("1st")
            resolve()
        },1000)
    })
}


function callback2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("2nd")
            resolve()
        },1000)
    })
}

function callback3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("3rd")
            resolve()
        },1000)
    })
}


try{
    await callback1()
    await callback2()
    await callback3()
}catch(err){
    console.log(err)
}   