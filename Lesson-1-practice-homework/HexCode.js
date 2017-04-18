function getCode(c) {
	var hexNum = '#';
	if (c == 3 || c == 6) {
		hexNum += Math.random().toString(16).substr(2, c);
	}  
    else { 
        hexNum = "Ain't No color with this base."; 
    };
    return hexNum;
}
getCode(3);
getCode(6);
getCode(9);
