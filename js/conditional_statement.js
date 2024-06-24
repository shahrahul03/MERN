let age = 23;
if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

// calulate grade based on marks
let marks = 56;
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 80) {
  console.log("Grade B");
} else if (marks >= 70) {
  console.log("Grade C");
} else if (marks >= 60) {
  console.log("Grade D");
} else {
  console.log("Fail");
}

// calculate bmi
let height = 1.5;
let weight = 65;

if (!isNaN(height) && height > 0 && !isNaN(weight) && weight > 0) {
  let bmi = weight / (height * height);
  console.log("Your BMI is " + bmi.toFixed(2));

  if (bmi < 18.5) {
    console.log("Underweight");
  } else if (bmi <= 24.9) {
    console.log("Normal Weight");
  } else if (bmi <= 29.9) {
    console.log("Overweight");
  } else {
    console.log("Obesity");
  }
} else {
  console.log("Please enter valid positive numbers for height and weight.");
}

// switch case
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("Invalid Day");
    break;
}

// switch case bmi calculate
let height1 = 1.5;
let weight1 = 65;
let bmi1 = weight1 / (height1 * height1);
switch (true) {
  case bmi1 < 18.5:
    console.log("Underweight");
    break;
  case bmi1 <= 24.9:
    console.log("Normal Weight");
    break;
  case bmi1 <= 29.9:
    console.log("Overweight");
    break;
  case 4:
    console.log("Obesity");
    break;
}

// positive or not check the number
let a = 5;
let b = -7;
if (a > 0 && b > 0) {
  console.log("Both are positive numbers");
} else if (a > 0 || b > 0) {
  console.log("One of them is positive number");
} else {
  console.log("Both are negative numbers");
}

let c = 5;
if (c > 0) {
  console.log("Positive number", +c);
} else {
  console.log("Negative number", +c);
}

let d = -6;
switch (true) {
  case d > 0:
    console.log("Positive number", +d);
    break;
  case d < 0:
    console.log("Negative number", +d);
}

// eligible to vote
let age2 = 18;
let eligible = true;
if (age2 >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not Eligible to vote");
}

// string is longer than characters or not
let str = "Hello World";
let str1 = "Hello ";
if (str.length > str1.length) {
  console.log("String is longer than characters");
} else {
  console.log("String is shorter than characters");
}

// month switch case
let month = 3;
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default:
    console.log("Invalid month");
}

// find leap year
let year = 2000;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Leap year ");
} else {
  console.log("Not a leap year");
}

// month using if else
let month1 = 2;
if (month === 1) {
  console.log("January");
} else if (month1 === 2) {
  console.log("February");
} else if (month1 === 3) {
  console.log("March");
} else if (month1 === 4) {
  console.log("April");
} else if (month1 === 5) {
  console.log("May");
} else if (month1 === 6) {
  console.log("June");
} else if (month1 === 7) {
  console.log("July");
} else if (month1 === 8) {
  console.log("August");
} else if (month1 === 9) {
  console.log("September");
} else if (month1 === 10) {
  console.log("October");
} else if (month1 === 11) {
  console.log("November");
} else if (month1 === 12) {
  console.log("December");
} else {
  console.log("Invalid month");
}
