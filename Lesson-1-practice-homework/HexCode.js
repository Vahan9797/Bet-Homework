function getCode(c) {

	var hexNum = '#';
	if (c == 3 || c == 6) {
		for (var i = 0; i < c; i++) {
			hexNum += (Math.floor(Math.random()*15).toString(16));
		} 
	}  else { hexNum = "Ain't No color with this base." };
    return hexNum;
}
getCode(3);
getCode(6);
getCode(9);