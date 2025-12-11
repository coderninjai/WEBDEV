const express = require('express')
const router = express.Router()

// respond with "hello world" when a GET request is made to the homepage
router.get('/', (req, res) => {
  res.send('home page')
})

//define the about route
router.get('/about', (req, res) => {
  res.send('About shop')
})



module.exports=router