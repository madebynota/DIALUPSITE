var width;
var height;

var xpos;
var ypos;

var yvel;
var xvel;

var img;
var img2;

var imgWidth;
var imgHeight;

var link;
var gifStart;

function setup() {

    width = window.innerWidth;
    height = window.innerHeight;

    if(width > 768){
        imgWidth = width/7;
        imgHeight = width/10;
    } else {
        imgWidth = width/3;
        imgHeight = width/5;
    }

    xpos = floor(random(imgWidth, width-imgWidth));
    ypos = floor(random(imgHeight, height-imgHeight));

    xvel = random(-4, 4);
    yvel = random(-4, 4);

    createCanvas(width,height);

    gifStart = false;

    img2 = createImg("img/bo2.png");
    img = createImg("img/bo.png");

    img2.position(xpos, ypos);
    img2.size(imgWidth, imgHeight);
    img2.id("bo2");

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

    img2.position(xpos, ypos);
    img.position(xpos, ypos);
}

function stop() {
    if(!gifStart){
        switchBackground();
        img2.mousePressed(stop);
        img.hide();
        gifStart = true;
    }
    switchBackground();
}
