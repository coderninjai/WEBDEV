import path from 'node:path'

export function testPath(){
    const relPathToResource=path.join('public','index.html')
    console.log('testPath:', relPathToResource)
}