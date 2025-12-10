const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

//app.get or app.post or app.put or app.delete (path, handler)
app.get('/', (req, res) => {
  res.send('Hello World2!')
})


app.get('/about', (req, res) => {
  res.send('Habout2!')
})


app.get('/home', (req, res) => {
  res.send('home!')
})


app.get('/contact us    ', (req, res) => {
  res.send('contact us!')
})

app.get('/blog', (req, res) => {
  res.send('blog')
})

app.get('/blog/:slug/:second', (req, res) => {
    //logic to fetch intro to js from the db

  res.send(`hello ${req.params.slug} and ${req.params.second}`)
})

app.get('/blog/Intro-to-python', (req, res) => {
  res.send('python blog')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
