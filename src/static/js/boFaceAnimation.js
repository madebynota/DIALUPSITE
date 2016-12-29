var face1;
var boFaceUrl1, boFaceUrl2;

// Face properties
var width, height;
var xpos, ypos;
var yvel, xvel;
var imgWidth, imgHeight;

function setupBoFace() {
    width = window.innerWidth;
    height = window.innerHeight;
    createCanvas(width,height);

    if(width > 768){
        imgWidth = width / 7;
        imgHeight = width / 10;
    } else {
        imgWidth = width / 3;
        imgHeight = width / 5;
    }

    xpos = floor(random(imgWidth, width - imgWidth));
    ypos = floor(random(imgHeight, height - imgHeight));

    xvel = random(-4, 4);
    yvel = random(-4, 4);

    boFaceUrl1 = "/img/boFace/bo.png"
    boFaceUrl2 = "/img/boFace/bo2.png"

    face = new BoFace(
        "bo",
        boFaceUrl1,
        imgWidth,
        imgHeight,
        xpos,
        ypos,
        xvel,
        yvel,
        true
    );

    var boFaceElement = document.getElementById("bo");
    boFaceElement.addEventListener('touchstart', preventZoom);
}

function drawBoFace() {
    face.move();
}

class BoFace {
    constructor(id, imgPath, width, height, xPos, yPos, xVel, yVel, shouldSwap) {
        this.id = id;
        this.width = width;
        this.height = height;
        this.xPos = xPos;
        this.yPos = yPos;
        this.xVel = xVel;
        this.yVel = yVel;
        this.shouldSwap = shouldSwap;

        this.img = createImg(imgPath);
        this.img.position(this.xPos, this.yPos);
        this.img.size(this.width, this.height);
        this.img.id(this.id);
        this.img.mousePressed(this.click.bind(this));
    }
    changeImage(imgSrc){
      // Clear original image from Canvas
      this.img.remove();

      // Setup new face image
      this.img = createImg(imgSrc);
      this.img.position(this.xPos, this.yPos);
      this.img.size(this.width, this.height);
      this.img.id(this.id);
      this.img.mousePressed(this.click.bind(this));

      this.shouldSwap = false;
    }
    move() {
        if ((this.xPos >= (window.innerWidth - (this.width))) | (this.xPos <= 0)) {
            this.xVel *= -1;
        }

        if ((this.yPos >= (window.innerHeight - (this.height))) | (this.yPos <= 0)) {
            this.yVel *= -1;
        }

        this.xPos += this.xVel;
        this.yPos += this.yVel;
        this.img.position(this.xPos, this.yPos);
    }
    click() {
      if(this.shouldSwap){
        this.changeImage(boFaceUrl2);
      }

      transitionToNextVideo();
    }
}

function preventZoom(e) {
    var t2 = e.timeStamp;
    var t1 = e.currentTarget.dataset.lastTouch || t2;
    var dt = t2 - t1;
    var fingers = e.touches.length;
    e.currentTarget.dataset.lastTouch = t2;

    if (!dt || dt > 500 || fingers > 1) return; // not double-tap

    e.preventDefault();
    e.target.click();
}
