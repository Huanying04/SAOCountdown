function paddingLeft(str, lenght){
	if(str.length >= lenght) {
	    return str;
    }else {
	    return paddingLeft("0" + str, lenght);
    }
}

function player_count1() {
    return Math.round(0.0391*Math.pow((tztt_d_f - Date.now()), 0.5)+8000);
    //return Math.round(8000+1785*((tztt_d_f - Date.now())/2084400000));
}

function player_count2() {
    return Math.round(0.007438*Math.pow((seventyfive_floor_fight - Date.now()), 0.5)+6161);
    //return Math.round(6161+1839*((seventyfive_floor_fight - Date.now())/61131600000));
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