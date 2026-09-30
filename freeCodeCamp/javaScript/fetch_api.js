fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random')
    .then(response=>response.json())
    .then(data=>console.log(data))