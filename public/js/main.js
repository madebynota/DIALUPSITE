var gifMap = [
	{
		"gifPath": "../img/gifs/dillo.gif",
		"color": "#FFFFFF"
	},
	{
		"gifPath": "../img/gifs/dunks.gif",
		"color": "#FFFFFF"
	},
	{
		"gifPath": "../img/gifs/WHITE-TEE.gif",
		"color": "#44BBEC"
	},
	{
		"gifPath": "../img/gifs/dave-wasabi.gif",
		"color": "#44BBEC"
	},
	{
		"gifPath": "../img/gifs/slim-twirl.gif",
		"color": "#44BBEC"
	},
	{
		"gifPath": "../img/gifs/archie-turnt.gif",
		"color": "#FFFFFF"
	},
	{
		"gifPath": "../img/gifs/bo-ollie.gif",
		"color": "#FFFFFF"
	},
	{
		"gifPath": "../img/gifs/stamina-crowd.gif",
		"color": "#FFFFFF"
	},
	{
		"gifPath": "../img/gifs/jeff-eggos.gif",
		"color": "#FFFFFF"
	},
	{
		"gifPath": "../img/gifs/jeff-open-door.gif",
		"color": "#FFA998"
	},
	{
		"gifPath": "../img/gifs/sk8.gif",
		"color": "#FFFFFF"
	},
	{
		"gifPath": "../img/gifs/slim-dance.gif",
		"color": "#FFFFFF"
	},
	{
		"gifPath": "../img/gifs/squad.gif",
		"color": "#FFFFFF"
	}
]

var vidMap = [
	{
		"vidPath": "../img/vids/aj-eggo.mp4",
		"color": "#FFFFFF"
	},
	{
		"vidPath": "../img/vids/jeff-eggo.mp4",
		"color": "#FFFFFF"
	},
	{
		"vidPath": "../img/vids/party.mp4",
		"color": "#44BBEC"
	},
	{
		"vidPath": "../img/vids/slim-dillo.mp4",
		"color": "#44BBEC"
	}
]


var shuffled = shuffle(vidMap);
var mapCount = 4;
var index = 0;

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function selectLogo() {
	var logoOptions = [0, 1, 2, 3, 4, 5, 6];
	var choice = logoOptions[Math.floor(Math.random()*7)]
	var filename = "img/logos/logo-" + choice + ".png";
	console.log(filename)
	$("#mainName").attr("src", filename);
}

function switchBackground() {
	if(index == 1) {
		$("body").css("background-color", "");
	}

	var chosenVid = shuffled[index%mapCount].vidPath;
	var chosenColor = shuffled[index%mapCount].color; 


	$("#bgvid").attr("src", chosenVid);
	$("#bgvid").css("background-position", "center center");
	$("#bgvid").css("background-size", "cover");
	$("#bgvid").css("background-position", "fixed");
	$("#bgvid").css("z-index", -100);

	$(".content #mediaItem").css("color", chosenColor);


	index++;
}

function switchBackgroundMobile() {
    var letters = ['13, 192, 255','255, 198, 173','185, 215, 57','0, 239, 171', '251, 210, 43', '255, 69, 69', '140, 47, 151', '233, 50, 97']; //Set your colors here
    color = letters[Math.floor(Math.random() * letters.length)];
    var finalColor = 'rgba(' + color + ', 1)'
    document.body.style.background = finalColor

	$(".content #mediaItem").css("color", "white");
}


$(function() {
	selectLogo()

	$(".contact").click(function() {
		var contactString = "EMAIL US AT DIALUPSTUFF@GMAIL.COM\n\nFACEBOOK AT HTTPS://WWW.FACEBOOK.COM/DIALUPSTUFF"
		alert(contactString);
	});
});
