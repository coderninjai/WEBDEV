// async function getdata()
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(455)
//         }, 3000);
//     })
// }

async function getdata()
{
//    let x=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))

    let x = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body:JSON.stringify({

            title: 'foo',
            body:'bar',
            userId:1,
        }),
        headers:{
            'content-type':'application/json; charset=UTF-8'
        },  
    })

    let data= await x.json();
    console.log(data)
    return 44   
}
// console.log('loading module');

// console.log('do something else');

async function main(){
    let data = await getdata();
    
    console.log(data)
    
    console.log('process data');
    
    console.log('task');
}

main()
// data.then((v)=>{

//     console.log(data)
    
//     console.log('process data');
    
//     console.log('task');
// })

