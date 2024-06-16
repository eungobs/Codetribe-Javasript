// Do While loops
// 1. Print numbers from 1 to 10.
console.log("Numbers from 1 to 10:");
let num1 = 1;
do {
    console.log(num1);
    num1++;
} while (num1 <= 10);

// 2. Calculate the sum of all numbers from 1 to 100 and print the result.
let sum = 0;
let num2 = 1;
do {
    sum += num2;
    num2++;
} while (num2 <= 100);
console.log("\nSum of numbers from 1 to 100:", sum);

// 3. Prompt the user to enter a number greater than 10. Keep asking until they enter a valid number.
let userNumber;
do {
    userNumber = parseInt(prompt("Enter a number greater than 10:"));
} while (isNaN(userNumber) || userNumber <= 10);

console.log("\nValid number entered:", userNumber);

// 4. Create a simple guessing game where the user must guess a number between 1 and 10.
const correctNumber = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
let guessedNumber;
do {
    guessedNumber = parseInt(prompt("Guess the number between 1 and 10:"));
    if (guessedNumber === correctNumber) {
        console.log("Congratulations! You guessed the correct number:", correctNumber);
    } else {
        console.log("Incorrect guess. Try again!");
    }
} while (guessedNumber !== correctNumber);
