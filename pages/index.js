import React, { useState, useEffect } from 'react';
import browser from 'browser-detect';
import Background from '../components/Background';
import SiteMask from '../components/SiteMask';
import PageAnimation from '../components/PageAnimation';

const browserResult = browser();

export default class Home extends React.Component {
  state = {
    width: -1,
    height: -1,
    bkg: null,
    playingStatic: false,
    color: '#000000',
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

  setColor = color => {
    this.setState({ color: color });
  }

  setBkg = bkg => {
    this.setState({ bkg: bkg });
  }

  setPlayingStatic = val => {
    this.setState({ playingStatic: val })
  }
  render() {
    const { width, height, bkg, color, playingStatic } = this.state;
    const isMobile = width < 500;
    const videos = [
      {
          "vidPath": "/videos/aj-eggo.mp4",
          "color": "#FFFFFF"
      },
      {
          "vidPath": "/videos/archie-jerk.mp4",
          "color": "#FFFFFF"
      },
      {
          "vidPath": "/videos/archie-gun.mp4",
          "color": "#44BBEC"
      },
      {
          "vidPath": "/videos/bo-ollie.mp4",
          "color": "#ff2847"
      },
      {
          "vidPath": "/videos/teah-dave.mp4",
          "color": "#ff2847"
      },
      {
          "vidPath": "/videos/dave-mike-nbn2.mp4",
          "color": "#44BBEC"
      },
      {
          "vidPath": "/videos/jeff-skate.mp4",
          "color": "#FFB9A3"
      },
      {
          "vidPath": "/videos/party.mp4",
          "color": "#FFB9A3"
      },
      {
          "vidPath": "/videos/squad-car.mp4",
          "color": "#fdd848"
      },
      {
          "vidPath": "/videos/aj-pocket.mp4",
          "color": "#18faee"
      },
      {
          "vidPath": "/videos/slim-dillo.mp4",
          "color": "#18faee"
      },
      {
          "vidPath": "/videos/squad-eggos.mp4",
          "color": "#44BBEC"
      },
      {
          "vidPath": "/videos/teah-talk.mp4",
          "color": "#18faee"
      }
    ];
    const links = [
        {
            text: "MUSIC",
            path: "/home",
        },
        {
            text: "VIDEO",
            path: "https://www.youtube.com/dialupstuff"
        },
        {
            text: "CODE",
            path: "https://dialup.digital/"
        },
        {
            text: "RADIO",
            path: "/radio"
        },
        {
            text: "PHOTO",
            path: "https://instagram.com/dialupstuff"
        },
        {
            text: "BLOG",
            path: "https://dialupstuff.tumblr.com"
        },
        {
            text: "STORE",
            path: "https://store.dialupstuff.com/"
        },
        {
            text: "CONTACT",
            path: "mailto:mgmt@dialupstuff.com"
        }
    ];
    const logoImages = [
      '/img/logos/logo-0.png',
      '/img/logos/logo-1.png',
      '/img/logos/logo-2.png',
      '/img/logos/logo-3.png',
      '/img/logos/logo-4.png',
      '/img/logos/logo-5.png',
      '/img/logos/logo-6.png'
    ];

    const updateVideo = () => {
      const i = Math.floor(videos.length * Math.random());
      if (bkg !== videos[i].vidPath) {
        this.setPlayingStatic(true);
        setTimeout(() => {
          this.setPlayingStatic(false);
        }, 650);
        this.setBkg(videos[i].vidPath);
        this.setColor(videos[i].color);
      } else {
        updateVideo();
      }
    }

    const goHome = () => {
      window.location.href = '/home';
    }

    if (width === -1) {
      return null;
    }

    return !isMobile ? (
      <DesktopHome
        updateVideo={updateVideo}
        setPlayingStatic={this.setPlayingStatic}
        playingStatic={playingStatic}
        logos={logoImages}
        links={links}
        goHome={goHome}
        bkg={bkg}
        color={color}
      />
    ) : (
      <MobileHome
        updateVideo={updateVideo}
        setPlayingStatic={this.setPlayingStatic}
        playingStatic={playingStatic}
        logos={logoImages}
        links={links}
        height={height}
        width={width}
        goHome={goHome}
        bkg={bkg}
        color={color}
      />
    )
  }
}

function DesktopHome(props) {
  const { links, updateVideo, bkg, logos, color, playingStatic } = props;
  const randomIndex = Math.floor(Math.random() * 7);
  const wordmark = logos[randomIndex];
  const [linkColor, setLinkColor] = useState('#000000');
  const browserName = browserResult.name;

  if (browserName === 'safari') {
    document.body.style.backgroundColor = "#FAD141";
  }

  return (
    <div className='Home'>
      <PageAnimation updateVideo={updateVideo} />
      <Background video={bkg}/>
      { playingStatic && (
        <SiteMask />
      )}
      <img className='wordmark' src={wordmark} alt='Dial Up'/>
      <div className='links'>
        {links.map((link, i) => {
          return (
            <a key={i} href={link.path}> {link.text} </a>
          )
        })}
      </div>

      <style jsx>{`
        .Home {
          width: 100%;
          height: 100%;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .Home img, .links {
          width: 60%;
          max-width: 700px;
        }

        .Home .boFace {
          position: absolute;
          bottom: 50px;
          right: 50px;
          width: 155px;
          height: 108px;
        }

        .links {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          margin-top: 30px;
        }

        .links a {
          margin: 0px 5px;
          text-decoration: none;
          font-family: "ArialRoundedMTBold";
          color: ${browserName === 'safari' ? 'white' : color};
        }

        .links a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  )
}

function MobileHome(props) {
  const { links, updateVideo, bkg, logos, color } = props;
  const randomIndex = Math.floor(Math.random() * 7);
  const wordmark = logos[randomIndex];
  const boFace = bkg === null ? '/img/bo.png' : '/img/bo2.png';

  return(
    <div className="MobileHome">
      <img onClick={updateVideo} className='boFace' src={boFace} alt='Bo Face' />
      <img className='wordmark' src={wordmark} alt='Dial Up'/>
      <div className='links'>
        {links.map((link, i) => {
          return (
            <a key={i} href={link.path}> {link.text} </a>
          )
        })}
      </div>
      <style jsx> {`
        .MobileHome {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          padding: 25px;
          padding-top: 50px;
          background: ${ bkg === null ? 'white' : color };
        }

        .Home img, .links {
          width: 90%;
          max-width: 700px;
        }

        .MobileHome .boFace {
          position: absolute;
          bottom: 50px;
          right: 50px;
          width: 155px;
          height: 108px;
        }

        .links {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          margin-top: 30px;
        }

        .links a {
          margin: 7.5px 0px;
          font-size: 20px;
          text-decoration: none;
          font-family: "ArialRoundedMTBold";
          color: ${bkg === null || color === '#FFFFFF' ? 'black' : 'white'};
        }

        .wordmark {
          width: 90%;
        }
      `}</style>
    </div>
  )
}
