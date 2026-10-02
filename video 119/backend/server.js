import express from "express"
const app = express()
import bodyParser from "body-parser"
const port = 3000
import cors from "cors"

app.use(bodyParser.json())

app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
console.log(req.body)
  console.log(req.form)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
