// array

const myArr = [0, 1, 4, 3, 4, 5]

// console.log(myArr[2]);

// // aray copy operations == shallow copies (same reference point) , deep copy = (don't share)

// const myHeroes = ["shaktiman", "naagraj"]

// const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[1]);

// // Array methods

// myArr.push(6)
// console.log(myArr);

// myArr.pop()
// console.log(myArr);

// myArr.unshift(6)   // INSERT AT BEGINING(start)
// console.log(myArr);

// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(5));

// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);

// slice , splice

// console.log("A", myArr);

// const myn1 = myArr.slice(1,3)  // RANGE DOESN'T INCLUDE AND IT DOESN'T CHANGE IN MAIN ARRAY

// console.log(myn1);
// console.log("B" , myArr);

// const myn2 = myArr.splice(1,3)   // RANGE INCLUDE BUT IT GIVE CHANGES IN MAIN ARRRAY
// console.log("C", myArr);
// console.log(myn2);


// 02_ARRAY

const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros);

const all_newheros = [...marvel_heros, ...dc_heros]  // SPREAD METHOD 
// console.log(all_newheros);


console.log(Array.isArray("mahima"))
console.log(Array.from("mahima"))
console.log(Array.from({name:"mahima"}))   // interesting  ==> empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

