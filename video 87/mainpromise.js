import fs from "fs/promises"

let a = await fs.readFile("ninja.txt")

console.log(a.toString())

let b = await fs.writeFile("ninja.txt"," This is the ninja text file ")
console.log(a.toString(),b)