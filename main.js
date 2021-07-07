const server_open_time = 1667707200000;
const server_trap_time = 1667723400000;
const tztt_d_f = 1669820400000;
const seventyfive_floor_fight = 1730952000000;
const seventyfive_floor_fight_end = 1730955600000;
const sao_clear = 1730958900000;
const sao_disconnect = 1730959200000;

Math.seedrandom('sao');

setup();
updateTimer();
var clock = setInterval(updateTimer , 500);

function setup() {
    const now = Date.now();
    if (now < server_open_time){
        document.getElementById('texts').innerHTML='<div class="title">距離刀劍神域開服剩餘</div><div id="time" class="title"></div>';
    }else if (now >= server_open_time && now < server_trap_time) {
        document.getElementById('texts').innerHTML='<div id="notification" class="title">Sword Art Online已正式開服</div>'
    }else if (now >= server_trap_time && now < sao_disconnect) {
        document.getElementById('texts').innerHTML='<div class="title warning">Sword Art Online剩餘玩家</div><div id="current-player" class="title warning"></div>'
    }else {
        document.getElementById('bg').className += " end";
        document.getElementById('texts').innerHTML='<div id="service-end" class="title">Sword Art Online遊戲破關</div><div id="service-end" class="title">6147名玩家已完成登出</div>'
    }
}

function updateTimer() {
    const now = Date.now();

    if (now < server_open_time){
        var left = server_open_time - now;
        const year = Math.floor(left / 31556926000);
        left = left - 31556926000 * year;
        const month = Math.floor(left / 2629800000);
        left = left - 2629800000 * month;
        const day = Math.floor(left / 86400000);
        left = left - 86400000 * day;
        const hour = Math.floor(left / 3600000);
        left = left - 3600000 * hour;
        const min = Math.floor(left / 60000);
        left = left - 60000 * min;
        const sec = Math.floor(left / 1000);
        var str = year + '年'
                + month + '月' 
                + day + '日' 
                + hour + '時' 
                + paddingLeft(String(min), 2) + '分' 
                + paddingLeft(String(sec), 2) + '秒';
        document.getElementById('time').innerText = str;
    }else if (now >= server_trap_time && now < tztt_d_f) {
        document.getElementById('current-player').innerText = player_count1() + '人';
    }else if (now >= tztt_d_f && now < seventyfive_floor_fight) {
        document.getElementById('current-player').innerText = player_count2() + '人';
    }else if (now >= seventyfive_floor_fight && now < seventyfive_floor_fight_end) {
        document.getElementById('current-player').innerText = player_count3() + '人';
    }else if (now >= seventyfive_floor_fight_end && now < sao_clear) {
        document.getElementById('current-player').innerText = 6147 + '人';
    }else if (now >= sao_clear && now < sao_disconnect) {
        document.getElementById('current-player').innerText = 6147 + '人';
    }
}

function paddingLeft(str, lenght){
	if(str.length >= lenght) {
	    return str;
    }else {
	    return paddingLeft("0" + str, lenght);
    }
}

function player_count1() {
    return Math.round(8000+1787*((tztt_d_f - Date.now())/2097000000));
}

function player_count2() {
    return Math.round(6161+1839*((seventyfive_floor_fight - Date.now())/61131600000));
}

function player_count3() {
    return Math.round(6147+14*((seventyfive_floor_fight_end - Date.now())/3600000));
}
