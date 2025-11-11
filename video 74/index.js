let button = document.getElementById("btn")

button.addEventListener("dblclick",()=>{
   document.querySelector(".box").innerHTML="<b> you were clicked <b>"
})


button.addEventListener("contextmenu",()=>{
  alert("dont hack us by Right click please")
})


document.addEventListener("keydown",(e)=>{
 console.log(e)
})


