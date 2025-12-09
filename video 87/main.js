const { error } = require("console")
// const fs = require ("fs")

// console.log(fs)


console.log("starting")
// fs.writeFileSync("harry.txt","I am harry the Guru")

fs.writeFile("ninja.txt","I am a Ninja",()=>{
    console.log("done")
    fs.readFile("ninja.txt",(error,data)=>{
        console.log(error,data.toString())
    })
})

fs.appendFile("ninja.txt","  ninjastyle",(e,d)=>{
    console.log(d);
})
console.log("ending")


