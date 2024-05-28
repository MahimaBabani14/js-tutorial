// for of

// ["", "", "",]    // => string

// [{}, {}, {}]     // => object

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "hello world!"
for (const greet of greetings) {
    // console.log(`each character is ${greet}`);
}

// Maps 

const map1 = new Map()    // map = it hold the key-value pair and remember the original insertion order of the keys

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

//console.log(map1.get('a'));

map1.set('a', 97);
//console.log(map1.get('a'));

//console.log(map1.size);


for(const [key, value] of map1) {
    //console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

