import path from 'node:path'

export function serveStatic(dir){
    const filePath=path.join(dir,'public','index.html')
    console.log(filePath)
}