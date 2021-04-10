import React, { useState, useEffect } from 'react';

export default function Splash(props) {

  return (
    <div className="Splash">
      <div className="bkg"></div>
      <div className="darken"></div>
      <h1 className="Splash--title">What Else?</h1>
      <img onClick={() => window.location.href = '/home'} className="Splash--bo-face" src='/img/bo.png' />
      <div className="Splash--body">
        <img className="what-else" src='/img/what-else.png' />
        <div className="Splash--body-links">
          <a href="https://music.apple.com/us/album/what-else/1561449065">Apple Music</a>
          <a href="https://open.spotify.com/album/4I82YQMPZOoBVzJ55nKOmE?si=OJ1aVRf6Qxmj27HFKD-FJg">Spotify</a>
          <a href="https://dialupstuff.bandcamp.com/album/what-else">Bandcamp</a>
        </div>
      </div>
      <style jsx>{`
        .Splash {
          width: 100%;
          height: 100%;
          background: url("/img/what-else.png");
          background-size: 177%;
          background-position: center;
          min-height: 100vh;
          overflow: hidden;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .Splash--body {
          z-index: 3;
        }

        .Splash--bo-face {
          position: absolute;
          right: 30px;
          bottom: 30px;
          z-index: 4;
          width: 250px;
        }

        .Splash--bo-face {
          cursor: pointer;
        }

        .Splash--title {
          font-family: "RockSalt";
          font-size: 100px;
          position: absolute;
          z-index: 5;
          top: 30px;
          left: 30px;
          transform: rotate(-4deg);
        }

        .darken {
          background: rgba(0, 0, 0, .7);
          width: 100%;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 2;
        }

        .Splash .what-else, .Splash--body-links {
          width: 500px;
        }

        .Splash--body-links {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 24px;
        }

        .Splash--body-links a {
          color: white;
          font-family: "RedRose";
          font-size: 26px;
          text-decoration: underline;
        }

        @media screen and (max-width: 480px) {
          .Splash .what-else, .Splash--body-links {
            width: 300px;
          }

          .Splash--title {
            font-size: 56px;
            top: 45px;
            left: 15px;
          }

          .Splash--body-links {
            flex-direction: column;
          }

          .Splash--bo-face {
            width: 150px;
          }
        }
      `}</style>
    </div>
  )
}
