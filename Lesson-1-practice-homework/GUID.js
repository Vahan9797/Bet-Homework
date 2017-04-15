function getGUID() {
	var c = parseInt(document.getElementById("getAmount").value);
	var myGUID = '';
	if (c < 1 || !c) {c = 1};
	if (c >= 1) {
		if (c > 100) {c = 100};
	for (var i = 0; i < c; i++) {
			for (var j = 0; j < 32; j++) {
				if (j !=0 && j % 4 == 0) { myGUID += '-' };
					myGUID += (Math.floor(Math.random()*15).toString(16));
				}
				document.getElementById('textareaID').value += myGUID + '\n';
				myGUID = '';
			}
		}  
	}


