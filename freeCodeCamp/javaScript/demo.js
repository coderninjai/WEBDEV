import{obj as n} from './objects.js'
import moduleName from './export_default.js'
import { resolve } from 'node:dns';
//Rounding off a number 
let a=232.232343242

a=Math.round(a*10000)/10000
// console.log(Number(a).toFixed(2))
// console.log(a)

//switch

function selectItem(item){
    let price =0;
    switch(item){
        case "coffe":
            price=2
            break;
        case "bis":
            price=4
            break;
        default:
            return `you selected the item which we don't sell`
    }
    return `You selected ${item} and it is of ${price}`
}
// console.log(selectItem('coffe'))

let film={
    title:"Intersteller",
    year:2000,
    genre:"Science-fiction",
    Director:"Christopher Nolan"
}


const{title,year,genre,Director}=film

// console.log(title)


function displayTrafficLights(light){
    console.log(light)
}
const st= document.getElementById("stop")

let stop=setTimeout(displayTrafficLights,3000,'🟡')

st.addEventListener("click",function()
{
    clearTimeout(stop)
    console.log("stoping")
})

displayTrafficLights('🟠')

const start=performance.now()

setTimeout(() => {
    const end=performance.now()
    console.log(`this is the time differrence ${end-start}`)
}, 1000);

// console.log(n )

// console.log(moduleName(n))   

