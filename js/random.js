function generateRandomNumberAirCombat() {
    var number = Math.floor(Math.random() * 13) + 1;
    var decimal = Math.random().toString().split(".")[1].slice(0, 1);
    var validDecimals = ['0', '3', '7'];
    if (!validDecimals.includes(decimal)) {
        decimal = validDecimals[Math.floor(Math.random() * validDecimals.length)];
    }
    document.getElementById("randomNumberAirCombat").innerText = number + '.' + decimal;
}
function generateRandomNumberPlus() {
    var number;
    if (Math.random() < 0.8) {
        number = Math.floor(Math.random() * 7) + 7;
    } else {
        number = Math.floor(Math.random() * 6) + 1;
    }
    var decimal = Math.random().toString().split(".")[1].slice(0, 1);
    var validDecimals = ['0', '3', '7'];
    if (!validDecimals.includes(decimal)) {
        decimal = validDecimals[Math.floor(Math.random() * validDecimals.length)];
    }
    document.getElementById("randomNumberplus").innerText = number + '.' + decimal;
}
function generateRandomNumberGround() {
    var number = Math.floor(Math.random() * 12) + 1;
    var decimal = Math.random().toString().split(".")[1].slice(0, 1);
    var validDecimals = ['0', '3', '7'];
    if (!validDecimals.includes(decimal)) {
        decimal = validDecimals[Math.floor(Math.random() * validDecimals.length)];
    }
    var randomNumber = number + '.' + decimal;
    if (randomNumber > 12.3) {
        randomNumber = 12.3;
    }
    document.getElementById("randomNumberGround").innerText = randomNumber;
}
function generateRandomNumberSeaBattle() {
    var number = Math.floor(Math.random() * 7) + 1;
    var decimal = Math.random().toString().split(".")[1].slice(0, 1);
    var validDecimals = ['0', '3', '7'];
    if (!validDecimals.includes(decimal)) {
        decimal = validDecimals[Math.floor(Math.random() * validDecimals.length)];
    }
    document.getElementById("randomNumberSeaBattle").innerText = number + '.' + decimal;
}