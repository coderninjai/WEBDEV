console.log('This is promises');


let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("no you reject")
    }
    else {

        setTimeout(() => {
            console.log("Yes I am done1")
            resolve("Harry")
        }, 2000);
    }
})
let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("no you reject 2")
    }
    else {

        setTimeout(() => {
            console.log("Yes I am done 2 ")
            resolve("Harry 2")
        }, 2000);
    }
})

// prom1.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);

// })

let p3 = Promise.allSettled

([prom1, prom2])
    
    p3.then((a) => {
    console.log(a);
}).catch(e => {
    console.log(e)
})
