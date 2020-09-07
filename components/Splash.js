import Head from 'next/head'
export default class SplashPage extends React.Component {
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
    const dimensions = { 
      width: this.state.width,
      height: this.state.height
    };
    const isMobile = dimensions.width < 500;
    const goHome = () => {
      window.location.href = '/home';
    }

    if (dimensions.width === -1) {
      return null;
    }

    return !isMobile ? (
      <DesktopSplash dimensions={dimensions} goHome={goHome} />
    ) : (
      <MobileSplash dimensions={dimensions} goHome={goHome} />
    );
  }
}

function DesktopSplash(props) {
  const { width, height } = props.dimensions;
  return (
    <div className='container'>
      <img className='bkg' src='img/bkg.gif' alt='Background' />
      <img className='header' src='img/eyes_closed.png' alt='Eyes Closed' />
      <img
        className='album-cover'
        src='img/album_cover.jpg'
        alt='Eyes Closed Album'
      />
      <div className='links'>
        <a href='https://open.spotify.com/album/0KqQ7GrUvoWIJvNLA8NDQb'>
          {" "}
          Spotify{" "}
        </a>
        <a href='https://music.apple.com/gb/album/eyes-closed/1487917622'>
          {" "}
          Apple Music{" "}
        </a>
      </div>
      <div onClick={props.goHome} className='enter'>
        <button> ENTER SITE </button>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: 100%;
          height: 100%;
          padding: 25px;
        }

        .bkg {
          position: fixed;
          top: 0;
          left: 0;
          min-height: 100%;
          min-width: 1024px;
          width: 100%;
          height: auto;
          z-index: -1;
        }

        .album-cover {
          width: 500px;
          border: 1px solid white;
        }

        .header {
          width: 500px;
          margin-bottom: 50px;
        }

        .links {
          width: 500px;
          display: flex;
          margin: 40px 0px;
          align-items: center;
          justify-content: space-around;
        }

        .links a {
          color: white;
          font-weight: bold;
          text-decoration: underline;
          font-size: 24px;
        }

        .enter {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 120px;
          height: 50px;
          background: #c1c1c1;
          color: #000;
          white-space: nowrap;
        }

        .enter button {
          background: white;
          height: 50px;
          width: 120px;
          position: relative;
          left: 3px;
          top: -3px;
        }
      `}</style>
    </div>
  );
}

function MobileSplash(props) {
  return (
    <div className='MobileSplash'>
      <img className='header' src='img/eyes_closed.png' alt='Eyes Closed' />
      <img className='album-cover' src='img/album_cover.jpg' alt='Eyes Closed Album' />
      <div className='links'>
        <a href="https://open.spotify.com/album/0KqQ7GrUvoWIJvNLA8NDQb"> Spotify </a>
        <a href="https://music.apple.com/gb/album/eyes-closed/1487917622"> Apple Music </a>
      </div>
      <div onClick={props.goHome} className='enter'>
        <button> ENTER SITE </button>
      </div>
      <style jsx> {`
        .MobileSplash {
          width: 100%;
          height: 100vh;
          background: url('/img/bkg.gif');
          background-repeat: no-repeat;
          background-size: cover;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          padding: 25px;
        }

        .MobileSplash img {
          width: 100%;
        }

        .header {
          margin: 50px 0px;
        }

        .links {
          width: 100%;
          display: flex;
          margin-bottom: 25px;
          align-items: center;
          justify-content: space-around;
        }

        .links a {
          color: white;
          font-weight: bold;
          text-decoration: underline;
          font-size: 24px;
        }

        .album-cover {
          margin-bottom: 25px;
          border: 1px solid white;
        }

        .enter {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 120px;
          height: 50px;
          background: #c1c1c1;
          color: #000;
          white-space: nowrap;
        }

        .enter button {
          background: white;
          height: 50px;
          width: 120px;
          position: relative;
          left: 3px;
          top: -3px;
        }
      `}</style>
    </div>
  )
}
