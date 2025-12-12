const { middleware } = require('expres')
const express= require('express')
const app= express()
const port =3000
const fs=require("fs")
const blog=require('./routes/blog')
// app.use(express.static("public"))

app.use('blog',blog)

//Middleware 1
app.use((req,res,next)=>{
    req.Ninja="I am Ninja"
    console.log(`${Date.now()} is a ${req.method}`)
    fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}\n`)
    // res.send("Hacked by the middleware 1")
    next()
})


// middleware 2
app.use((req,res,next)=>{
    console.log(`m2`)
    next()
})

app.get('/',(req,res)=>{
    res.send("hello world 2")
})
app.get('/about',(req,res)=>{
    res.send("hello about  "+ req.Ninja)
})


app.get('/contact',(req,res)=>{
    res.send("hello contact ")
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})