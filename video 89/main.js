const express = require('express')
const app = express()
const port = 3000

const blog=require('./routes/blog')
const shop=require('./routes/shop')

app.use(express.static("public"))
app.use('/blog',blog)
app.use('/shop',shop)

app.get('/', (req, res) => {
    console.log("hey its a get request")
    res.send('Hello World!')
})

app.post('/', (req, res) => {
    console.log("hey this is post requesst")
    res.send('Hello World 2!')
}).put('/', (req, res) => {
    console.log("hey this is put requesst")
    res.send('Hello World 3!')
})

app.get("/index",(req,res)=>{
    console.log("Hey its index")
    res.sendFile('template/index.html',{root: __dirname})
})


app.get('/api', (req, res) => {
    console.log("hey its a json")
    res.json({a:1,b:2,c:3,d:4})
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
