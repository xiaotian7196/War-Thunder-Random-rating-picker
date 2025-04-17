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

//-------------自定义范围-------------
let customSettings = {
    min: 1.0,
    max: 13.0,
    highChance: false
};

// 生成小数部分(0,3,7)
function dec() {
    const validDecimals = ['0', '3', '7'];
    return validDecimals[Math.floor(Math.random() * validDecimals.length)];
}

// 验证小数部分
function validateDecimal(input) {
    const value = parseFloat(input.value);
    if (isNaN(value)) return;

    const decimalPart = Math.round((value - Math.floor(value)) * 10);
    const validDecimals = [0, 3, 7];

    if (!validDecimals.includes(decimalPart)) {
        const floorValue = Math.floor(value);
        const adjustedValue = floorValue + findClosestDecimal(decimalPart) / 10;
        input.value = adjustedValue.toFixed(1);
    }
}

// 找最接近的有效小数
function findClosestDecimal(decimal) {
    const validDecimals = [0, 3, 7];
    return validDecimals.reduce((prev, curr) => {
        return (Math.abs(curr - decimal) < Math.abs(prev - decimal) ? curr : prev);
    });
}

// 生成范围内的随机数
function generateInRange(min, max) {
    min = parseFloat(min);
    max = parseFloat(max);

    // 调整小数部分
    const adjustDecimal = (num) => {
        const decimal = Math.round((num - Math.floor(num)) * 10);
        if (![0, 3, 7].includes(decimal)) {
            return Math.floor(num) + findClosestDecimal(decimal) / 10;
        }
        return num;
    };

    min = adjustDecimal(min);
    max = adjustDecimal(max);

    const intMin = Math.floor(min);
    const intMax = Math.floor(max);
    const integerPart = Math.floor(Math.random() * (intMax - intMin + 1)) + intMin;
    const decimalPart = dec();

    let result = parseFloat(`${integerPart}.${decimalPart}`);
    if (result < min) result = min;
    if (result > max) result = max;

    return result;
}

// 自定义范围生成函数
function generateCustomRandomNumber() {
    const min = parseFloat(document.getElementById('customMin').value);
    const max = parseFloat(document.getElementById('customMax').value);
    const highChance = document.getElementById('customHighChance').checked;

    if (isNaN(min) || isNaN(max) || min >= max) {
        alert('请输入有效的范围（最小值必须小于最大值）');
        return;
    }

    customSettings = {min, max, highChance};

    let randomNumber;
    if (highChance && max >= 7.0) {
        if (Math.random() < 0.8) {
            randomNumber = generateInRange(Math.max(min, 7.0), max);
        } else {
            randomNumber = generateInRange(min, Math.min(max, 6.9));
        }
    } else {
        randomNumber = generateInRange(min, max);
    }

    document.getElementById("randomNumberCustom").innerText = randomNumber.toFixed(1);

    const img = document.getElementById('image4');
    if (img.style.display !== 'none') {
        img.src = images[Math.floor(Math.random() * images.length)];
    }
}

//-------------陆空战-------------
function generateRandomNumberAirCombat() {
    let number = Math.floor(Math.random() * 13) + 1;
    let decimal = dec();
    document.getElementById("randomNumberAirCombat").innerText = `${number}.${decimal}`;
    let img = document.getElementById('image1');
    let randomIndex = Math.floor(Math.random() * images.length);
    img.src = images[randomIndex];
}


//-------------海战-------------
function generateRandomNumberSeaBattle() {
    let number = Math.floor(Math.random() * 7) + 1;
    let decimal = dec();
    document.getElementById("randomNumberSeaBattle").innerText = `${number}.${decimal}`;
    let img = document.getElementById('image2');
    let randomIndex = Math.floor(Math.random() * images.length);
    img.src = images[randomIndex];
}

//-------------随机图片-------------
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


