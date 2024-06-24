// for (let i = 1; i <= 10; i++) {
//     if (i==5){
//         continue;
//     }
//   console.log(i);
// }

// for (let j = 1; j<=10; j++){
//     if (j ==5 || j ==6 || j==7 ){
//         continue;
//     }
//     console.log(j);
// }
// while loop it is used for undefind range
// let i =1;
// while (i<=10){
//     if (i ==5){
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }

// do while loop
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// let j = 1;
// do{
//     console.log(j);
//     j+=2;
// }while(j<=10);

// classwork
// using while loop print even number
let i = 1;
while (i <= 10) {
  if (i % 2 == 0) {
    console.log(i);
  }
  i++;
}

// sum of numbers from 1 to 10
let sum = 0;

for (let j = 1; j <= 10; j++) {
  sum += j;

}
console.log(sum);

// // using while loop, factorial of a given number
let k = 1;
let fact = 1;
while (k <= 5) {
  fact *= k;
  k++;
}
console.log(fact);

// for loop, square of numbers from 1 to 5
for (let l = 1; l <= 5; l++) {
  console.log(l * l);
}

//  while loop, cube of numbers from 1 to 5
let m = 1;
while (m <= 5) {
  console.log(m * m * m);
  m++;
}

// for loop to iterate through an array of names and print each name
let names = ["Rahul", "Ramesh", "sudarsan", "kishor"];
for (let i = 0; i < names.length; i++) {
      console.log(names[i]);
    }

// while loop, find the sum of elements in an array of number
let numbers = [1, 2, 3, 4, 5];
let sum1 = 0;
let m = 0;
while (m < numbers.length) {
    sum1 += numbers[m];
    m++;
    }
    console.log(sum1);
// factorial of 5 num
let r = 5;
let fac =1;
while (r >= 0) {
    if ( r == 0){
        fac *=1;
    }
    else{
        fac =fac*r;
    }
    r--;
}
console.log(fac);
//for loop, prints elements of array in reverse order
let names = ["Rahul", "Ramesh", "sudarsan", "kishor"];
for (let i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}

// while loop, largest number in any array
let numbers = [1, 2, 3, 4, 5];
let max = numbers[0];
let m = 1;
while (m < numbers.length) {
  if (numbers[m] > max) {
    max = numbers[m];
  }
}
m++;
console.log(max);

// for loop to print the multiplication table of a given number (eg 5 up to 10)
let num = 5;
for (let i = 1; i <= 10; i++) {
    console.log(num + " * " + i + " = " + num * i);
    }
// while loop, largest element in an array of numbers
let numbers = [1, 2, 3, 4, 5];
let max = numbers[0];
let m = 1;
while (m < numbers.length) {
    if (numbers[m] > max) {
        max = numbers[m];
        }
    }m++;
    console.log(max);
//  while loop, find the number of digits in a giben number(eg 1234)
let num = 1234;
let count = 0;
while (num > 0) {
    num = num / 10;
    count++;
    }
    console.log(count);
// for loop, to calculate the sum of all odd numbers from 1 to 50
let sum = 0;
for (let i = 1; i <= 50; i++) {
    if (i % 2 != 0) {
        sum += i;
        }
    }
    console.log(sum);
// while loop print the numbers from 1 to 100,skip the multiples of 5
let num = 1;
while (num <= 100) {
    if (num % 5 == 0) {
        num++;
        continue;
        }
    console.log(num);
    num++;
    }
// for loop, print the reverse of a given string eg "hello"
let str = "hello";
for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
    }
// while loop, find the factorial of a given number eg 7
let num = 7;
let fact = 1;
while (num > 0) {
    fact = fact * num;
    num--;
    }
    console.log(fact);
// while loop, find the sum of all elements in a multidimensional array of numbers
let arr = [[1, 2, 3], [4, 5, 6], [7, 8,9]];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
        }
    }
    console.log(sum);
