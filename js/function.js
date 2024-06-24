// function declearation
// function invocation

// function greet(name){
//     return (`Hello, ${name}!`);
// }
// const result = greet('rahul');
// console.log(result);

// function sum(a,b){
//     return a+b;
// }
// const sumResult = sum(2,3);
// console.log(sumResult);

// function sub(c,d){
//     return c-d;
// }
// const subResult = sub(5,7);
// console.log(subResult);

// 1. named function
// 2. anonymous function
// function expression
// const mult = function(a,b){
//     return a*b;
// }
// const multResult = mult(5,7);
// console.log(multResult);
// // 3. arrow function(ES6)
// const div = (a,b) => a/b;
// const divResult = div(5,7);
// console.log(divResult);

// let sum1 = (a,b) =>{
//     return a+b;

// };
// const sum1Result = sum1(4,5);
// console.log(sum1Result);

// let details = (name , age) =>{
//     return (`Name: ${name} , Age: ${age}`);
// }
// const detailsResult = details('rahul', 25);
// console.log(detailsResult);

// immediately invoked function expression (IIFE)

// (function (num1, num2) {
//   const sum = num1 + num2;
//   console.log(`${num1} + ${num2} = ${sum}`);
// })(5, 3); // Pass the numbers as arguments to the IIFE

//  generator function
// constructor function
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// const person1 = new Person("Rahul", 25);
// console.log(person1.name, person1.age);

// const person2 = new Person("Rahul kumar", 21);
// console.log(person2.name);
// // global scope

// let globalVar = "i am global";
// function localScope() {
//   let localVar = "i am local";
//   console.log(localVar);
//   console.log(globalVar);
// }
// localScope();

// // closures function (allow inner function to access outer scope of function)

// function outerFunction() {
//   let outerVar = "i am outer variable";
//   function innerFunction() {
//     console.log(outerVar);
//   }
//   return innerFunction;
// }
// const myclosure = outerFunction();
// myclosure();

// JavaScript: Asynchronous and Synchronous Programming
// Asynchronous programming
//

// callback function A callback is a function passed as an argument to another function and is executed after the completion of that function.

// function greet(name, callback) {
//   return callback(name);
// }
// greet("rahul", sayName);

// function sayName(name) {
//   console.log(`Hello ${name}`);
// }

// // callback function for add and sub
// function add(a, b, callback) {
//   console.log(a + b);
//   return callback(a, b);
// }
// function sub(a, b) {
//   console.log(a - b);
// }
// add(5, 4, sub);

// promises function :Promises provide a cleaner way to handle asynchronous operations, allowing chaining and better error handling.
// Promise is an object representing the eventual completion or failure of an asynchronous operation.
// A promise is in one of these states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.
// Promise is a constructor function that takes a callback function as an argument. This callback function is called
// resolve() and reject().
// The resolve() method is called when the promise is fulfilled, and the reject() method is called
// when the promise is rejected.
// The promise object has a then() method that takes two arguments, a callback for the fulfilled state
// and a callback for the rejected state.
// The then() method returns a new promise, which is resolved or rejected based on the returned value
// of the callback function.
// The catch() method is used to handle rejected promises. It is a shorthand for the then()
// method with a rejected promise.
// The finally() method is used to execute a callback function regardless of the state of the promise.
// The Promise.all() method takes an array of promises as an argument and returns a new promise that
// is resolved when all the promises in the array are resolved, or rejected if any of the promises
// in the array are rejected.

// const promise = new Promise((resolve, reject) => {
//   const sum = 10;
//   if (sum == 10) {
//     resolve("success");
//   } else {
//     reject("failed");
//   }
// });
// promise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// sub value is less than  5 then  resolve if value is greater reject it and print the value
// const promise = new Promise((resolve, reject) => {
//   const sub = 1;
//   if (sub <= 5) {
//     resolve("success" + sub);
//   } else {
//     reject(`failed the value is ${sub}`);
//   }
// });
// promise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Synchronous programming

// async await
// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("data Fetch");
//     }, 1000);
//   });
// }
// async function getData() {
//   const data = await fetchData();
//   console.log(data);
// }
// getData();

// Anonymous function
// const multiply = function (x, y) {
//   return x * y;
// };
// const result = multiply(2, 4);
// console.log(result);

// // arrow function
// const greet = (name) => {
//   console.log(`hello, ${name}`);
// };
// greet("sachin");
// greet();

// (Immediately Invoked Function Expression)
// (IIFE)
// (function (name) {
//   console.log(`hello, ${name}`);
// });
// ("rahul");

// // recursive function
// function factorial(n) {
//   if (n == 0|| n==1) {
//     return 1;
//   }
//      n * factorial(n - 1);

// }
// let result1 = factorial(5);
// console.log(result1);

// closure function

function out() {
  let a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}
let innerFunc = out();
innerFunc();

// callback function
function first(a, b) {
  console.log(a);
  b();
}
function second() {
  console.log("second function");
}
first(5, second);

function one(x, y, z) {
  console.log(x);
  z();
  y();
}
function two() {
  console.log("two");
}
function three() {
  console.log("three");
}
one(5, two, three);
