console.log("callback and promises")


setTimeout(() => {
    console.log("I am timout")
}, 2000);

setTimeout(() => {
    console.log("I am timout2")
}, 0);

console.log("the end")



const fn = () => {
    console.log("I am thanos")
}
const callback = (arg, fn) => {
    console.log(arg)
    fn()
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Callback on me (get in the car)",fn)
    document.body.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", (arg, fn) => {
    console.log(arg);
    fn()
})


