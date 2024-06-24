// 1.
function add(a, b) {
  return a + b;
}
const sum = add(5, 4);
console.log(sum);



//2.
function getFirstElement(arr) {
  return arr[0];
}
const arr = [1, 2, 3, 4, 5, 6, 7];
const firstElement = getFirstElement(arr);
console.log(firstElement);



//  3.

person = {
  name: "Rahul shah",
  age: 21,

  city: "Kathmandu",
};
function getPersonInfo(person) {
  return `Name: ${person.name}, Age: ${person.age}, City ${person.city}`;
}
const personInfo = getPersonInfo(person);

console.log(personInfo);



// 4.
function toUpperCase(strF){
    return strF.toUpperCase();
}
const strF = "my name is rahul shah!";
const upperCaseStr = toUpperCase(strF);
console.log(upperCaseStr);



// 5.
function multiply(a,b){
    return a*b;
}
let multiplyResult = multiply(5,3);
console.log(multiplyResult);



// 6.
function getLastElement (arr1){
    return arr1[arr1.length-1];
}
let arr1 =[1,2,3,4,5,6,7];
let lastElement = getLastElement(arr);
console.log(lastElement);


// 7.
book ={
    title:"javascript",
    author:"rahul shah",
    year : 30-05-2024
}
function getBookTitle(book){
    return book.title ;

}
let bookTitle = getBookTitle(book);
console.log(bookTitle);


// 8.
function reverseString(str){
    return str.split("").reverse().join();
}
let str =" Rahul ";
let reverseStr = reverseString(str);
console.log(reverseStr);


// 9.
function isEven(number){
    if(number%2==0){
        return true;
    }else{
        return false;
    }
}
let number = 10;
let isEvenNumber = isEven(number);
console.log(isEvenNumber);


// 10.

function sumArray(arr2) {
  let sum = 0;
  for (let i = 0; i < arr2.length; i++) {
    sum = sum + arr2[i];
  }
  return sum;
}
let arr2 = [1, 2, 3, 4, 5];
let sumOfArray = sumArray(arr2);
console.log(sumOfArray);


// 11.
car = {
  model: "BMW",
  year: Date(),
};
function getCarModel(car) {
  return car.year;
}
let carModel = getCarModel(car);
console.log(carModel);



12.
function concatenatesStrings(strA, strB) {
  return strA.concat(strB);
}
let strA = "Hello";
let strB = "World";
let concatStr = concatenatesStrings(strA, strB);
console.log(concatStr);


13.

function square(a) {
  return a * a;
}
let a = 5;
let squareOfNumber = square(a);
console.log(squareOfNumber);


14.

function findMax(arr3) {
  let max = arr3[0];
  for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] > max) {
      max = arr3[i];
    }
  }
  return max;
}
const arr3 = [1, 2, 3, 4, 5, 5, 6, 7];
let maxNumber = findMax(arr3);
console.log(maxNumber);



15.
student={
    firstName:"Rahul",
    lastName:"shah",
    grade: "A+"
}
function getFullName(student){
    return `${student.firstName} ${student.lastName}`;
}
let getName = getFullName(student);
console.log(getName);


// 16.
function greet(name) {
  return `Hello ${name}!`;
}
let name = "Rahul";
let greetName = greet(name);
console.log(greetName);


// 17.
function doubleArray(arr4) {
  let newArr = [];
  for (let i = 0; i < arr4.length; i++) {
    newArr.push(arr4[i] * 2);
  }
  return newArr;
}
let arr4 = [1, 2, 3, 4, 5, 6, 7];
let doubleOfArray = doubleArray(arr4);
console.log(doubleOfArray);



// 18.
movie = {
  title: "Avengers: Endgame",
  director: " I don't know",
  releaseYear: 2019,
};
function getmoviesName(movie) {
  return `Movies Name: ${movie.title}`;
}
let movieName = getmoviesName(movie);
console.log(movieName);



19;
function getLength(strC) {
  return strC.length;
}
let strC = "Rahul";
let strlength = getLength(strC);
console.log(strlength);



// 20.
function subtract(c, b) {
  return c - b;
}
let c = 10;
let b = 5;
let subResult = subtract(5, 5);
console.log(subResult);


// 21.
function mergeArrays(arr5, arr6) {
  let newArr = [...arr5, ...arr6];
  return newArr;
}

let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr6 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let mergeArr = mergeArrays(arr5, arr6);
console.log(mergeArr);


// 22.
function divide(a1, b1) {
  return a / b;
}
let a1 = 10;
let b1 = 5;
let divResult = divide(10, 5);
console.log(divResult);



// 23.
function endsWith(strD, charA) {
  return strD.endsWith(charA);
}
let strD = "Rahul";
let charA = "l";
let endsWithResult = endsWith(strD, charA);
console.log(endsWithResult);


// 24. 

function divide(a2, b2) {
  return a2 / b2;
}

let divResult1 = divide(10, 3);
console.log(divResult1);



// 25.
function removeFirstElement(arr7) {
  return arr7.shift();
}
let arr7 = [1, 2, 3, 4, 5];
let removeFirstElementResult = removeFirstElement(arr7);
console.log(removeFirstElementResult);


// 26.
album = {
  title: "The Dark Side of the Moon",
  artist: "Pink Floyd",
  tracks: [
    "Speak to Me",
    "Breathe",
    "On the Run",
    "Time",
    "The Great Gig in the Sky",
    "Money",
    "Us and Them",
    "Any Colour You Like",
    "Brain Damage",
    "Eclipse",
  ],
};
function getTrackCount(album) {
  return album.tracks.length;
}
let getTrackCountResult = getTrackCount(album);
console.log(getTrackCountResult);



// 27.
function startsWith(strE, charB) {
  return strE.startsWith(charB);
}
let strE = "Rahul";
let charB = "R";
let startsWithResult = startsWith(strE, charB);
console.log(startsWithResult);


// 28.
function isPositive(num3){
    return num3 > 0;
}
let numResult = isPositive(3);
console.log(numResult);



// 29

function countElements(arr8){
    return arr8.length;
}
let arr8 = [1, 2, 3, 4, 5];
let countElementsResult = countElements(arr8);
console.log(countElementsResult);


// 30
game={
    name:"new game",
    genre:" Action",
    platforms:["mobile","web","PC"]
}
function getPlatforms(game){
    return game.platforms;
}
let getPlatformsResult = getPlatforms(game);
console.log(getPlatformsResult);