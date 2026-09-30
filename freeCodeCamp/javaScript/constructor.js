const dateSnap= new Date()
let year=dateSnap.getFullYear()
console.log(year)

//new error

function checkUsername(user){
    if(user){
        console.log(user)
    }else{
        console.log("i an")
        throw new Error('Ther is no username provided')
    }
}

checkUsername()