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

var faces = [];

var amount = 200;

function setup() {

    width = window.innerWidth;
    height = window.innerHeight;

    createCanvas(width,height);
    for (var i = 0; i < amount; i++) {
      var randomX = Math.floor(random(40, width - 40));
      var randomY = Math.floor(random(45, height - 45));
      faces.push(new Face(randomX, randomY));
    }
}

function draw() {
    width = window.innerWidth;
    height = window.innerHeight;

    // x = Math.floor(random(0, 3));
    // y = Math.floor(random(0, 3));
    
  for (var i = 0; i < faces.length; i++) {
    var face = faces[i];
    face.move();
  }
}

class Face {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.img = createImg("img/andrewFace.png");
  }

  move() {
    var xOffset = Math.floor(random(0, 2));
    var yOffset = Math.floor(random(0, 2));

    var newPositionX = this.x + xOffset;
    var newPositionY = this.y + xOffset;

    this.img.size(40, 45);
    this.img.position(newPositionX, newPositionY);
    this.img.id("andrew");
  }
}

