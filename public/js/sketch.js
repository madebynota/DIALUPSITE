var width;
var height;

var xpos;
var ypos;

var yvel;
var xvel;

var img;

var imgWidth;
var imgHeight;

var link;
var gifStart;

function setup() {
    width = window.innerWidth;
    height = window.innerHeight;

    xpos = width/2;
    ypos = height/2;

    xvel = 2;
    yvel = 2;

    createCanvas(width, height);

    gifStart = false;

    img = createImg("img/bo.png");

    imgWidth = 175;
    imgHeight = 150;
    
    img.position(xpos, ypos);
    img.size(imgWidth, imgHeight);
    img.id("bo");

    img.mousePressed(hide);
}

function draw() {
    if((xpos >= (width-(imgWidth))) | (xpos <= 0)){
        xvel *= -1;
    }

    if((ypos >= (height-(imgHeight))) | (ypos <= 0)){
        yvel *= -1;
    }

    xpos += xvel;
    ypos += yvel;

    img.position(xpos, ypos);
}

function hide() {
    gifStart = true;
    switchBackground();
    xvel = 0;
    yvel = 0;
}
