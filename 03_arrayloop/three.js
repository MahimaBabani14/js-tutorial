// for each

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (item)  {
//     console.log(item);
// } )

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})