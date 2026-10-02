import http from 'node:http'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { testPath } from './utils/testPath.js'
import { serveStatic } from './utils/serveStatic.js'
import fs from 'node:fs'



const PORT = 8000

// const __filename = fileURLToPath(import.meta.urlut   )
const __dirname = import.meta.dirname

// console.log('CWD', process.cwd())

const server = http.createServer(async(req, res) => {
    // serveStatic(__dirname)
    const pathToResource=path.join(__dirname,'public','index.html')
    // const content=fs.readFileSync(pathToResource,'utf8')
 const content=await fs.promises.readFile(pathToResource,'utf8')
    // fs.readFile(pathToResource,'utf-8',(err,content)=>{
    //     if(err){
    //         console.log(err)
    //         return
    //     }    
    // })

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(content)
   
})

server.listen(PORT, () => {
    console.log(`Connected on port ${PORT}`)
})