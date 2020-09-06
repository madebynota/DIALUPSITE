import React, { useState } from 'react';

export default function SiteMask(props) {
  return (
    <video autoPlay loop src='/videos/static.mp4' className='Static'>
      <style jsx>{`
        .Static {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: auto;
          height: auto;
          min-height: 100%;
          min-width: 100%;
          position: absolute;
          z-index: 10;
        }
      `}</style>
    </video>
  )
}
