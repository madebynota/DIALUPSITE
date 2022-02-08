import React, { useState, useEffect } from "react";
import cx from "classnames";

export default function Splash(props) {
  const [value, setValue] = useState("");
  const [btnText, setBtnText] = useState("Submit");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const submit = async () => {
    setBtnText("Submitting...");
    const now = new Date();
    if (value.length > 5) {
      try {
        fetch("https://api.apispreadsheets.com/data/20925/", {
          method: "POST",
          headers: {
            accessKey: "3bd3edf62069d5f941fb604167b79cec",
            secretKey: "bb81436ebae61133beed6c6026833e5d",
          },
          body: JSON.stringify({
            data: { Email: value, Time: now.toString() },
          }),
        }).then((res) => {
          if (res.status === 201) {
            setSubmitted(true);
            setValue("");
            setBtnText("Submit");
          } else {
            setError(true);
            setBtnText("Try again");
          }
        });
      } catch (e) {
        console.log(e);
      }
    } else {
      setError(true);
    }
  };

  const formText = submitted
    ? "RSVP submitted. See you 12/10!"
    : error
    ? "Please try again with a different email address."
    : "RSVP with your email below";
  return (
    <div className="Splash">
      <div className="bkg"></div>
      <div className="darken"></div>
      <img
        onClick={() => (window.location.href = "/home")}
        className="Splash--bo-face"
        src="/img/bo.png"
      />
      <div className="Splash--body">
        <img
          className={cx("flyer-desktop", "flyer")}
          src="/img/one_last_kiss.jpg"
        />
        <div className="Splash--body-links">
          <h5 className="form--header">{formText}</h5>
          <input
            className="form--input"
            onChange={(e) => setValue(e.target.value)}
            type="text"
            value={value}
            placeholder="Email"
          />
          <button onClick={submit} className="form--submit">
            {btnText}
          </button>
        </div>
      </div>
      <style jsx>{`
        .Splash {
          width: 100%;
          height: 100%;
          background: url("/img/one_last_kiss.jpg");
          background-size: 177%;
          background-position: center;
          min-height: 100vh;
          overflow: hidden;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
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
          background: rgba(0, 0, 0, 0.7);
          width: 100%;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 2;
        }

        .Splash .flyer,
        .Splash--body-links {
          width: 500px;
        }

        .Splash--body-links {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 24px;
        }

        .Splash--body-links a {
          color: white;
          font-family: "RedRose";
          font-size: 26px;
          text-decoration: underline;
        }

        .form--header {
          margin-bottom: 16px;
        }

        .form--input {
          background: transparent;
          border: 1px solid white;
          color: white;
          margin-bottom: 16px;
          outline: none;
          padding-left: 4px;
        }

        .form--submit {
          background: transparent;
          padding: 4px 8px;
          border: 1px solid white;
          color: white;
        }

        .form--submit:hover {
          background: white;
          color: black;
        }

        @media screen and (max-width: 480px) {
          .Splash .flyer,
          .Splash--body-links {
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

          .flyer {
            position: relative;
            top: -50px;
          }

          .Splash--bo-face {
            width: 150px;
            bottom: 30px;
          }
        }
      `}</style>
    </div>
  );
}
