// function that takes two paprameters and returns their sum
function add(a, b) {
  return a + b;
}
let sum = add(4, 5);
console.log(sum);

// funcation that calculates the average of an array of numbers
function calculateAverage(numbers) {
  // Check if the input is an array and not empty
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return null;
  }

  // Calculate the sum of all elements
  const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);

  // Calculate the average by dividing the sum by the number of elements
  return sum / numbers.length;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
const average = calculateAverage(numbers);
console.log(average);

// function that checks if a given number is even or odd
function isEven(a) {
  if (a % 2 === 0) {
    console.log(`${a} is even number `);
  } else {
    console.log(`${a} is odd number`);
  }
}

let a = 3;
let b=1445534;

isEven(a);
isEven(b);

//function that reverses a string
function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString+=str[i]}
        return newString
    }
    let str1="Hello world";
    let reStr = reverseString(str1)
    console.log(reStr);

//function that find the maximum value in an array of numbers
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
let arr1 = [1, 2, 3, 4, 5];
let maxNum = findMax(arr1);
console.log(maxNum);

//function that convert celsius to farhrenheit
function convertCtoF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
let celsius = 30;
let fahrenheit = convertCtoF(celsius);
console.log(fahrenheit);
// function that generates a random number between a given minimum and maximum
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let min = 1;
let max = 10;
let random = randomNum(min, max);
console.log(random);
//function that checks if a string is a palindrome
function isPalindrome(str) {
  let newStr = str.split("").reverse().join("");
  if (newStr === str) {
    return true;
  } else {
    return false;
  }
}
let str1 = "racecar";
let isPalindrome = isPalindrome(str1);
console.log(isPalindrome);
//function that capitalizes the first letter of each word in a sentence
function capitalizeFirstLetter(str) {
  let newStr = str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return newStr;
}
let str2 = "my name is Rahul ";
let capitalized = capitalizeFirstLetter(str2);
console.log(capitalized);

// function that returns the factorial of a given number
function factorial(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}
let num = 5;
let numfacto = factorial(num);
console.log(numfacto);
// function that return the number of occurences of a specific element in an array
function countOccurrences(arr, element) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      count++;
    }
  }
  return count;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 5, 9, 10, 5, 11];
let element = 5;
let count = countOccurrences(arr, element);
console.log(count);

// function that check if a giben year is a leap year
function isLeapYear(year) {
  if (year % 4 === 0 || year % 100 === 0 || year % 400 === 0) {
    console.log(`${year}, is a leap year`);
  } else {
    console.log(`${year}, is not a leap year`);

  }
}

let year = 2021;
let isLeap = isLeapYear(year);

//function that merges two array and returns the sorted result
function mergeArrays(arr3, arr2) {
  let mergedArray = arr3.concat(arr2);
  mergedArray.sort((a, b) => a - b);
  return mergedArray;
}
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let merged = mergeArrays(arr3, arr2);

console.log(merged);
function that convert a number to its roman numeral representation
function convertToRoman(num) {
  let roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let romanNum = [];
  for (let key in roman) {
    while (num >= roman[key]) {
      romanNum.push(key);
    num -= roman[key];
    }
  }
  return romanNum.join('');
}
let num = 1994;
let romanNum = convertToRoman(num);
console.log(romanNum);

function that find the second smallest element in an array of numbers
function findSecondSmallest(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  return sortedArr[1];
}
let arr = [10, 4, 3, 10, 45];
let secondSmallest = findSecondSmallest(arr);
console.log(secondSmallest);

// function that calculates the area of a circle given its radius

function areaOfCircle(radius) {
  let area = Math.PI * radius ** 2;
  return area;
}
let radius = 2;
let circleArea = areaOfCircle(2);
let circleArea1 = areaOfCircle(5);
console.log(circleArea);
console.log(circleArea1);

// function that truncates a string if it exceeds a specified length and appends "..." to the end.
function truncateString(str, num) {
  if (str.length > num) {
    str = str.slice(0, num) + "...";
  }
  return str;
}
let str = "Hello world ";
let num = 8;
let truncatedStr = truncateString(str, num);
console.log(truncatedStr);

// function that removes all falsy values(false, null, 0,"", un defined and NaN) from an array.
function bouncer(arr5) {
  let newArr = arr5.filter(function (element) {
    return element;
  });
  return newArr;
}
let arr5 = [7, "ate", "", false, 9];
let newArr1 = bouncer(arr5);
console.log(newArr1);

// function that generates a new array with unique values from a given array.
function uniqueValuesOnly(arr) {
  let newArr = arr.filter(function (element, index, array) {
    return array.indexOf(element) === index;
  });
  return newArr;
}
let arr = [1, 2, 2, 3, 4, 5, 5, 5, 6, 6, 7];
let newArr = uniqueValuesOnly(arr);
console.log(newArr);
