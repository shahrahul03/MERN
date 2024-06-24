// find,map
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const findNumber = numbers.find((number) => number > 5);
// console.log(findNumber);
// const findNumber = numbers.find((numbers)=>{
//     return numbers > 5;
//     });
// console.log(findNumber);

// filter
// const numArr = [1, 2, 3, 4, 5, 6,7];
// const filterNum = numArr.filter((num) => num > 5);
// const filterNum1 = numArr.filter((num)=> num<5);
// console.log(filterNum);
// console.log(filterNum1);

// map
// const numArr1 = [1, 2, 3, 4, 5, 6, 7];
// const mapNum = numArr1.map((num) => num * 2);
// console.log(mapNum);

//  reduce method
const numArr2 = [1, 2, 3, 4, 5];
const reduceNum = numArr2.reduce((acc, cur) => acc + cur, 0);
console.log(reduceNum);

const numArr3 = [1, 2, 3, 4, 5];
const reduceNum1 = numArr3.reduce((a, b) => b - a, 0);
console.log(reduceNum1);
