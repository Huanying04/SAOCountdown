<?php
define('__ROOT__', dirname(dirname(__FILE__)));
require_once(__ROOT__.'/php-svg-0.11.2/autoloader.php');

use SVG\SVG;
use SVG\Nodes\Structures\SVGFont;
use SVG\Nodes\Embedded\SVGImage;
use SVG\Nodes\Texts\SVGText;
use SVG\Rasterization\SVGRasterizer;

$now = time() * 1000;

$sale_begin = 1667142000000;
$server_open_time = 1667707200000;
$server_trap_time = 1667723400000;
$fisrt_dead = 1667734200000;
$coper_dead = 1667736000000;
$tztt_d_f = 1669820400000;
$seventyfive_floor_fight = 1730952000000;
$seventyfive_floor_fight_end = 1730955600000;
$sao_clear = 1730958900000;
$sao_disconnect = 1730959200000;

$first_boss_fight = 1670125200000;
$second_floor_open = 1670130000000; //小說沒明講，我隨便掰的
$second_boss_defeated = 1670976000000; //小說沒明講，我隨便掰的
$third_boss_defeated = 1671595920000;
$forth_boss_defeated = 1672119120000;
$fifth_boss_defeated = 1672486200000;
$sixth_boss_defeated = 1672840800000;

$up_text = '';
$down_text = '';
$text_class = '';

if ($now < $sale_begin){
    $up_text = '距離刀劍神域發售剩餘';
}else if ($now < $server_open_time){
    $up_text = '距離刀劍神域開服剩餘';
}else if ($now < $server_trap_time) {
    $up_text = 'Sword Art Online';
    $down_text = '已正式開服';
}else if ($now < $sao_clear) {
    $text_class .= ' red';
}else {
    $up_text = 'Sword Art Online已於2024年11月7日14時55分遊戲破關';
    $down_text = '6147名玩家已完成登出';
}

if ($now < $sale_begin) {
    $left = $sale_begin - $now;
    $year = floor($left / 31556926000);
    $left = $left - 31556926000 * $year;
    $month = floor($left / 2629800000);
    $left = $left - 2629800000 * $month;
    $day = floor($left / 86400000);
    $left = $left - 86400000 * $day;
    $hour = floor($left / 3600000);
    $left = $left - 3600000 * $hour;
    $min = floor($left / 60000);
    $left = $left - 60000 * $min;
    $sec = floor($left / 1000);
    $down_text = ($year>0?$year.'年':'')
                .($month>0?$month.'月':'')
                .($day>0?$day.'日':'') 
                .$hour.'時' 
                .$min.'分' 
                .$sec.'秒';
}else if ($now < $server_open_time){
    $left = $server_open_time - $now;
    $day = floor($left / 86400000);
    $left = $left - 86400000 * $day;
    $hour = floor($left / 3600000);
    $left = $left - 3600000 * $hour;
    $min = floor($left / 60000);
    $left = $left - 60000 * $min;
    $sec = floor($left / 1000);
    $down_text = ($day>0?$day.'日':'') 
                .$hour.'時' 
                .$min.'分' 
                .$sec.'秒';
}else if ($now >= $server_trap_time && $now < $fisrt_dead) {
    $up_text = '已攻略至1樓';
    $down_text = '剩餘玩家 9787人';
}else if ($now >= $fisrt_dead && $now < $coper_dead) {
    $up_text = '已攻略至1樓';
    $down_text = '剩餘玩家 9786人';
}else if ($now >= $coper_dead && $now < $tztt_d_f) {
    $up_text = '已攻略至1樓';
    $down_text = '剩餘玩家 '.player_count1().'人';
}else if ($now >= $tztt_d_f && $now < $second_floor_open) {
    $up_text = '已攻略至1樓';
    $down_text = '剩餘玩家 '.player_count2().'人';
}else if ($now >= $second_floor_open && $now < $second_boss_defeated) {
    $up_text = '已攻略至2樓';
    $down_text = '剩餘玩家 '.player_count2().'人';
}else if ($now >= $second_boss_defeated && $now < $third_boss_defeated) {
    $up_text = '已攻略至3樓';
    $down_text = '剩餘玩家 '.player_count2().'人';
}else if ($now >= $third_boss_defeated && $now < $forth_boss_defeated) {
    $up_text = '已攻略至4樓';
    $down_text = '剩餘玩家 '.player_count2().'人';
}else if ($now >= $forth_boss_defeated && $now < $fifth_boss_defeated) {
    $up_text = '已攻略至5樓';
    $down_text = '剩餘玩家 '.player_count2().'人';
}else if ($now >= $fifth_boss_defeated && $now < $sixth_boss_defeated) {
    $up_text = '已攻略至6樓';
    $down_text = '剩餘玩家 '.player_count2().'人';
}else if ($now >= $sixth_boss_defeated && $now < $twenty_first_boss_defeated) {
    $up_text = '已攻略至'.floor1().'樓';
    $down_text = '剩餘玩家 '.player_count2().'人';
}else if ($now >= $twenty_first_boss_defeated && $now < $twenty_second_boss_defeated) {
    $up_text = '已攻略至22樓';
    $down_text = '剩餘玩家 '.player_count2().'人';
}else if ($now >= $twenty_second_boss_defeated && $now < $seventyfive_floor_fight) {
    $up_text = '已攻略至'.floor2().'樓';
    $down_text = '剩餘玩家 '.player_count2().'人';
}else if ($now >= $seventyfive_floor_fight && $now < $seventyfive_floor_fight_end) {
    $up_text = '已攻略至'.floor2().'樓';
    $down_text = '剩餘玩家 '.player_count3().'人';
}else if ($now >= $seventyfive_floor_fight_end && $now < $sao_clear) {
    $up_text = '已攻略至'.floor2().'樓';
    $down_text = '剩餘玩家 6147人';
}

function player_count1() {
    global $now, $tztt_d_f;
    return round(0.0391*pow(($tztt_d_f - $now), 0.5)+8000);
}

function player_count2() {
    global $now, $seventyfive_floor_fight;
    return round(0.007438*pow(($seventyfive_floor_fight - $now), 0.5)+6161);
}

function player_count3() {
    global $now, $seventyfive_floor_fight_end;
    return round(6147+14*(($seventyfive_floor_fight_end - $now)/3600000));
}

function floor1() {
    global $now, $twenty_first_boss_defeated;
    return round(22-15*(($twenty_first_boss_defeated - $now)/11791408696));
}

function floor2() {
    global $now, $seventyfive_floor_fight_end;
    return round(76-53*(($seventyfive_floor_fight_end - $now)/46064191304));
}

$svg  = '<svg height="1080" width="1920">';
$svg .= '<style>';
$svg .= 'text {
            text-anchor: middle;
            fill: #ffffff;
            font-family: \'Shippori Mincho\', serif;
            text-shadow: 0 0 12px #32c5fa;
        }

        text.title {
            font-size: 70px;
        }

        text.red {
            text-shadow: 0 0 12px #d61818;
        }';
$svg .= '</style>';
$svg .= '<image href="../img/aincrad.jpg" width="1920" height="1080"></image>';
$svg .= '<text class="title'.$text_class.'" transform="matrix(1 0 0 1 960 470)"><tspan x="0" dy="70px">'.$up_text.'</tspan><tspan x="0" dy="70px">'.$down_text.'</tspan></text>';
$svg .= '<text transform="matrix(1 0 0 1 960 1065)">使用Argus API以獲得即時數據</text>';
$svg .= '</svg>';

$img = SVG::fromString($svg);
$doc = $img->getDocument();

header('Content-Type: image/svg+xml');
echo $img;
?>