function selectLogo() {
	var logoOptions = [0, 1, 2, 3, 4, 5, 6];
	var choice = logoOptions[Math.floor(Math.random()*7)]
	var filename = "img/logos/logo-" + choice + ".png";
	console.log(filename)
	$("#mainName").attr("src", filename);

}

$(function() {
	selectLogo()
});
