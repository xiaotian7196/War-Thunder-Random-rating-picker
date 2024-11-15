// 随机数主文件
// xiaotian7196
// 2024.11.7

// 定义一个通用的函数来生成随机数
function generateRandomNumber(min, max, validDecimals) {
    var number = Math.floor(Math.random() * (max - min + 1)) + min;
    var decimal = Math.random().toString().split(".")[1].slice(0, 1);
    if (!validDecimals.includes(decimal)) {
        decimal = validDecimals[Math.floor(Math.random() * validDecimals.length)];
    }
    return `${number}.${decimal}`;
}

// 定义一个通用的函数来显示随机图片
function displayRandomImage(imageId) {
    var img = document.getElementById(imageId);
    var randomIndex = Math.floor(Math.random() * images.length);
    img.src = images[randomIndex];
}

// 随机数和图片的组合函数
function generateAndDisplayRandomNumberAndImage(elementId, min, max, validDecimals, imageId) {
    document.getElementById(elementId).innerText = generateRandomNumber(min, max, validDecimals);
    displayRandomImage(imageId);
}

// 有效的小数位
var validDecimals = ['0', '3', '7'];

// 图片数组
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

// 根据不同的战场生成随机数和显示随机图片
function generateRandomNumberAirCombat() {
    generateAndDisplayRandomNumberAndImage("randomNumberAirCombat", 1, 13, validDecimals, "image1");
}

function generateRandomNumberPlus() {
    var number;
    if (Math.random() < 0.8) {
        number = Math.floor(Math.random() * 7) + 7;
    } else {
        number = Math.floor(Math.random() * 6) + 1;
    }
    var randomNumber = `${number}.${validDecimals[Math.floor(Math.random() * validDecimals.length)]}`;
    document.getElementById("randomNumberplus").innerText = randomNumber;
    displayRandomImage("image3");
}

function generateRandomNumberGround() {
    var randomNumber = generateRandomNumber(1, 12, validDecimals);
    if (parseFloat(randomNumber) > 12.3) {
        randomNumber = "12.3";
    }
    document.getElementById("randomNumberGround").innerText = randomNumber;
    displayRandomImage("image");
}

function generateRandomNumberSeaBattle() {
    generateAndDisplayRandomNumberAndImage("randomNumberSeaBattle", 1, 7, validDecimals, "image2");
}


function randomImageOnly() {
    displayRandomImage("image");
    displayRandomImage("image1");
    displayRandomImage("image2");
    displayRandomImage("image3");
}

