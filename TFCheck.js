function confirmCheck() {
	var str = document.getElementById("TFCheck").value.toLowerCase();
	if (str == "true") {
		 document.write(!!str);
	}
	else if (str == "false") {
		 document.write(!str);
	}
	else {  document.write('Please enter either "true" or "false"'); }
}