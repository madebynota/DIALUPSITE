import React from 'react';

import styles from './styles/SplashPage.css';
import classNames from 'classnames/bind';
import Utils from '../../utils.js';

let cx = classNames.bind(styles);

class SplashPage extends React.Component {
	constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.getElementById("bo").style.visibility = "hidden";
    document.getElementById("promoVideo").style.display = "block";
    document.getElementById("defaultCanvas0").style.height = "0px";

    var countDownDate = new Date("Sept 25, 2017 17:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      if (seconds < 10) {
        document.getElementById("timer").innerHTML = "0" + days + ":" + hours + ":"
      + minutes + ":" + "0" + seconds;
    } else {
        document.getElementById("timer").innerHTML = "0" + days + ":" + hours + ":"
      + minutes + ":" + seconds;
    }
      

      // If the count down is finished, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
      }
    }, 1000);
  }

  render() {
    return (
      <div className={cx("container")}>
			  <video id="promoVideo" className={cx("promoVideo")} src="img/vids/TAPTEASER.mp4" autoPlay loop></video>
        <h3 id="timer" className="labels"> timer here </h3>
        <h3 className="labels"> enter the site </h3>
      </div>
    );
  }
}

export default SplashPage;
