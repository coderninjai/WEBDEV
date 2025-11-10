function CreateCard(Ctitle, channel, views, old, duration, ima) {

    if(views>1000&&views<=1000000){
        views=views/1000 +" k "
    }
    else if(views>1000000){ 
        views=views/1000000 +" M "
    }
    let containers = document.querySelector(".container")
    

    const boxes = document.createElement("div")
    boxes.classList.add("box");
    containers.appendChild(boxes)
    
    
    const first = document.createElement("div")
    first.classList.add("thumb")
    
    const thumb = document.createElement("img");
    
    thumb.src = ima
    
    const span1 = Object.assign(document.createElement("span"), {
        textContent: duration
    });
    span1.classList.add("time")
    
    first.appendChild(span1)
    first.appendChild(thumb)
    
    boxes.appendChild(first)
    
    const info = document.createElement("div")
    info.classList.add("info");
    
    
    const span2 = Object.assign(document.createElement("span"), {
        textContent: Ctitle
    });
    span2.id = "title";
    
    info.appendChild(span2);
    
    const none = document.createElement("div")
    none.classList.add("none");
    
    
    const span3 = Object.assign(document.createElement("span"), {
        textContent: channel +" . "
    });
    
    const span4 = Object.assign(document.createElement("span"), {
        textContent: views +" views ."
    });
    
    const span5 = Object.assign(document.createElement("span"), {
        textContent: old + " months old"
    });
    
    none.appendChild(span3)
    none.appendChild(span4)
    none.appendChild(span5)
    info.appendChild(none);
    boxes.appendChild(info)
    
}

CreateCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

CreateCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 5000000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
       