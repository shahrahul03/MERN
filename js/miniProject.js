// 1. Promises
// Create a function fetchData that simulates fetching data from an API. The function should
// return a promise that resolves with a hardcoded array of objects after 2 seconds. Each object
// should represent a user with properties id, name, and age.

function fetchData() {
  const users = [
    { id: 1, name: "rahul", age: 20 },
    { id: 2, name: "kumar", age: 22 },
    { id: 3, name: "shah", age: 25 },
  ];
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 2000);
  });
}
fetchData()
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log("error");
  });

//   2. Closures
// Create a function createCounter that returns an object with two methods: increment and
// getCount. The increment method should increase the internal count by 1, and the getCount
// method should return the current count. Use a closure to maintain the internal count variable.

function createCounter() {
  let count = 0;
  return {
    increment: function () {
      count += 1;
    },
    getCount: function () {
      return count;
    },
  };
}
const counter = createCounter();
counter.increment();
console.log(counter.getCount());
counter.increment();

console.log(counter.getCount());

// 3. Callbacks
// Create a function processData that accepts an array of numbers and a callback function. The
// function should process each number in the array using the callback function and return a
// new array of processed numbers.

function processData(numbers, callback) {
  const processedNumbers = numbers.map(callback);
  return processedNumbers;
}
function processed(number) {
  return number * 2;
}
const numbers = [1, 2, 3, 4, 5, 6, 7];
const squareNumbers = processData(numbers, processed);
console.log(squareNumbers);

//4. Async/Await
// Rewrite the fetchData function from Question 1 using async and await.

function fetchData1() {
  const users = [
    { id: 1, name: "rahul", age: 20 },
    { id: 2, name: "kumar", age: 22 },
    { id: 3, name: "shah", age: 25 },
  ];
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 2000);
  });
}
async function getData() {
  try {
    const users = await fetchData1();
    console.log(users);
  } catch (error) {
    console.log(error.message);
  }
}
getData();

// 5. Array Manipulation: Map
// Given an array of numbers, create a function that doubles each number using map.
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubledNumbers = numbers1.map((number) => number * 2);
console.log(doubledNumbers);

// 6 Array Manupulation:filter
// Given an array of numbers, create a function that filters out numbers less than 10 using flter.
const numbers2 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
];
const filteredNumbers = numbers2.filter((number) => number > 10);
console.log(filteredNumbers);

// 7. Array Manipulation: Find
// Given an array of numbers, create a function that finds the first number greater than 15 using
// find.
const numbers3 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
];
const findNumber = numbers3.find((number) => number > 15);
console.log(findNumber);

//   8. Array Manipulation: Reduce
// Given an array of numbers, create a function that sums all numbers using reduce.
const numbers4 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
];
const sumNumbers = numbers4.reduce((acc, number) => acc + number, 0);
console.log(sumNumbers);

// //   9. Object Manipulation
// // Given an array of user objects, write a function to transform this array into an object where the
// // keys are user IDs and the values are the corresponding user objects.
const users = [
  { id: 1, name: "rahul" },
  { id: 2, name: "navin" },
  { id: 3, name: "suraj" },
];
const usersObj = users.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {});
console.log(usersObj);

// // 10. Classes and Objects
// // Create a Person class with a constructor that accepts name and age parameters. Add a
// // method describe that returns a string describing the person.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  describe() {
    return `My name is ${this.name} and I am ${this.age} years old.`;
  }
}
const person = new Person("Rahul", 25);
console.log(person.describe());

// // 11. Inheritance
// // Create a Student class that extends Person and adds a grade property. Add a method study
// // that returns a string indicating the student is studying.
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  study() {
    return `I am studying for my ${this.grade} grade.`;
  }
}
const student = new Student("Rahul", 25, "Bsc cs and se");
console.log(student.study());

// 12. Error Handling with Promises
// Modify the fetchData function to randomly reject the promise with an error message &quot;Failed to
// fetch data&quot;. Handle this error using .catch when calling the function.
const fetchData2 = () => {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    if (random < 0.5) {
      reject("Failed to fetch data");
    } else {
      resolve("Data fetched successfully");
    }
  });
};
fetchData2()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// 13. Error Handling with Async/Await
// Modify the fetchData function with async/await to handle errors using try/catch blocks.
async function fetchData3() {
  try {
    // Simulate a delay and fetching data
    const users = await new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = [
          { id: 1, name: "rahul", age: 25 },
          { id: 2, name: "navin", age: 30 },
          { id: 3, name: "rajeev", age: 35 },
        ];
        resolve(data);
      }, 2000);
    });

    return users;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error after logging it
  }
}

// async/await
async function getData() {
  try {
    const users = await fetchData3();
    console.log(users);
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

getData();

// 14. Complex Array Manipulation
// Given an array of users, where each user has a name and an array of hobbies, create a
// function that returns an array of all unique hobbies using reduce.
const users1 = [
  { name: "Rahul", hobbies: ["reading", "hiking"] },
  { name: "Rajeev", hobbies: ["cooking", "reading"] },
  { name: "Sachin", hobbies: ["hiking", "swimming"] },
];
const uniqueHobbies = users1.reduce((acc, user) => {
  user.hobbies.forEach((hobby) => {
    if (!acc.includes(hobby)) {
      acc.push(hobby);
    }
  });
  return acc;
}, []);
console.log(uniqueHobbies);

// Conceptual Questions
// 1. Why are promises used in JavaScript? Explain the advantages of using promises over
// traditional callback functions.

// Ans :
// Promises provide a way to handle asynchronous operations by representing
// the eventual completion (or failure) of an asynchronous operation and its resulting value. A
// promise can be in one of three states: pending, fulfilled, or rejected.

// 2. What is a closure in JavaScript? Provide an example.
// Ans :
// A closure is a feature in JavaScript where an inner function has access to the
// outer (enclosing) function's variables. A closure is created when a function is defined inside
// another function, and the inner function references variables from the outer function. This
// allows the inner function to "remember" the environment in which it was created.

// 3. What is a callback function and why is it used in JavaScript?
// Ans:
// A callback function is a function that is passed into another function as an
// argument and is executed after some operation has been completed. Callbacks are
// commonly used for handling asynchronous operations such as API calls, timers, and event
// handlers.

// 4. What are async/await in JavaScript and how do they improve asynchronous
// programming?
// Ans :
// Async/await is syntactic sugar built on top of promises. It allows you to write
// asynchronous code that looks and behaves more like synchronous code, making it easier to
// read and write. The async keyword is used to declare an asynchronous function, and the
// await keyword is used to pause the execution until the promise is resolved.

// 5. Write the difference between ES6 and JS.

// Ans :
// JavaScript (ES5): This is the vanilla JavaScript standard released in 2009.
// It lacks special features and is supported everywhere, even in older browsers like Internet Explorer 9.
// ES6 (ECMAScript 2015): Released in 2015, ES6 introduced many new features and syntax enhancements to JavaScript1.
// It marks the start of JavaScript’s restandardization and is technically called ES2015.

// 6. What are some of the major features introduced in ES6?

// Ans :
// JavaScript ES6 introduces new syntax, enabling us to write less code for accomplishing complex tasks. Understanding ES6 features facilitates efficient coding.

// *Key Features are:

// -Arrow function
// -Template literals
// -Object
// -Array destructuring
// -Set
// -Spread operator
// -Rest operator
