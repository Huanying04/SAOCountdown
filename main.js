const server_open_time = 1667707200000;
const server_trap_time = 1667723400000;
const fisrt_dead = 1667734200000;
const coper_dead = 1667736000000;
const tztt_d_f = 1669820400000;
const seventyfive_floor_fight = 1730952000000;
const seventyfive_floor_fight_end = 1730955600000;
const sao_clear = 1730958900000;
const sao_disconnect = 1730959200000;

const first_boss_fight = 1670125200000;
const second_floor_open = 1670130000000; //小說沒明講，我隨便掰的
const second_boss_defeated = 1670976000000; //小說沒明講，我隨便掰的
const third_boss_defeated = 1671595920000;
const forth_boss_defeated = 1672119120000;
const fifth_boss_defeated = 1672486200000;
const sixth_boss_defeated = 1672840800000;

//以下基本上都是估算的，剩至還有些東西被我省略了
//結果我太懶懶得用這些資料
const twentey_fifth_boss_defeated = 1680220800000;
const twenty_eighth_boss_defeated = 1683590400000;
const thirtieth_boss_defeated = 1687392000000;
const thirty_eighth_boss_defeated = 1696723200000;
const fourtieth_boss_defeated = 1697623200000;
const fiftieth_boss_defeated = 1705190400000;
const fifty_fifth_boss_defeated = 1708646400000;
const starburst_stream_16_10 = 1729242000000;

const twenty_first_boss_defeated = 1684632208696; //用線性函數算出來的
const twenty_second_boss_defeated = 1684891408696; //三天後

setup();
updateTimer();
var clock = setInterval(updateTimer , 500);

function setup() {
    const now = Date.now();
    if (now < server_open_time){
        document.getElementById('texts').innerHTML='<div class="title">距離刀劍神域開服剩餘</div><div id="time" class="title"></div>';
    }else if (now >= server_open_time && now < server_trap_time) {
        document.getElementById('texts').innerHTML='<div id="notification" class="title">Sword Art Online已正式開服</div>'
    }else if (now >= server_trap_time && now < sao_clear) {
        document.getElementById('texts').innerHTML='<div id="current-player" class="title warning"></div><div id="current-floor" class="title warning"></div>'
    }else {
        document.getElementById('bg').className += " end";
        document.getElementById('texts').innerHTML='<div id="service-end" class="title">Sword Art Online已於</div><div id="service-end" class="title">2024年11月7日14時55分16秒遊戲破關</div><div id="service-end" class="title">6147名玩家已完成登出</div>'
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
        var str = (year>0?year + '年':'')
                + (month>0?month + '月':'')
                + (day>0?day + '日':'') 
                + hour + '時' 
                + paddingLeft(String(min), 2) + '分' 
                + paddingLeft(String(sec), 2) + '秒';
        document.getElementById('time').innerText = str;
    }else if (now >= server_trap_time && now < fisrt_dead) {
        document.getElementById('current-floor').innerText = '已攻略至' + 1 + '樓';
        document.getElementById('current-player').innerText = '剩餘玩家 ' + 9787 + '人';
    }else if (now >= fisrt_dead && now < coper_dead) {
        document.getElementById('current-floor').innerText = '已攻略至' + 1 + '樓';
        document.getElementById('current-player').innerText = '剩餘玩家 ' + 9786 + '人';
    }else if (now >= coper_dead && now < tztt_d_f) {
        document.getElementById('current-floor').innerText = '已攻略至' + 1 + '樓';
        document.getElementById('current-player').innerText = '剩餘玩家 ' + player_count1() + '人';
    }else if (now >= tztt_d_f && now < second_floor_open) {
        document.getElementById('current-floor').innerText = '已攻略至' + 1 + '樓';
        document.getElementById('current-player').innerText = '剩餘玩家 ' + player_count2() + '人';
    }else if (now >= second_floor_open && now < second_boss_defeated) {
        document.getElementById('current-floor').innerText = '已攻略至' + 2 + '樓';
        document.getElementById('current-player').innerText = '剩餘玩家 ' + player_count2() + '人';
    }else if (now >= second_boss_defeated && now < third_boss_defeated) {
        document.getElementById('current-floor').innerText = '已攻略至' + 3 + '樓';
        document.getElementById('current-player').innerText = '剩餘玩家 ' + player_count2() + '人';
    }else if (now >= third_boss_defeated && now < forth_boss_defeated) {
        document.getElementById('current-floor').innerText = '已攻略至' + 4 + '樓';
        document.getElementById('current-player').innerText = '剩餘玩家 ' + player_count2() + '人';
    }else if (now >= forth_boss_defeated && now < fifth_boss_defeated) {
        document.getElementById('current-floor').innerText = '已攻略至' + 5 + '樓';
        document.getElementById('current-player').innerText = '剩餘玩家 ' + player_count2() + '人';
    }else if (now >= fifth_boss_defeated && now < sixth_boss_defeated) {
        document.getElementById('current-floor').innerText = '已攻略至' + 6 + '樓';
        document.getElementById('current-player').innerText = '剩餘玩家 ' + player_count2() + '人';
    }else if (now >= sixth_boss_defeated && now < twenty_first_boss_defeated) {
        document.getElementById('current-floor').innerText = '已攻略至' + floor1() + '樓';
        document.getElementById('current-player').innerText = '剩餘玩家 ' + player_count2() + '人';
    }else if (now >= twenty_first_boss_defeated && now < twenty_second_boss_defeated) {
        document.getElementById('current-floor').innerText = '已攻略至' + 22 + '樓';
        document.getElementById('current-player').innerText = '剩餘玩家 ' + player_count2() + '人';
    }else if (now >= twenty_second_boss_defeated && now < seventyfive_floor_fight) {
        document.getElementById('current-floor').innerText = '已攻略至' + floor2() + '樓';
        document.getElementById('current-player').innerText = '剩餘玩家 ' + player_count2() + '人';
    }else if (now >= seventyfive_floor_fight && now < seventyfive_floor_fight_end) {
        document.getElementById('current-player').innerText = '剩餘玩家 ' + player_count3() + '人';
    }else if (now >= seventyfive_floor_fight_end && now < sao_clear) {
        document.getElementById('current-floor').innerText = '已攻略至' + floor2() + '樓';
        document.getElementById('current-player').innerText = '剩餘玩家 ' + 6147 + '人';
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
    return Math.round(8000+1785*((tztt_d_f - Date.now())/2084400000));
}

function player_count2() {
    return Math.round(6161+1839*((seventyfive_floor_fight - Date.now())/61131600000));
}

function player_count3() {
    return Math.round(6147+14*((seventyfive_floor_fight_end - Date.now())/3600000));
}

function floor1() {
    return Math.round(22-15*((twenty_first_boss_defeated - Date.now())/11791408696));
}

function floor2() {
    return Math.round(76-53*((seventyfive_floor_fight_end - Date.now())/46064191304));
}