let score1=0
let score2=0
let first=document.getElementById("Scoreboard-first")
let second=document.getElementById("scoreboard-second")
let count1=0   
let count2=0 

function checkWin(){
    if(count1>count2){
        first.style.backgroundColor="green"
        second.style.backgroundColor=""
    }else if (count1===count2){
         first.style.backgroundColor="green"
        second.style.backgroundColor="green"
    }
    else{
        second.style.backgroundColor="green"
        first.style.backgroundColor=""
    }
}
function home(event){
    let num1=event.target.textContent
    num1=parseInt(num1)
    count1+=num1
    first.innerText=count1
    checkWin()
}
function guest(event){
    let num2=event.target.textContent
    num2=parseInt(num2)
    count2+=num2
    second.innerText=count2
    checkWin()
}

function reload(){
    location.reload();
}

