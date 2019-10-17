'use strict';

//  function square(x){
//     return x * x ;
// }

// console.log(square(3));


// // const squareArrow = (x) => {
// //     return x * x;
// // }


// const squareArrow = (x) => x * x;


// console.log(squareArrow(4))


var fullName = 'Jen Mead';

// let firstName;
// const getFirstNameL = (x) =>{
//     return  fullName.split(' ')[0];
// }

// console.log(getFirstNameL('Luckas Alofnso'))

var getFirstName = function getFirstName(x) {
  return fullName.split(' ')[0];
};

console.log(getFirstName('Jean Fuck'));
