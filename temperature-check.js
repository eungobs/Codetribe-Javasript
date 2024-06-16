// Temperature check using if else statements
// Function to check temperature
function checkTemperature(temp) {
    if (temp < 0) {
        console.log("It's freezing!");
    } else if (temp >= 0 && temp <= 15) {
        console.log("It's cold.");
    } else if (temp >= 16 && temp <= 25) {
        console.log("It's mild.");
    } else {
        console.log("It's warm.");
    }
}
