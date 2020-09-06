import React from 'react';

export default function Background(props) {
  return (
    <video autoPlay loop src={props.video} className='Background'>
      <style jsx>{`
        .Background {
          position: fixed;
          top: 50%;
          left: 50%;
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          z-index: -100;
          transform: translateX(-50%) translateY(-50%);
          background-size: cover;
        }
      `}</style>
    </video>
  )
}
