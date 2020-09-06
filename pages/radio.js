import React from 'react';
export default class Radio extends React.Component {
  state = {
    width: -1,
    height: -1,
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }
  render() {
    const { width, height } = this.state;
    const isMobile = width < 500;
    const goHome = () => {
      window.location.href = '/home';
    }

    if (width === -1) {
      return null;
    }

    return !isMobile ? <DesktopRadio goHome={goHome} /> : <MobileRadio goHome={goHome} />;
  }
}

function DesktopRadio(props) {
  return (
    <div className='Radio'>
      <img className='back' onClick={props.goHome} src='/img/back.svg' alt='Go back'/>
      <h1> RADIO </h1>
      <iframe
        src="https://player.twitch.tv/?allowfullscreen&playsinline&player=twitch_everywhere&targetOrigin=https%3A%2F%2Fembed.twitch.tv&channel=dialupstuff&origin=https%3A%2F%2Fembed.twitch.tv"
        height="505"
        width="853"
        frameBorder="none"
        scrolling="<scrolling>"
        allowFullScreen={true}>
      </iframe>
      <style jsx> {`
        .Radio {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          background: #fed141;
        }

        .Radio h1 {
          color: white;
          font-family: "ArialRoundedMTBold";
          font-size: 4rem;
          margin-top: 150px;
          margin-bottom: 50px;
        }

        .back {
          position: absolute;
          top: 25px;
          left: 25px;
        }
      `} </style>
    </div>
  )
}


function MobileRadio(props) {
  return (
    <div className='MobileRadio'>
      <div className='header'>
        <img className='back' onClick={props.goHome} src='/img/back.svg' alt='Go back'/>
        <h1> RADIO </h1>
        <div></div>
      </div>
      <iframe
        src="https://player.twitch.tv/?allowfullscreen&playsinline&player=twitch_everywhere&targetOrigin=https%3A%2F%2Fembed.twitch.tv&channel=dialupstuff&origin=https%3A%2F%2Fembed.twitch.tv"
        height="300"
        width="400"
        frameBorder="none"
        scrolling="<scrolling>"
        allowFullScreen={true}>
      </iframe>
      <style jsx> {`
        .MobileRadio {
          width: 100%;
          height: calc(100vh - 50px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #fed141;
          padding: 25px;
          margin-top: 50px;
        }

        .MobileRadio h1 {
          color: white;
          font-family: "ArialRoundedMTBold";
          font-size: 2.5rem;
          margin: 0px;
        }

        .header {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 51px;
          position: absolute;
          top: 0;
          background: #fed141;
          border: none;
          left: 0;
          padding: 40px 0px;
        }

        .back {
          position: absolute;
          left: 10px;
          height: 17px;
          width: 17px;
        }
      `} </style>
    </div>
  )
}
