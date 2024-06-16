// loops

// Print numbers from 1 to 10.
console.log("Numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Print all even numbers between 1 and 20.
console.log("\nEven numbers between 1 and 20:");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Calculate the sum of all numbers from 1 to 100 and print the result.
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("\nSum of numbers from 1 to 100:", sum);

// const numbers = [1, 2, 3, 4, 5]. Given the array of numbers, print each element to the console.
const numbers1 = [1, 2, 3, 4, 5];
console.log("\nElements of the array numbers1:");
for (let i = 0; i < numbers1.length; i++) {
    console.log(numbers1[i]);
}

// const numbers = [3, 7, 2, 5, 10, 6]. Given the array of numbers, find and print the largest number.
const numbers2 = [3, 7, 2, 5, 10, 6];
let largestNumber = numbers2[0]; // Initialize largestNumber with the first element of the array
for (let i = 1; i < numbers2.length; i++) {
    if (numbers2[i] > largestNumber) {
        largestNumber = numbers2[i];
    }
}
console.log("\nLargest number in numbers2:", largestNumber);
