function sayMyName(){
    console.log("M");
    console.log("A");
    console.log("H");
    console.log("I");
    console.log("M");
    console.log("A");
}

// sayMyName()

function addTwoNumbers(number1, number2){
   
    // let result = number1 + number2
    // return result

    return number1 + number2
 }

const result = addTwoNumbers(3,4)
// console.log("result: ",  result);


// part-2

function calculateCartPrice(val1, val2, ...num1){     // ... => spread operator
    return num1
}

// console.log(calculateCartPrice(200, 40, 500));

const User = {
    username: "mahima",
    prices: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.prices}`);
}

handleObject(User)