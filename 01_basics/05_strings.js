// const name = "mahima"
// const repoCount = 50

// console.log(name + repoCount + " Value");  //outdated

// console.log(`hello my name is ${name} and my repo count is ${repoCount} `);   => this method will used 

const gameName = new String('mahima')

// console.log(gameName [0]);
// console.log(gameName [4]);
// console.log(gameName [5]);

// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase);
// console.log(gameName.charAt('3'));
// console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-5, 4)
console.log(anotherString);

const newStringOne = "  mahima  "
console.log(newStringOne);
console.log(newStringOne.trim);

const url = "https://mahima.com/mahima%20babani"

console.log(url.replace('%20', '-'))

console.log(url.includes('mai'))

console.log(gameName.split('-'))
