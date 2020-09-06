// var faces = [];
// var amount = 200;

// function setupAndrewFace() {
//     createCanvas(width, height);

//     for (var i = 0; i < amount; i++) {
//         var randomX = Math.floor(random(40, window.innerWidth - 40));
//         var randomY = Math.floor(random(45, window.innerHeight - 45));
//         faces.push(new AndrewFace(randomX, randomY));
//     }
// }

// function drawAndrewFace() {
//     for (var i = 0; i < faces.length; i++) {
//         var face = faces[i];
//         face.move();
//     }
// }

// class AndrewFace {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         this.img = createImg("../img/andrewFace/andrew.png");
//     }

//     move() {
//         var xOffset = Math.floor(random(0, 2));
//         var yOffset = Math.floor(random(0, 2));

//         var newPositionX = this.x + xOffset;
//         var newPositionY = this.y + xOffset;

//         this.img.size(40, 45);
//         this.img.position(newPositionX, newPositionY);
//         this.img.style("z-index", -100);
//     }
// }
