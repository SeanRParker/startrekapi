'use strict';

// function square(x) {
//   return x * x;
// };

// const square = function (x) {
//   return x * x;
// }

// console.log(square(8));

// // const squareArrow = (x) => {
// //   return x * x;
// // };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(9));

var fullName = 'Mike Smith';

// const getFirstName = (x) => {
//   return x.split(' ')[0];
// }

var getFirstName = function getFirstName(x) {
  return x.split(' ')[0];
};

console.log(getFirstName(fullName));
