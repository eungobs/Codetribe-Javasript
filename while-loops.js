// While loops
// Print numbers from 1 to 10.
console.log("Numbers from 1 to 10:");
let counter1 = 1;
while (counter1 <= 10) {
    console.log(counter1);
    counter1++;
}

// Print all even numbers between 1 and 20.
console.log("\nEven numbers between 1 and 20:");
let counter2 = 1;
while (counter2 <= 20) {
    if (counter2 % 2 === 0) {
        console.log(counter2);
    }
    counter2++;
}

// Calculate the sum of all numbers from 1 to 100 and print the result.
let sum = 0;
let counter3 = 1;
while (counter3 <= 100) {
    sum += counter3;
    counter3++;
}
console.log("\nSum of numbers from 1 to 100:", sum);

// Print all multiples of 5 less than 50.
console.log("\nMultiples of 5 less than 50:");
let counter4 = 1;
while (counter4 < 50) {
    if (counter4 % 5 === 0) {
        console.log(counter4);
    }
    counter4++;
}
