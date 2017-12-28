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
    document.getElementById("promoVideo").style.display = "block";
    document.getElementById("defaultCanvas0").style.height = "0px";

    var countDownDate = new Date("Dec 28, 2017 19:00:00").getTime();

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

      if (parseInt(hours) < 10) {
        hours = "0" + hours;
      }

      if (parseInt(minutes) < 10) {
        minutes = "0" + minutes;
      }

      if (parseInt(seconds) < 10) {
        seconds = "0" + seconds;
      }

      // Display the result in the element with id="demo"
      document.getElementById("timer").innerHTML = "0" + days + ":" + hours + ":"
      + minutes + ":" + seconds;
      
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
        <div className={cx("video-container")}>
          <iframe className={cx("promoVideo")} width="840" height="473" src="https://www.youtube.com/embed/SvMIA1UFeeE?rel=0" frameborder="0" allowfullscreen></iframe>
        </div>
        <div className={cx("extras")}>
            <h3 id="timer"></h3>
            <a className={cx("link")} href="/home">
              <div className={cx("playPauseButton")}>
                ENTER THE SITE
              </div>
            </a>
          </div>
      </div>
    );
  }
}

export default SplashPage;
