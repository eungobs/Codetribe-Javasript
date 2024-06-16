// Divisibility Check using switch statements
// Define a function to check divisibility
function checkDivisibilitySwitch(number) {
    switch (true) {
        case number % 2 === 0 && number % 3 === 0:
            console.log("Divisible by both.");
            break;
        case number % 2 === 0:
            console.log("Divisible by 2.");
            break;
        case number % 3 === 0:
            console.log("Divisible by 3.");
            break;
        default:
            console.log("Not divisible by 2 or 3.");
            break;
    }
}
