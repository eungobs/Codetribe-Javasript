// Temperature check using switch statements
// Function to check temperature
function checkTemperatureSwitch(temp) {
    switch (true) {
        case (temp < 0):
            console.log("It's freezing!");
            break;
        case (temp >= 0 && temp <= 15):
            console.log("It's cold.");
            break;
        case (temp >= 16 && temp <= 25):
            console.log("It's mild.");
            break;
        default:
            console.log("It's warm.");
            break;
    }
}
