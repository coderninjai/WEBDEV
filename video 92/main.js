const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs');

app.get('/', (req, res) => {
    let siteName="Adidas"
    let searchText="Search Now"
    let arr=[1,34,53]
  res.render("ndex",{siteName:siteName,searchText:searchText,arr})
})


app.get('/blog/:slug', (req, res) => {
    let blogtitle="Adidas is a shoe brand "
    let blogContent="Its a very good brand"
  res.render("templates/blogpost .html",{blogtitle:blogtitle, blogContent:blogContent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
