// temporal.now ==> for future reference

// let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23) //month = start from 0
// console.log(myCreatedDate.toLocaleString());


// let myTimeStamp = Date.now()

// console.log(myTimeStamp);

let newDate = new Date()
console.log(newDate);
console.log(newDate.getFullYear() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time is `

newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: newDate
})