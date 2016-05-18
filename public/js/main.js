var gifMap = [
	{
		"gifPath": "../img/gifs/dillo.gif",
		"color": "#FFFFFF"
	},
	{
		"gifPath": "../img/gifs/jeff-eggos.gif",
		"color": "#FFA998"
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
		"color": "#FFA998"
	},
	{
		"gifPath": "../img/gifs/squad.gif",
		"color": "#FFFFFF"
	}
]

var shuffled = shuffle(gifMap);
var mapCount = 6;
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

	var chosenGif = shuffled[index%mapCount].gifPath;
	var chosenColor = shuffled[index%mapCount].color; 
	$("body").css("background-image", "url(" + chosenGif + ")");
	$(".content #mediaItem").css("color", chosenColor);


	index++;
}

$(function() {
	selectLogo()
});
