//Question 1
let password = "Rahul_kumar_shah";
if (password.length >= 12) {
  console.log("Strong Password");
} else if (password.length <= 12 && password.length >= 8) {
  console.log("Medium Password");
} else {
  console.log("Weak Password");
}

//Question 2
let char = "i";
if (
  char == "a" ||
  char == "e" ||
  char == "i" ||
  char == "o" ||
  char == "u" ||
  char == "A" ||
  char == "E" ||
  char == "I" ||
  char == "O" ||
  char == "U"
) {
  console.log("Vowel");
} else {
  console.log("Consonant");
}

// Question 3
let guess = 6;
const SecretNumber = Math.floor(Math.random() * 10) + 1;
if (guess === SecretNumber) {
  console.log("You guessed it right! The secret number is " + SecretNumber);
} else if (guess < SecretNumber) {
  console.log("Guess higher number!");
} else {
  console.log("Guess lower number!");
}

//input form user
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const SecretNumber1 = Math.floor(Math.random() * 10) + 1;

rl.question("Guess the secret number (between 1 and 10): ", (input) => {
  let guess1 = parseInt(input, 10);
  if (isNaN(guess1)) {
    console.log("Please enter a valid number!");
  } else if (guess1 === SecretNumber1) {
    console.log("You guessed it right! The secret number is " + SecretNumber1);
  } else if (guess1 < SecretNumber1) {
    console.log("Guess a higher number!");
  } else {
    console.log("Guess a lower number!");
  }
  rl.close();
});

//Question 4
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the product price: ", (priceInput) => {
  const price = parseFloat(priceInput);
  if (isNaN(price) || price < 0) {
    console.log("Please enter a valid positive number for the price.");
    rl.close();
    return;
  }

  rl.question("Enter the tax rate (e.g., for 8% enter 8): ", (taxRateInput) => {
    const taxRate = parseFloat(taxRateInput);
    if (isNaN(taxRate) || taxRate < 0) {
      console.log("Please enter a valid positive number for the tax rate.");
      rl.close();
      return;
    }

    const finalPrice = price + price * (taxRate / 100);
    console.log(`The final price with tax is: Rs ${finalPrice.toFixed(2)}`);

    rl.close();
  });
});

// Question 5
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the first number: ", (num1Input) => {
  const num1 = parseFloat(num1Input);
  if (isNaN(num1)) {
    console.log("Please enter a valid number for the first input.");
    rl.close();
    return;
  }

  rl.question("Enter the second number: ", (num2Input) => {
    const num2 = parseFloat(num2Input);
    if (isNaN(num2)) {
      console.log("Please enter a valid number for the second input.");
      rl.close();
      return;
    }

    rl.question("Enter an operator (+, -, *, /): ", (operator) => {
      let result;
      if (operator === "+") {
        result = num1 + num2;
      } else if (operator === "-") {
        result = num1 - num2;
      } else if (operator === "*") {
        result = num1 * num2;
      } else if (operator === "/") {
        if (num2 === 0) {
          console.log("Division by zero is not allowed.");
          rl.close();
          return;
        }
        result = num1 / num2;
      } else {
        console.log("Invalid operator. Please use +, -, *, or /.");
        rl.close();
        return;
      }

      console.log(`The result is: ${result}`);
      rl.close();
    });
  });
});

// Question6
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your age: ", (ageInput) => {
  const age = parseInt(ageInput, 10);
  if (isNaN(age) || age < 0) {
    console.log("Please enter a valid positive age.");
    rl.close();
    return;
  }

  let genre;
  switch (true) {
    case age >= 0 && age <= 12:
      genre = "animation";
      break;
    case age >= 13 && age <= 17:
      genre = "action";
      break;
    case age >= 18 && age <= 64:
      genre = "drama";
      break;
    case age >= 65:
      genre = "documentary";
      break;
    default:
      genre = "undefined";
  }

  console.log(`We recommend watching a ${genre} movie.`);
  rl.close();
});

// Question7
const date = new Date("2024-05-22");

const day = date.getDay();

if (day === 0 || day === 6) {
  console.log("The given date falls on a weekend.");
} else {
  console.log("The given date falls on a weekday.");
}

// Question8
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number: ", (numInput) => {
  const num = parseFloat(numInput);
  if (isNaN(num)) {
    console.log("Please enter a valid number.");
  } else if (num > 0) {
    console.log("The number is positive.");
  } else if (num === 0) {
    console.log("The number is zero.");
  } else {
    console.log("The number is negative.");
  }
  rl.close();
});

// Question9
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number: ", (numInput) => {
  const num = parseInt(numInput, 10);
  if (isNaN(num)) {
    console.log("Please enter a valid number.");
  } else if (num % 3 === 0 && num % 5 === 0) {
    console.log("The number is divisible by both 3 and 5.");
  } else if (num % 3 === 0) {
    console.log("The number is divisible by 3.");
  } else if (num % 5 === 0) {
    console.log("The number is divisible by 5.");
  } else {
    console.log("The number is not divisible by 3 or 5.");
  }
  rl.close();
});

//Question10
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the first number: ", (num1Input) => {
  const num1 = parseInt(num1Input, 10);
  if (isNaN(num1)) {
    console.log("Please enter a valid number for the first input.");
    rl.close();
    return;
  }

  rl.question("Enter the second number: ", (num2Input) => {
    const num2 = parseInt(num2Input, 10);
    if (isNaN(num2)) {
      console.log("Please enter a valid number for the second input.");
      rl.close();
      return;
    }

    const sum = num1 + num2;
    if (sum % 2 === 0) {
      console.log("The sum is even.");
    } else {
      console.log("The sum is odd.");
    }

    rl.close();
  });
});
