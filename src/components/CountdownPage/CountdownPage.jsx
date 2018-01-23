import React from 'react';

import styles from './styles/CountdownPage.css';
import classNames from 'classnames/bind';
import Utils from '../../utils.js';

let cx = classNames.bind(styles);

class CountdownPage extends React.Component {
	constructor(props) {
    super(props);
  }

  componentDidMount() {

    var countDownDate = new Date("Jan 23, 2018 19:00:00").getTime();

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

        document.getElementsByClassName("timer")[0].innerHTML = "0" + days + ":" + hours + ":"
        + minutes + ":" + seconds;
        
        // If the count down is finished, write some text 
        if (distance < 0) {
          clearInterval(x);
          document.getElementsByClassName("timer")[0].innerHTML = "EXPIRED";
        }
      }, 1000);
  }

  render() {
    return (
      <div className={cx("container")}>
        <img className={cx("joyride-img")} src="/img/graphics/joyride.png" />
        <div className={cx("extras")}>
            <h3 className={cx("timer")}></h3>
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

export default CountdownPage;
