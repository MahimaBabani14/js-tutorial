const _ = require("lodash");    // this is used to import lodash library
console.log(_);

const numbers = [1,2,3,4,5,6,7,8];
console.log(_.nth(numbers,5));
console.log(_.first(numbers));


const chunked = _.chunk(numbers,5)
  console.log(chunked)  
  // split array in parts

  const diff = _.difference(numbers, [1,4,5])
  console.log(diff);


  const dropped = _.drop(numbers,4)
  console.log(dropped);

  const taken = _.take(numbers, 5)
  console.log(taken);

  const filled = _.fill(['a', 'b', 'c', 'd', ],299)
  console.log(filled);

  const fille = _.fill(Array(10),29)
  console.log(fille);

  const num = [1,2,[2,[4]],[5]];
  console.log(_.flattenDepth(num,3));

  const c = [1,2,3,4]; const d = [2,4,9]
  console.log(_.union(c,d));
  console.log(_.intersection(c,d))


  var users = [
  {'user':'barney','age': 30},
    {'user':'fred','age': 21}
    ];
    
    console.log(_.map(users,'age'));

   console.log( _.isNaN(NaN));
// => true

 
_.isNaN(new Number(NaN));
// => true
 
isNaN(undefined);
// => true
 
_.isNaN(undefined);
// => false