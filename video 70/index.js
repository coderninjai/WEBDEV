const color = ["red","blue","yellow","pink","orange"];
document.querySelectorAll(".box").forEach((e)=>{
let rand1=Math.floor(Math.random()*5    );
let rand2=Math.floor(Math.random()*5);
e.style.backgroundColor=color[rand1];
e.style.Color=color[rand2];

});
