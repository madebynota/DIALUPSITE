// Map of Videos to respective text colors that match. Used by the Gif
// randomizer to pick colors with high contrast.
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
		"color": "#ff2847"
	},
	{
		"vidPath": "../img/vids/party-hypeness.mp4",
		"color": "#fe944f"
	},
	{
		"vidPath": "../img/vids/luchador.mp4",
		"color": "#44BBEC"
	},
	{
		"vidPath": "../img/vids/party-2.mp4",
		"color": "#18faee"
	},
	{
		"vidPath": "../img/vids/dave-wasabi.mp4",
		"color": "#FFB9A3"
	},
	{
		"vidPath": "../img/vids/feed-streets.mp4",
		"color": "#fdd848"
	},
	{
		"vidPath": "../img/vids/jeff-yam.mp4",
		"color": "#44BBEC"
	},
	{
		"vidPath": "../img/vids/archie-turnt.mp4",
		"color": "#FFB9A3"
	},
	{
		"vidPath": "../img/vids/magic-go-crazy.mp4",
		"color": "#18faee"
	},
	{
		"vidPath": "../img/vids/aj-dap.mp4",
		"color": "#FFB9A3"
	},
	{
		"vidPath": "../img/vids/nbn2.mp4",
		"color": "#44BBEC"
	},
	{
		"vidPath": "../img/vids/jeff-only-up.mp4",
		"color": "#FFB9A3"
	},
	{
		"vidPath": "../img/vids/jack-dap.mp4",
		"color": "#18faee"
	},
	{
		"vidPath": "../img/vids/archie-jerk.mp4",
		"color": "#18faee"
	}
]

var shuffled = shuffle(vidMap);
var mapCount = 17;
var index = 0;

// Function that shuffles the videos and chooses the next one in the sequence
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

// Chooses a random "DIAL UP" logo as the center image on the page
function selectLogo() {
	var logoOptions = [0, 1, 2, 3, 4, 5, 6];
	var choice = logoOptions[Math.floor(Math.random()*7)]
	var filename = "img/logos/logo-" + choice + ".png";
	console.log(filename)
	$("#mainName").attr("src", filename);
}

//Performs the video switch in the DOM
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

//Gifs currently run slowly on mobile devices, this function switches the
//background color of the site instead
function switchBackgroundMobile() {
  //Set your colors here
  var letters = ['13, 192, 255','255, 198, 173','185, 215, 57','0, 239, 171',
      '251, 210, 43', '255, 69, 69', '140, 47, 151', '233, 50, 97'];
  color = letters[Math.floor(Math.random() * letters.length)];
  var finalColor = 'rgba(' + color + ', 1)'
  document.body.style.background = finalColor

	$(".content #mediaItem").css("color", "white");
}

//Function to show an alert when the CONTACT button is clicked
$(function() {
	selectLogo()
	$(".contact").click(function() {
		var contactString = "EMAIL US AT DIALUPSTUFF@GMAIL.COM\n\nFACEBOOK AT HTTPS://WWW.FACEBOOK.COM/DIALUPSTUFF"
		alert(contactString);
	});
});
