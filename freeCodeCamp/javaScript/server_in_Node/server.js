import http from 'node:http'
import { serialize } from 'node:v8'

import { getDataFromDB } from './db.js'
import { resusef } from './utility/util.js'
import { filter } from './utility/filter.js'
import {getFilterbyQuery} from './utility/gerFilterbyQuery.js'

const PORT = 8000
const server = http.createServer(async (req, res) => {

    const destinations = await getDataFromDB()

    const urlObj = new URL(req.url, `http://${req.headers.host}`)
    const queryObj=Object.fromEntries(urlObj.searchParams)
    
    // req.url
    if (urlObj.pathname === '/api' && req.method === 'GET') {
        // let filteredDestinations=
        let filterData=getFilterbyQuery(destinations,queryObj)
        console.log(queryObj)   

        resusef(res, 200, destinations)

    } else if (req.url.startsWith('/api/continent') && req.method === 'GET') {
        const continent = req.url.split('/').pop()
        console.log(continent)
        const filterData = filter(destinations, 'continent', continent)

        resusef(res, 200, filterData)


    }
    else if (req.url.startsWith('/api/country') && req.method === 'GET') {
        const country = decodeURIComponent(req.url.split('/').pop())
        console.log(country)
        const filterData = filter(destinations, 'country', country)
        resusef(res, 200, filterData)
    }
    else {
        const message = [{
            error: 'not found ',
            message: 'the requested route does not exists'
        }]
        resusef(res, 404, message)
    }
})

server.listen(PORT, () => {
    console.log(`connected to port ${PORT}`)
})
    

/*
const server = http.createServer((req, res) => {
    const urlObj = new URL(req.url, `http://${req.headers.host}`)
    const queryObj=Object.fromEntries(urlObj.searchParams)
    console.log(queryObj) 
})

server.listen(PORT, () => { console.log(`server is listening on Port ${PORT}`) })
*/