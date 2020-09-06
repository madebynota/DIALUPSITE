/* eslint-disable no-param-reassign */
import React, { Component } from 'react';
import Sketch from 'react-p5';

class AndrewFaceAnimation {
  constructor(p5, x, y) {
    this.p5 = p5;
    this.x = x;
    this.y = y;
    this.img = p5.createImg("/img/andrew.png");
  }

  move() {
    var xOffset = this.p5.floor(this.p5.random(0, 2));
    var yOffset = this.p5.floor(this.p5.random(0, 2));

    var newPositionX = this.x + xOffset;
    var newPositionY = this.y + yOffset;

    this.img.size(40, 45);
    this.img.position(newPositionX, newPositionY);
    this.img.style("z-index", -100);
  }
}

class AndrewFace extends Component {
  faces = [];
  amount = 200;

  setup = (p5, canvasParentRef) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    p5.createCanvas(width, height).parent(canvasParentRef);

    for (var i = 0; i < this.amount; i++) {
      var randomX = p5.floor(p5.random(40, window.innerWidth - 40));
      var randomY = p5.floor(p5.random(45, window.innerHeight - 45));
      this.faces.push(new AndrewFaceAnimation(p5, randomX, randomY));
    }
  };

  draw = p5 => {
    for (var i = 0; i < this.faces.length; i++) {
      var face = this.faces[i];
      face.move();
    }
  };

  render() {
    return (
      <div className="animationWrapper">
        <Sketch setup={this.setup} draw={this.draw} />
        <style jsx>
          {`
            .animationWrapper {
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              overflow: hidden;
            }
          `}
        </style>
      </div>
    );
  };
};
  
export default AndrewFace;
