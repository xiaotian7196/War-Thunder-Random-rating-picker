let datetime = new Date();
console.log(datetime)

function secondToDate(second) {
    if (!second) {
        return 0;
    }
    let time = [0, 0, 0, 0, 0];
    if (second >= 365 * 24 * 3600) {
        time[0] = parseInt(second / (365 * 24 * 3600));
        second %= 365 * 24 * 3600;
    }
    if (second >= 24 * 3600) {
        time[1] = parseInt(second / (24 * 3600));
        second %= 24 * 3600;
    }
    if (second >= 3600) {
        time[2] = parseInt(second / 3600);
        second %= 3600;
    }
    if (second >= 60) {
        time[3] = parseInt(second / 60);
        second %= 60;
    }
    if (second > 0) {
        time[4] = second;
    }
    return time;
}


function config() {
    let LaunchDate = Math.round(new Date(Date.UTC(2024, 9, 10, 0, 0, 0)).getTime() / 1000);
    let TimeStamp = Math.round((new Date().getTime() + 8 * 60 * 60 * 1000) / 1000)

    try {
        let currentTime = secondToDate((TimeStamp - LaunchDate));
        document.getElementById("html_time").innerHTML = currentTime[0] + '年' + currentTime[1] + '天' + currentTime[2] + '时' + currentTime[3] + '分' + currentTime[4] + '秒';
    } catch (err) {
    }
    try {
        let currentTime = secondToDate((TimeStamp - LaunchDate));
        document.getElementById("html_time_ENG").innerHTML = currentTime[0] + ' YEAR ' + currentTime[1] + ' DAY ' + currentTime[2] + ' HOUR ' + currentTime[3] + ' MIN ' + currentTime[4] + ' SEC ';
    } catch (err) {
    }

}

setInterval(config, 1000);