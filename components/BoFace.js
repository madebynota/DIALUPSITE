/* eslint-disable no-param-reassign */
import React, { Component } from 'react';
import Sketch from 'react-p5';

class BoFaceAnimation {
  constructor(p5, id, imgPath, imgPath2, width, height, xPos, yPos, xVel, yVel, shouldSwap, updateVideo) {
    this.p5 = p5;
    this.id = id;
    this.width = width;
    this.height = height;
    this.xPos = xPos;
    this.yPos = yPos;
    this.xVel = xVel;
    this.yVel = yVel;
    this.shouldSwap = shouldSwap;
    this.imgPath = imgPath;
    this.imgPath2 = imgPath2;
    this.updateVideo = updateVideo;

    this.img = p5.createImg(this.imgPath);
    this.img.position(this.xPos, this.yPos);
    this.img.size(this.width, this.height);
    this.img.id(this.id);
    this.img.mousePressed(this.click.bind(this));
    this.img.touchStarted(this.preventZoom);
  }
  changeImage(imgSrc){
    // Clear original image from Canvas
    this.img.remove();

    // Setup new face image
    this.img = this.p5.createImg(imgSrc);
    this.img.position(this.xPos, this.yPos);
    this.img.size(this.width, this.height);
    this.img.id(this.id);
    this.img.mousePressed(this.click.bind(this));
    this.img.touchStarted(this.preventZoom);

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
      this.changeImage(this.imgPath2);
    }
    
    this.updateVideo();
  }
  preventZoom(e) {
    if(e.type !== 'touchstart') return; //not a touch-event 
    
    var t2 = e.timeStamp;
    var t1 = e.currentTarget.dataset.lastTouch || t2;
    var dt = t2 - t1;
    var fingers = e.touches.length;
    e.currentTarget.dataset.lastTouch = t2;

    if (!dt || dt > 500 || fingers > 1) return; // not double-tap

    e.preventDefault();
    e.target.click();
  }
}

class BoFace extends Component {
  face = null;

  setup = (p5, canvasParentRef) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    p5.createCanvas(width, height).parent(canvasParentRef);
    const {updateVideo} = this.props;
    let imgWidth = 0;
    let imgHeight = 0;

    if (width > 768){
      imgWidth = width / 7;
      imgHeight = width / 10;
    } else {
      imgWidth = width / 3;
      imgHeight = width / 5;
    }

    const xpos = p5.floor(p5.random(imgWidth, width - imgWidth));
    const ypos = p5.floor(p5.random(imgHeight, height - imgHeight));

    const xvel = p5.random(-4, 4);
    const yvel = p5.random(-4, 4);

    const boFaceUrl1 = "/img/bo.png"
    const boFaceUrl2 = "/img/bo2.png"

    this.face = new BoFaceAnimation(
      p5,
      "bo",
      boFaceUrl1,
      boFaceUrl2,
      imgWidth,
      imgHeight,
      xpos,
      ypos,
      xvel,
      yvel,
      true,
      updateVideo
    );
  };

  draw = p5 => {
    this.face.move();
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

export default BoFace;