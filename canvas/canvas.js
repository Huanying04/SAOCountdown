const now = Date.now();

const img = new Image();
img.src = (now<sao_clear)?'../img/aincrad.jpg':'../img/end.jpg';

document.getElementById('canvas').setAttribute("height", img.height);
document.getElementById('canvas').setAttribute("width", img.width);
document.getElementById('bg').setAttribute("href", (now<sao_clear)?'../img/aincrad.jpg':'../img/end.jpg');
document.getElementById('bg').setAttribute("width", "100%");
document.getElementById('bg').setAttribute("height", "100%");
document.getElementById('text').setAttribute("transform", "matrix(1 0 0 1 "+ img.width/2 +" "+ (img.height/2 - 35) +")");

if (now >= server_trap_time && now < sao_clear) {
    document.getElementById("text").classList.add("red");
}

if (now < sale_begin) {
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
    document.getElementById("text").innerHTML = '<tspan x="0" dy="80px">距離刀劍神域發售剩餘</tspan><tspan x="0" dy="80px">' + str + '</tspan>';
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
    document.getElementById("text").innerHTML = '<tspan x="0" dy="80px">距離刀劍神域開服剩餘</tspan><tspan x="0" dy="80px">' + str + '</tspan>';
}else if (now < server_trap_time){
    document.getElementById("text").innerHTML = '<tspan x="0" dy="80px">Sword Art Online</tspan><tspan x="0" dy="80px">已正式開服</tspan>';
}else if (now >= server_trap_time && now < fisrt_dead) {
    document.getElementById("text").innerHTML = '<tspan x="0" dy="80px">已攻略至'+1+'樓</tspan><tspan x="0" dy="80px">剩餘玩家'+9787+'人</tspan>';
}else if (now >= fisrt_dead && now < coper_dead) {
    document.getElementById("text").innerHTML = '<tspan x="0" dy="80px">已攻略至'+1+'樓</tspan><tspan x="0" dy="80px">剩餘玩家'+9786+'人</tspan>';
}else if (now >= coper_dead && now < tztt_d_f) {
    document.getElementById("text").innerHTML = '<tspan x="0" dy="80px">已攻略至'+1+'樓</tspan><tspan x="0" dy="80px">剩餘玩家'+player_count1()+'人</tspan>';
}else if (now >= tztt_d_f && now < second_floor_open) {
    document.getElementById("text").innerHTML = '<tspan x="0" dy="80px">已攻略至'+1+'樓</tspan><tspan x="0" dy="80px">剩餘玩家'+player_count2()+'人</tspan>';
}else if (now >= second_floor_open && now < second_boss_defeated) {
    document.getElementById("text").innerHTML = '<tspan x="0" dy="80px">已攻略至'+2+'樓</tspan><tspan x="0" dy="80px">剩餘玩家'+player_count2()+'人</tspan>';
}else if (now >= second_boss_defeated && now < third_boss_defeated) {
    document.getElementById("text").innerHTML = '<tspan x="0" dy="80px">已攻略至'+3+'樓</tspan><tspan x="0" dy="80px">剩餘玩家'+player_count2()+'人</tspan>';
}else if (now >= third_boss_defeated && now < forth_boss_defeated) {
    document.getElementById("text").innerHTML = '<tspan x="0" dy="80px">已攻略至'+4+'樓</tspan><tspan x="0" dy="80px">剩餘玩家'+player_count2()+'人</tspan>';
}else if (now >= forth_boss_defeated && now < fifth_boss_defeated) {
    document.getElementById("text").innerHTML = '<tspan x="0" dy="80px">已攻略至'+5+'樓</tspan><tspan x="0" dy="80px">剩餘玩家'+player_count2()+'人</tspan>';
}else if (now >= fifth_boss_defeated && now < sixth_boss_defeated) {
    document.getElementById("text").innerHTML = '<tspan x="0" dy="80px">已攻略至'+6+'樓</tspan><tspan x="0" dy="80px">剩餘玩家'+player_count2()+'人</tspan>';
}else if (now >= sixth_boss_defeated && now < twenty_first_boss_defeated) {
    document.getElementById("text").innerHTML = '<tspan x="0" dy="80px">已攻略至'+floor1()+'樓</tspan><tspan x="0" dy="80px">剩餘玩家'+player_count2()+'人</tspan>';
}else if (now >= twenty_first_boss_defeated && now < twenty_second_boss_defeated) {
    document.getElementById("text").innerHTML = '<tspan x="0" dy="80px">已攻略至'+22+'樓</tspan><tspan x="0" dy="80px">剩餘玩家'+player_count2()+'人</tspan>';
}else if (now >= twenty_second_boss_defeated && now < seventyfive_floor_fight) {
    document.getElementById("text").innerHTML = '<tspan x="0" dy="80px">已攻略至'+floor2()+'樓</tspan><tspan x="0" dy="80px">剩餘玩家'+player_count2()+'人</tspan>';
}else if (now >= seventyfive_floor_fight && now < seventyfive_floor_fight_end) {
    document.getElementById("text").innerHTML = '<tspan x="0" dy="80px">已攻略至'+floor2()+'樓</tspan><tspan x="0" dy="80px">剩餘玩家'+player_count3()+'人</tspan>';
}else if (now >= seventyfive_floor_fight_end && now < sao_clear) {
    document.getElementById("text").innerHTML = '<tspan x="0" dy="80px">已攻略至'+floor2()+'樓</tspan><tspan x="0" dy="80px">剩餘玩家'+6147+'人</tspan>';
}else {
    document.getElementById("text").innerHTML = '<tspan x="0" dy="80px">Sword Art Online已於2024年11月7日14時55分遊戲破關</tspan><tspan x="0" dy="80px">6147名玩家已完成登出</tspan>';
}