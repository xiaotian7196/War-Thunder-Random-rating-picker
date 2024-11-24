//--------
//随机数主文件
//xiaotian7196
//2024.11.7
//--------
let images = [
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

//--空战--
function generateRandomNumberAirCombat() {
    let number = Math.floor(Math.random() * 13) + 1;
    let decimal = dec();
    document.getElementById("randomNumberAirCombat").innerText = `${number}.${decimal}`;
    let img = document.getElementById('image1');
    let randomIndex = Math.floor(Math.random() * images.length);
    img.src = images[randomIndex];
}

//--更高级的随机数--
function generateRandomNumberPlus() {
    let number;
    if (Math.random() < 0.8) {
        number = Math.floor(Math.random() * 7) + 7;
    } else {
        number = Math.floor(Math.random() * 6) + 1;
    }
    let decimal = dec();
    document.getElementById("randomNumberPlus").innerText = `${number}.${decimal}`;
    let img = document.getElementById('image3');
    let randomIndex = Math.floor(Math.random() * images.length);
    img.src = images[randomIndex];
}

//--陆战--
function generateRandomNumberGround() {
    let number = Math.floor(Math.random() * 12) + 1;
    let decimal = dec();
    let randomNumber = `${number}.${decimal}`;
    if (randomNumber > 12.3) {
        randomNumber = 12.3;
    }
    document.getElementById("randomNumberGround").innerText = randomNumber;
    let img = document.getElementById('image');
    let randomIndex = Math.floor(Math.random() * images.length);
    img.src = images[randomIndex];
}

//--海战--
function generateRandomNumberSeaBattle() {
    let number = Math.floor(Math.random() * 7) + 1;
    let decimal = dec();
    document.getElementById("randomNumberSeaBattle").innerText = `${number}.${decimal}`;
    let img = document.getElementById('image2');
    let randomIndex = Math.floor(Math.random() * images.length);
    img.src = images[randomIndex];
}


function displayRandomImageGround() {
    let img = document.getElementById('image');
    let randomIndex = Math.floor(Math.random() * images.length);
    img.src = images[randomIndex];
}

function displayRandomImageAirCombat() {
    let img = document.getElementById('image1');
    let randomIndex = Math.floor(Math.random() * images.length);
    img.src = images[randomIndex];
}

function displayRandomImageSeaBattle() {
    let img = document.getElementById('image2');
    let randomIndex = Math.floor(Math.random() * images.length);
    img.src = images[randomIndex];
}

function displayRandomImagePlus() {
    let img = document.getElementById('image3');
    let randomIndex = Math.floor(Math.random() * images.length);
    img.src = images[randomIndex];
}

function dec() {
    let decimal = Math.random().toString().split(".")[1].slice(0, 1);
    let validDecimals = ['0', '3', '7'];
    if (!validDecimals.includes(decimal)) {
        decimal = validDecimals[Math.floor(Math.random() * validDecimals.length)];
    }
    return decimal;
}