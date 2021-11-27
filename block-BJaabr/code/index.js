// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
// let convertToString = function (n) {
//   return String(n);
// };

// - Write an Arrow Function without curly brackets (if possible)
// let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
// let convertToString = (n) => {
//   return String(n);
// };

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"






/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(num){
  return num+1;
}

// - Write a Function Expression
let addOne1 = function addOne(num){
  return num+1;
}

// - Write an Arrow Function without curly brackets(if possible)
let addOne11  = num => num + 1

// - Write an Arrow Function with curly brackets
let addOne111 = (num) => {
  return num + 1;
}

// - Execute the function

addOne(7)
// - Execute the function and store the return value in a variable.
let res = addOne11(77);

// - What is the typeof returnValue
console.log(typeof res) 
// res response type is number




/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/


// - Write a Function Declaration
function substractOne(num){
  return num - 1;
}

// - Write a Function Expression
let substractOne1 = function substractOne(num){
  return num - 1;
}

// - Write an Arrow Function without curly brackets(if possible)
let substractOne11  = num => num - 1

// - Write an Arrow Function with curly brackets
let substractOne111 = (num) => {
  return num - 1;
}

// - Execute the function

substractOne(7)
// - Execute the function and store the return value in a variable.
let subRes = substractOne11(77);

// - What is the typeof returnValue
console.log(typeof subRes) 
// res response type is number

// --------------------------------------------------------------------------------------

/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum(num1, num2){
  return num1 + num2;
}

// - Write a Function Expression
let sum1 = function sum(num1, num2){
  return num1 + num2;
}

// - Write an Arrow Function without curly brackets(if possible)
let sum11  = (num1, num2) => num1 + num2;

// - Write an Arrow Function with curly brackets
let sum111 = (num1, num2) => {
  return num1 + num2;
}

// - Execute the function

sum(7, 17)
console.log("7, 17", sum(7, 17))
// - Execute the function and store the return value in a variable.
let sumRes = sum11(77, 177);
console.log(sumRes)

// - What is the typeof returnValue
console.log(typeof sumRes) 
// res response type is number


// --------------------------------------------------------------------------------------


/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square(num){
  return num * num;
}

// - Write a Function Expression
let square1 = function square(num){
  return num * num;
}

// - Write an Arrow Function without curly brackets(if possible)
let square11  = num => num * num;

// - Write an Arrow Function with curly brackets
let square111 = num => {
  return num * num;
}

// - Execute the function
square(7)
console.log("square of 7 is ", square(7))
// - Execute the function and store the return value in a variable.
let squareRes = square11(77);
console.log(squareRes)

// - What is the typeof returnValue
console.log(typeof squareRes) 
// res response type is number


// --------------------------------------------------------------------------------------


/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater(num1, num2){
  if(num1 > num2){
    return true;
  }else{
    return false;
  }
}


// - Write a Function Expression

let isGreater1 = function isGreater(num1, num2){
  if(num1 > num2){
    return true;
  }else{
    return false;
  }
}

// - Write an Arrow Function without curly brackets(if possible)

let isGreater11 = (num1, num2) => num1>num2 ? true : false;
// - Write an Arrow Function with curly brackets
let isGreater111 = (num1, num2) => {
  if(num1>num2){
    return true }else{
      return false;
    }
  }
// - Execute the function

isGreater(7, 17);
isGreater1(77, 17);
isGreater11(98, 17);
isGreater111(98, 197);


// - Execute the function and store the return value in a variable
let isGreater1111 = isGreater111(98, 197);

// - What is the typeof returnValue
console.log(typeof isGreater1111);

// --------------------------------------------------------------------------------------


/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
let odd = `Number is odd`;
let even = `Number is even`;

function oddOrEven(num){
  if(num % 2 ===0){
    return even;
  }else{
    return odd;
  }
}

// - Write an anonymous Function Expression
let oddOrEven1 = function(num){
  if(num % 2 ===0){
    return even;
  }else{
    return odd;
  }
}

// - Write an named Function Expression
let oddOrEven11 = function oddOrEven(num){
  if(num % 2 ===0){
    return even;
  }else{
    return odd;
  }
}

// - Write an Arrow Function without curly brackets (hint: use ternary operator)

let oddOrEven111 = num => (num%2===0)? even : odd;

// - Write an Arrow Function with curly brackets
let oddOrEven1111 = num =>{
  if(num%2===0){
    return even;
}else{
  return odd;
}
}


// - Execute the function
oddOrEven(8);
oddOrEven1(9);
oddOrEven11(10);
oddOrEven111(11);
oddOrEven1111(12);


// - Execute the function and store the return value in a variable

let oddOrEven11112 = oddOrEven111(11);

// - What is the typeof returnValue

console.log(oddOrEven111(11));
console.log(typeof oddOrEven111(11));
