const color = ["red","blue","yellow","pink","orange"]
document.querySelectorAll(".box").forEach((elem)=>{
    let rand = Math.floor(Math.random()*5+1 )
    let rand2 = Math.floor(Math.random()*5+1 )
        elem.style.backgroundColor = color[rand];
        elem.style.color=color[rand2]
})

