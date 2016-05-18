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

    imgWidth = width/5;
    imgHeight = width/8;

    xpos = floor(random(imgWidth, width-imgWidth));
    ypos = floor(random(imgHeight, height-imgHeight));

    xvel = random(1, 4);
    yvel = random(1, 4);

    createCanvas(width,height);

    gifStart = false;

    img = createImg("img/bo.png");

    
    img.position(xpos, ypos);
    img.size(imgWidth, imgHeight);
    img.id("bo");

    img.mousePressed(stop);
}

function draw() {
    width = window.innerWidth;
    height = window.innerHeight;

    if((xpos >= (width-(imgWidth))) | (xpos <= 0)){
        xvel *= -1;
    }

    if((ypos >= (height-(imgHeight))) | (ypos <= 0)){
        yvel *= -1;
    }

    if(!gifStart){
    xpos += xvel;
    ypos += yvel;
    }

    img.position(xpos, ypos);
}

function stop() {
    if(!gifStart){
        switchBackground();
        img = createImage("img/bo2.png");
        img.mousePressed(stop);
        gifStart = true;
    }
    img = createImage("img/bo2.png");
    switchBackground();
}
