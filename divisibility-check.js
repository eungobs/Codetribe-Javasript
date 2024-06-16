// Divisibility Check using if else statements
// Define a function to check divisibility
function checkDivisibility(number) {
    if (number % 2 === 0 && number % 3 === 0) {
        console.log("Divisible by both.");
    } else if (number % 2 === 0) {
        console.log("Divisible by 2.");
    } else if (number % 3 === 0) {
        console.log("Divisible by 3.");
    } else {
        console.log("Not divisible by 2 or 3.");
    }
}
