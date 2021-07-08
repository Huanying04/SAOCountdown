setup();
updateTimer();
var clock = setInterval(updateTimer , 500);

function setup() {
    const now = Date.now();
    if (now < sale_begin){
        document.getElementById('texts').innerHTML='<div class="title">距離刀劍神域發售剩餘</div><div id="time" class="title"></div>';
    }else if (now < server_open_time){
        document.getElementById('texts').innerHTML='<div class="title">距離刀劍神域開服剩餘</div><div id="time" class="title"></div>';
    }else if (now < server_trap_time) {
        document.getElementById('texts').innerHTML='<div id="notification" class="title">Sword Art Online已正式開服</div>'
    }else if (now < sao_clear) {
        document.getElementById('texts').innerHTML='<div id="current-player" class="title warning"></div><div id="current-floor" class="title warning"></div>'
    }else {
        document.getElementById('bg').className += " end";
        document.getElementById('texts').innerHTML='<div id="service-end" class="title">Sword Art Online已於</div><div id="service-end" class="title">2024年11月7日14時55分遊戲破關</div><div id="service-end" class="title">6147名玩家已完成登出</div>'
    }
}

function updateTimer() {
    const now = Date.now();

    if (now < sale_begin){
        var left = sale_begin - now;
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
    }else if (now < server_open_time){
        var left = server_open_time - now;
        const day = Math.floor(left / 86400000);
        left = left - 86400000 * day;
        const hour = Math.floor(left / 3600000);
        left = left - 3600000 * hour;
        const min = Math.floor(left / 60000);
        left = left - 60000 * min;
        const sec = Math.floor(left / 1000);
        var str = (day>0?day + '日':'') 
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
        document.getElementById('current-floor').innerText = '已攻略至' + floor2() + '樓';
        document.getElementById('current-player').innerText = '剩餘玩家 ' + player_count3() + '人';
    }else if (now >= seventyfive_floor_fight_end && now < sao_clear) {
        document.getElementById('current-floor').innerText = '已攻略至' + floor2() + '樓';
        document.getElementById('current-player').innerText = '剩餘玩家 ' + 6147 + '人';
    }
}
