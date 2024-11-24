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
var directions = ["北方", "东北方", "东方", "东南方", "南方", "西南方", "西方", "西北方"];
var activities = [
    {name: "玩苏系", good: "", bad: "", weekend: true},
    {name: "玩冲系", good: "", bad: "", weekend: true},
    {name: "玩美系", good: "", bad: "", weekend: true},
    {name: "玩德系", good: "", bad: "", weekend: true},
    {name: "玩英系", good: "", bad: "", weekend: true},
    {name: "玩法系", good: "", bad: "", weekend: true},
    {name: "玩意系", good: "", bad: "", weekend: true},
    {name: "玩日系", good: "", bad: "", weekend: true},
    {name: "玩瑞系", good: "", bad: "", weekend: true},
    {name: "炸战区", good: "", bad: "", weekend: true},
    {name: "当空中小人", good: "", bad: "", weekend: true},
    {name: "玩海战", good: "", bad: "", weekend: true},
    {name: "压家", good: "", bad: "", weekend: true},
    {name: "攻击机制空", good: "", bad: "", weekend: true},
    {name: "制空机舔地", good: "", bad: "", weekend: true},
    {name: "当地雷", good: "", bad: "", weekend: true},
    {name: "玩陆战", good: "", bad: "", weekend: true},
    {name: "玩空战", good: "", bad: "", weekend: true},
    {name: "提交issue", good: "", bad: "", weekend: true},
    {name: "给bvvd交钱", good: "", bad: "", weekend: true},
    {name: "买金车", good: "", bad: "", weekend: true},
    {name: "买高涨", good: "", bad: "", weekend: true},
    {name: "晚上上线", good: "", bad: "", weekend: true},
    {name: "早上上线", good: "", bad: "", weekend: true},
    {name: "找代肝", good: "", bad: "", weekend: true},
    {name: "问候bvvd的麻麻", good: "", bad: "", weekend: true},
    {name: "冷战房", good: "", bad: "", weekend: true},
    {name: "顶级房", good: "", bad: "", weekend: true},
    {name: "二战房", good: "", bad: "", weekend: true}
];

var specials = [
    {date: 20140214, type: 'bad', name: '待在男（女）友身边', description: '脱团火葬场，入团保平安。'}
];

var tools = ["Eclipse写程序", "MSOffice写文档", "记事本写程序", "Windows8", "Linux", "MacOS", "IE", "Android设备", "iOS设备"];

var varNames = ["jieguo", "huodong", "pay", "expire", "zhangdan", "every", "free", "i1", "a", "virtual", "ad", "spider", "mima", "pass", "ui"];

var drinks = ["水", "茶", "红茶", "绿茶", "荞麦轻茶", "咖啡", "奶茶", "可乐", "鲜百香胶原摇摇冻", "陨石拿铁", "莓莓果茶", "草莓奶露", "布雷奶芙瑞纳冰", "冰激凌红茶"];

function is_someday() {
    return today.getMonth() == 5 && today.getDate() == 4;
}

function getTodayString() {
    return "今天是" + today.getFullYear() + "年" + (today.getMonth() + 1) + "月" + today.getDate() + "日";
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

