// Business name generator

let adjectives = {
    "one": "crazy",
    "two": "amazing",
    "three": "fire"
};

let shop = {
    "one": "engine",
    "two": "food",
    "three": "meat"
};

let another = {
    "one": "hub",
    "two": "bros",
    "three": "limited"
};

// Generate random numbers for each category
let a = Math.random();
let b = Math.random();
let c = Math.random();

let adj;
if (a < 0.33) {
    adj = adjectives.one;
} else if (a < 0.66) {
    adj = adjectives.two;
} else {
    adj = adjectives.three;
}

let sh;
if (b < 0.33) {
    sh = shop.one;
} else if (b < 0.66) {
    sh = shop.two;
} else {
    sh = shop.three;
}

let an;
if (c < 0.33) {
    an = another.one;
} else if (c < 0.66) {
    an = another.two;
} else {
    an = another.three;
}

console.log(`Your business name could be: "${adj} ${sh} ${an}"`);
