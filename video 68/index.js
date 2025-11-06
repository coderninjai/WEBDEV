console.log("Pradip")

// let box=document.getElementsByClassName("box")
// console.log(box)

// box[2].style.backgroundColor="red"

// document.getElementById("red").style.backgroundColor="green"

document.querySelector(".box").style.backgroundColor="red"

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="red"
})