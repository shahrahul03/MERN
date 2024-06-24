//  Create two variables, one for your name and another for your age. Print a sentence
// combining those variables.

let name = "Rahul";
let age = 24;
console.log("My name is "+ name +"and I am " + age + " years old.");

//  Assign the value 10 to a variable. Then multiply that variable by itself and store the
// result in another variable. Print the final value.
let num = 10;
let Multiply = num * num;
console.log(num +" multiply is " + Multiply);

//  Write code to check if the character stored in a variable is uppercase or lowercase.
// Print &quot;uppercase&quot; or &quot;lowercase&quot; accordingly. (Hint: Use character codes)

let char = "R";
if (char >= "R" && char <= "Z") {
    console.log("uppercase");
}
else if(char >= "r" && char <= "z"){
    console.log("lowercase");
}
else{
    console.log("invalid");
}
//  Declare two variables with numeric values. Add them together and print the sum. Then,
// subtract the smaller number from the larger number and store the difference in a new
// variable. Print the difference.
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
console.log("The sum of two number is " + sum);
let diff = Math.max(num1, num2) - Math.min(num1, num2);
console.log("the diff is " + diff);

//  Imagine you have a variable storing a product price. Write code to apply a 10%
// discount and print the discounted price.
let price = 100;
let discount = 0.1;
let dicountPrice = price *(1-discount);
console.log("Disscount price is " + dicountPrice.toFixed(3));

