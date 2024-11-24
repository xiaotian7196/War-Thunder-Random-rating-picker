//

/*
 * 注意：本程序中的“随机”都是伪随机概念，以当前的天为种子。
 */
function random(dayseed, indexseed) {
    var n = dayseed % 11117;
    for (var i = 0; i < 100 + indexseed; i++) {
        n = n * n;
        n = n % 11117;   // 11117 是个质数
    }
    return n;
}

var today = new Date();
var iday = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();

var weeks = ["日", "一", "二", "三", "四", "五", "六"];
var directions = ["North", "Northeast", "East", "Southeast", "South", "Southwest", "West", "Northwest"];
var activities = [
    {name: "Play Soviet", good: "", bad: "", weekend: true},
    {name: "Play British", good: "", bad: "", weekend: true},
    {name: "Play American", good: "", bad: "", weekend: true},
    {name: "Play German", good: "", bad: "", weekend: true},
    {name: "Play Japanese", good: "", bad: "", weekend: true},
    {name: "Play Italian", good: "", bad: "", weekend: true},
    {name: "Play French", good: "", bad: "", weekend: true},
    {name: "Play Swedish", good: "", bad: "", weekend: true},
    {name: "Play Puma", good: "", bad: "", weekend: true},
    {name: "play free abrams", good: "", bad: "", weekend: true},
    {name: "land battle", good: "", bad: "", weekend: true},
    {name: "dogfight", good: "", bad: "", weekend: true},
    {name: "naval battle", good: "", bad: "", weekend: true},
    {name: "1 tap", good: "", bad: "", weekend: true},
    {name: "submit issue", good: "", bad: "", weekend: true},
    {name: "buy Golden Eagle", good: "", bad: "", weekend: true},
    {name: "buy Advanced Vehicles", good: "", bad: "", weekend: true},
    {name: "buy Premium Account", good: "", bad: "", weekend: true},
    {name: "Online in the night", good: "", bad: "", weekend: true},
    {name: "Online in the morning", good: "", bad: "", weekend: true},
    {name: "sign in", good: "", bad: "", weekend: true},
    {name: "initial match", good: "", bad: "", weekend: true},
    {name: "Cold war match", good: "", bad: "", weekend: true},
    {name: "Top match", good: "", bad: "", weekend: true},
    {name: "World War II match", good: "", bad: "", weekend: true}
];

var specials = [
    {date: 20140214, type: 'bad', name: '待在男（女）友身边', description: '脱团火葬场，入团保平安。'}
];

var tools = ["Eclipse写程序", "MSOffice写文档", "记事本写程序", "Windows8", "Linux", "MacOS", "IE", "Android设备", "iOS设备"];

var varNames = ["jieguo", "huodong", "pay", "expire", "zhangdan", "every", "free", "i1", "a", "virtual", "ad", "spider", "mima", "pass", "ui"];

var drinks = ["water", "tea", "hot coco", "coke", "Vodka", "coffee", "milk tea", "bubble tea", "lemon tea", "Meteor Latte", "Berry Fruit Tea", "Strawberry Milkshake", "Breath of Freshness Ice Cream", "Ice Cream Red Tea"];

function is_someday() {
    return today.getMonth() == 5 && today.getDate() == 4;
}

function getTodayString() {
    return "Today is " + today.getFullYear() + "." + (today.getMonth() + 1) + "." + today.getDate();
}

function star(num) {
    var result = "";
    var i = 0;
    while (i < num) {
        result += "★";
        i++;
    }
    while (i < 5) {
        result += "☆";
        i++;
    }
    return result;
}

// 生成今日运势
function pickTodaysLuck() {
    var _activities = filter(activities);

    var numGood = random(iday, 98) % 3 + 2;
    var numBad = random(iday, 87) % 3 + 2;
    var eventArr = pickRandomActivity(_activities, numGood + numBad);

    var specialSize = pickSpecials();

    for (var i = 0; i < numGood; i++) {
        addToGood(eventArr[i]);
    }

    for (var i = 0; i < numBad; i++) {
        addToBad(eventArr[numGood + i]);
    }
}

// 去掉一些不合今日的事件
function filter(activities) {
    var result = [];

    // 周末的话，只留下 weekend = true 的事件
    if (isWeekend()) {

        for (var i = 0; i < activities.length; i++) {
            if (activities[i].weekend) {
                result.push(activities[i]);
            }
        }

        return result;
    }

    return activities;
}

function isWeekend() {
    return today.getDay() == 0 || today.getDay() == 6;
}

// 添加预定义事件
function pickSpecials() {
    var specialSize = [0, 0];

    for (var i = 0; i < specials.length; i++) {
        var special = specials[i];

        if (iday == special.date) {
            if (special.type == 'good') {
                specialSize[0]++;
                addToGood({name: special.name, good: special.description});
            } else {
                specialSize[1]++;
                addToBad({name: special.name, bad: special.description});
            }
        }
    }

    return specialSize;
}

// 从 activities 中随机挑选 size 个
function pickRandomActivity(activities, size) {
    var picked_events = pickRandom(activities, size);

    for (var i = 0; i < picked_events.length; i++) {
        picked_events[i] = parse(picked_events[i]);
    }

    return picked_events;
}

// 从数组中随机挑选 size 个
function pickRandom(array, size) {
    var result = [];

    for (var i = 0; i < array.length; i++) {
        result.push(array[i]);
    }

    for (var j = 0; j < array.length - size; j++) {
        var index = random(iday, j) % result.length;
        result.splice(index, 1);
    }

    return result;
}

// 解析占位符并替换成随机内容
function parse(event) {
    var result = {name: event.name, good: event.good, bad: event.bad};  // clone

    if (result.name.indexOf('%v') != -1) {
        result.name = result.name.replace('%v', varNames[random(iday, 12) % varNames.length]);
    }

    if (result.name.indexOf('%t') != -1) {
        result.name = result.name.replace('%t', tools[random(iday, 11) % tools.length]);
    }

    if (result.name.indexOf('%l') != -1) {
        result.name = result.name.replace('%l', (random(iday, 12) % 247 + 30).toString());
    }

    return result;
}

// 添加到“宜”
function addToGood(event) {
    $('.good .awa1 ul').append('<li><div class="name">' + event.name + '</div></li>');
}

// 添加到“不宜”
function addToBad(event) {
    $('.bad .awa2 ul').append('<li><div class="name">' + event.name + '</div></li>');
}

$(function () {
    if (is_someday()) {
        document.body.className = 'someday'
    }
    ;
    $('.date').html(getTodayString());
    $('.direction_value').html(directions[random(iday, 2) % directions.length]);
    $('.drink_value').html(pickRandom(drinks, 2).join('，'));
    $('.goddes_value').html(star(random(iday, 6) % 5 + 1));
    pickTodaysLuck();
});

