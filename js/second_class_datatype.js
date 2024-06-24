// DataTypes 
// 1. primmitive dataypes
// -string
// -number
// -boolean
// -null : 
// -undefined : 
// 2. non primmitive dataypes
// -object :
// -array :
// -function :
// -date :
// -regx :
// -symbol :
// -map :
// -set :
// -weakmap :
// -weakset :
// -bigint :
// -error :
// -promise :
//3.special datatype
// -NaN :
// -Infinity :


let Full_Name = "Rahul shah";
console.log(typeof Full_Name);

let history = " history of javascript";
let nan = history/2;
console.log(nan);

let number = 24;
let NumDataType = typeof number
console.log(NumDataType);

// Types of casting
// 1. Implicit casting
// 2. Explicit casting

let a =10;
let conversion = String(a);
console.log(conversion);
console.log(typeof conversion);

let c = "10"
console.log(typeof c);
let conversion1 = Number(c);
console.log(typeof conversion1);

//1 Arithmetic operators 
// + : addition
// - : subtraction
// * : multiplication
// / : division
// % : modulus
// ** : exponentiation
// increment: ++
// decrement: --
//2 Assignment operators
// = : assignment
// += : addition assignment
// -= : subtraction assignment
// *= : multiplication assignment
// /= : division assignment
// %= : modulus assignment
// **= : exponentiation assignment
//3 Comparison operators
// == : equality
// != : inequality
// === : strict equality
// !== : strict inequality
// > : greater than
// < : less than
// >= : greater than or equal to
// <= : less than or equal to
//logical operators 
// && : and
// || : or
// ! : not
// conditional operators 
// ? : ternary operator
// 4 bitwise operators 
// & : bitwise and
// | : bitwise or
// ^ : bitwise xor
// ~ : bitwise not
// << : left shift
// >> : right shift

const age1 = 26;
const beverage = age1 >= 21 ? "Beer" : "Juice";
const beverage1 = age1 <= 21 ? "Beer" : "Juice";
console.log(beverage); // "Beer"
console.log(beverage1); // "Juice"


console.log(3**3);

console.log(4%5); // modules 

let Name = "rahul";
let concat = Name - "shah"; // /*- hudaina only add is can be done
console.log(concat);
let concat1 = Name + " kumar"
console.log(concat1);

let numllResult = a**2;
console.log(numllResult);

let d =5;
d++;
d--;
d+= 3;
d = d+3;
console.log(d);

let e = "10";
let f= 10;
console.log(e===f); 
g = Number(e)
console.log(g===f);
