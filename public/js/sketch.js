var width;
var height;

var xpos;
var ypos;

var radius;

var yvel;
var xvel;

var img;

var link;
var gifStart;

function setup() {
    width = window.innerWidth;
    height = window.innerHeight;

    radius = width/20;

    xpos = radius+1;
    ypos = radius+1;

    xvel = 2;
    yvel = 2;

    createCanvas(width, height);

    gifStart = false;

    img = createImg("img/bo.png");
    img.position(radius, radius);
    img.size(175, 150);
}

function draw() {
    // background(255);
    if((xpos >= width) | (xpos <= 0)){
        xvel *= -1;
    }

    if((ypos >= height) | (ypos <= 0)){
        yvel *= -1;
    }

    xpos += xvel;
    ypos += yvel;

    img.position(xpos, ypos);

}

function mouseClicked() {
    if(sqrt(pow((xpos-mouseX), 2) + pow((ypos-mouseY), 2)) < (1/2)*radius) {
        gifStart = true;
        xvel = 0;
        yvel = 0;
    }
}
