function getGUID() {
	function getCodeChunks(a) {
		if (a === undefined || a < 1) {
			a = 1;
		}
		return Math.random().toString(16).substr(2, 4*a);
	}
	var c = parseInt(document.getElementById("getAmount").value);
	document.getElementById('textareaID').value = '';
	var myGUID = '';
	if (c < 1 || !c) {
		c = 1
	};
	if (c >= 1) {
		if (c > 100) {
			c = 100
		};
	for (var i = 0; i < c; i++) {
		myGUID += getCodeChunks(2) + '-' + getCodeChunks() + '-' + getCodeChunks() + 
		'-' + getCodeChunks() + getCodeChunks(3);
		document.getElementById('textareaID').value += myGUID + '\n';
		myGUID = '';
		}
	}  
}


