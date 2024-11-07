//----------------//
//随机数主文件
//xiaotian7196
//2024.11.7
//----------------//
//--空战--
function generateRandomNumberAirCombat() {
    var number = Math.floor(Math.random() * 13) + 1;
    var decimal = Math.random().toString().split(".")[1].slice(0, 1);
    var validDecimals = ['0', '3', '7'];
    if (!validDecimals.includes(decimal)) {
        decimal = validDecimals[Math.floor(Math.random() * validDecimals.length)];
    }
    document.getElementById("randomNumberAirCombat").innerText = `${number}.${decimal}`;
    var img = document.getElementById('image1');
    var randomIndex = Math.floor(Math.random() * images.length);
    img.src = images[randomIndex];
}
//--更高级的随机数--
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
    document.getElementById("randomNumberplus").innerText = `${number}.${decimal}`;
    var img = document.getElementById('image3');
    var randomIndex = Math.floor(Math.random() * images.length);
    img.src = images[randomIndex];
}
//--陆战--
function generateRandomNumberGround() {
    var number = Math.floor(Math.random() * 12) + 1;
    var decimal = Math.random().toString().split(".")[1].slice(0, 1);
    var validDecimals = ['0', '3', '7'];
    if (!validDecimals.includes(decimal)) {
        decimal = validDecimals[Math.floor(Math.random() * validDecimals.length)];
    }
    var randomNumber = `${number}.${decimal}`;
    if (randomNumber > 12.3) {
        randomNumber = 12.3;
    }
    document.getElementById("randomNumberGround").innerText = randomNumber;
    var img = document.getElementById('image');
    var randomIndex = Math.floor(Math.random() * images.length);
    img.src = images[randomIndex];
}
//--海战--
function generateRandomNumberSeaBattle() {
    var number = Math.floor(Math.random() * 7) + 1;
    var decimal = Math.random().toString().split(".")[1].slice(0, 1);
    var validDecimals = ['0', '3', '7'];
    if (!validDecimals.includes(decimal)) {
        decimal = validDecimals[Math.floor(Math.random() * validDecimals.length)];
    }
    document.getElementById("randomNumberSeaBattle").innerText = `${number}.${decimal}`;
    var img = document.getElementById('image2');
    var randomIndex = Math.floor(Math.random() * images.length);
    img.src = images[randomIndex];
}
var images = [
    'img/image1.png',
    'img/image2.png',
    'img/image3.png',
    'img/image4.png',
    'img/image5.png',
    'img/image6.png',
    'img/image7.png',
    'img/image8.png',
    'img/image9.png',
    'img/image10.png'
];
function displayRandomImageGround() {
    var img = document.getElementById('image');
    var randomIndex = Math.floor(Math.random() * images.length);
    img.src = images[randomIndex];
}
function displayRandomImageAirCombat() {
    var img = document.getElementById('image1');
    var randomIndex = Math.floor(Math.random() * images.length);
    img.src = images[randomIndex];
}
function displayRandomImageSeaBattle() {
    var img = document.getElementById('image2');
    var randomIndex = Math.floor(Math.random() * images.length);
    img.src = images[randomIndex];
}
function displayRandomImagePlus() {
    var img = document.getElementById('image3');
    var randomIndex = Math.floor(Math.random() * images.length);
    img.src = images[randomIndex];
}