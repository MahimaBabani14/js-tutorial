// Singleton

// object.create

// // object literals 

// const mySym = Symbol("Key1")


// const jsUser = {
//     name: "mahima",
//     age: 18,
//     [mySym]: "myKey1",
//     location: "jaipur",
//     isloggedin: false,
//     lastlogindays: ["monday", "saturday"]
// }

// // console.log(jsUser.name)
// // console.log(jsUser[mySym])   // this is important

// jsUser.name = "mahi"
// // Object.freeze(jsUser)
// jsUser.name = "mahima"
// // console.log(jsUser);

// jsUser.greeting = function(){
//     console.log("hello mahima");

// }

// jsUser.greetingtwo = function(){
//     console.log(`hello mahima ${this.name}`);

// }

// console.log(jsUser.greeting());
// console.log(jsUser.greetingtwo());



// part-2

// const tinderrUser = new Object()
const tinderrUser = {}                 // this method is also used 

 tinderrUser.id = "123"
 tinderrUser.name = "mahi"
 tinderrUser.isloggedin = false

// console.log(tinderrUser);

const regularUser ={
    email: "mahi@gmail.com",
    fullname: {
        userfullname: {
            firstname: {
                name: "mahima"
            },
            lastname: "babani"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = {obj1, obj2}

const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);