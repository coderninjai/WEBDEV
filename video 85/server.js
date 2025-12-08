console.log("hello world");

var slugify= require('slugify')

let a = slugify('some string')
console.log(a)

//if you prefer something oter than '-' as separator
const b =slugify('some string','=')
console.log(b)