// var width;
// var height;

// var xpos;
// var ypos;

// var imgWidth;
// var imgHeight;

// var link;
// var gifStart;

// var aFace;

// function draw() {
//   background(50, 89, 100);
//   bug1.move();
//   bug1.display();
//   bug2.move();
//   bug2.display();
//   bug3.move();
//   bug3.display();
//   bug4.move();
//   bug4.display();
// }

// function setup() {

//     width = window.innerWidth;
//     height = window.innerHeight;

//     if(width > 768){
//         imgWidth = width/7;
//         imgHeight = width/10;
//     } else {
//         imgWidth = width/3;
//         imgHeight = width/5;
//     }

//     createCanvas(width,height);

//     // img.mousePressed(stop);
//     // img2.mousePressed(stop);
// }

// function draw() {
//     width = window.innerWidth;
//     height = window.innerHeight;

//     aFace = new Jitter();
//     aFace.move();
//     aFace.display();

// }

// // Jitter class
// function Jitter() {
//   this.x = random(width);
//   this.y = random(height);
//   this.diameter = random(10, 30);
//   this.speed = 1;
//   this.img = createImage("../../../img/andrewFace.png");

//   this.move = function() {
//     this.x += random(-this.speed, this.speed);
//     this.y += random(-this.speed, this.speed);
//   };

//   this.display = function() {
//     console.log("diplayed")
//     image(this.img, 300+this.x, 300+this.y, 100, 100);
//   };
// }

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
      console.log("RandomX: " + randomX + ".\n RandomY: " + randomY)
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

