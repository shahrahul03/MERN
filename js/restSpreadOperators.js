//                               spread operators
//  spread operators are used to spread the elements of an array or object into a function's arguments
// concatnating arrays 
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2]; 
console.log(arr3); 

// copying arrays 
const arr4 = [...arr1];
console.log(arr4);
// merging object 
const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const obj3 = {...obj1, ...obj2};
console.log(obj3);
//                                 Rest operators 
// rest operators are used to collect all remaining elements into an array
const arr =[1,2,3,4,5];
const first = arr[0];
const rest = arr.slice(4);
console.log(first, rest);

//     using rest operators
const arrA = [1, 2, 3, 4, 5];
const [first1,second, ...rest1] = arr;
console.log(first1,second, rest1);

//

function partyPlanner(mainDish,...sideDishes){
    console.log(`Main dish: ${mainDish}`);
    console.log(`Side dishes: ${sideDishes.join(', ')}`);

}
 partyPlanner("rice", "fufu", "pizza");
 


