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

console.log("A", myArr);

const myn1 = myArr.slice(1,3)  // RANGE DOESN'T INCLUDE AND IT DOESN'T CHANGE IN MAIN ARRAY

console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice(1,3)   // RANGE INCLUDE BUT IT GIVE CHANGES IN MAIN ARRRAY
console.log("C", myArr);
console.log(myn2);
