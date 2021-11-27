/*
1. Create a function named `sayHello` that that accepts a parameter `name` and alert `Hello [name]!`.
*/

function sayHello(name){
  alert(`Hello ${name}`);
}

sayHello("Manoj");

/*
2. Create a function named `getFullName` that accepts two parameter `firstName` and `lastName` and returns
fullName.

Example:
  getFullName("John", "Snow"); // "John Snow"
  getFullName("Nelson", "Mandela"); // "Nelson Mandela"
*/

function getFullName(firstName, lastName){
  return firstName +" "+lastName;
}

getFullName("Manoj", "Krishna");

/*
3. Create a function named `addTwoNumbers` that accepts two numbers i.e `firstNum` and `secondNum` and returns
the sum of both numbers. If user passes any data other then numbers alert a message saying `Enter Valid Input`

Example:
addTwoNumbers(10, 22); // 32
addTwoNumbers(20, 32); // 32
addTwoNumbers(10, "100"); // Alert Enter Valid Input
*/

function addTwoNumbers(firstNum, secondNum){
  if(Number.isNaN(firstNum) || Number.isNaN(secondNum) ){
    alert("Enter a valid input");
  }else{
    return firstNum + secondNum;
  }
}

addTwoNumbers(20, 32); // 32

/*
4. Create a function named `calc` which accepts three parameter `numA`, `numB` and `operation`. Operation
can only be one of these `add, sub, mul, div`. Based on the operator return the value. If the `numA` or `numB`
is of any other data type alert `Enter Valid Input`

Example:

calc(10, 20, 'add'); // 30
calc(20, 10, 'sub'); // 10
calc(20, 10, 'mul'); // 200
*/

function calc(numA, numB, operation){
  if(Number.isNaN(numA) || Number.isNaN(numB) ){
    alert("Enter a valid input");
    return;
  }
  switch(true){
    case operation == "add":
      return numA+numB;
      break;
    case operation == "sub":
      return numA-numB;
      break;
    case operation == "mul":
        return numA*numB;
        break;
    case operation == "div":
          return numA/numB;
          break;
    default:
      alert("you did not make a right selection")
  }
}

calc(1,2, "add");
calc(17,24, "mul");

/*
5. Create a function named `isLeapYear` that accepts a number data type and return `true` or `false` based
on if the year id leap year or not.

isLeapYear(2000); // true
isLeapYear(2001); // false
*/

function isLeapYear(year){
  if(Number.isNaN(year) ){
    alert("Enter a valid input");
    return;
  }else if(year % 4 === 0){
    return true;
  }else if(year % 4 !== 0){
    return false;
  }
}
isLeapYear(2000); // true
isLeapYear(2001); // false

/*
6. Create a function named `getFactorial` that accepts a number and return the factorial of the number.
*/

function getFactorial(num){
  let factorial = 1;
  if(Number.isNaN(num)){
    alert("enter a valid input");
    return;
  }else if(num === 0){
    factorial = 1;
    return;
  }else{
    for(let i =1; i<= num; i++){
      factorial = factorial * i;
    }
    return factorial;
  }
}

getFactorial(5);