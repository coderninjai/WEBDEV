export const getFilterbyQuery=(data,queryObj)=>{
    const{continent,country,is_open_to_public}=queryObj
    if(continent){
        data=data.filter(destinations=>{
            destinations.continent.toLowerCase()=== continent.toLowerCase()
        })
    }
    if(country){
        data=data.filter(destinations=>{
            destinations.country.toLowerCase()===country.toLowerCase()
        })
    }
    if(is_open_to_public){
        data=data.filter(destinations=>{
             destinations.is_open_to_public === JSON.parse(is_open_to_public)
        })
    }
    return data
}