// Comparison operators to compare two numbers
let num1 = 8;
let num2 = 12;

let greaterThan = num1 > num2;
let lessThanOrEqual = num1 <= num2;
let equalTo = num1 === num2;
let notEqualTo = num1 !== num2;

console.log("Is num1 greater than num2?", greaterThan);    // Output: false
console.log("Is num1 less than or equal to num2?", lessThanOrEqual);   // Output: true
console.log("Is num1 equal to num2?", equalTo);    // Output: false
console.log("Is num1 not equal to num2?", notEqualTo);   // Output: true

// Logical operations with boolean variables
let a = true;
let b = false;

let andResult = a && b;
let orResult = a || b;
let notResult = !a;

console.log("a AND b:", andResult);   // Output: false
console.log("a OR b:", orResult);    // Output: true
console.log("NOT a:", notResult);    // Output: false

// Assignment operators with variable p
let p = 10;

p += 5;   // Equivalent to p = p + 5
console.log("p after += 5:", p);   // Output: 15

p -= 3;   // Equivalent to p = p - 3
console.log("p after -= 3:", p);   // Output: 12

p *= 2;   // Equivalent to p = p * 2
console.log("p after *= 2:", p);   // Output: 24

p /= 4;   // Equivalent to p = p / 4
console.log("p after /= 4:", p);   // Output: 6

p %= 5;   // Equivalent to p = p % 5
console.log("p after %= 5:", p);   // Output: 1
