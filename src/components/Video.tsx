import React from 'react';

const Video = ({ src, onClose }) => {
  return (
    <div className='video-container'>
      <video controls autoPlay className='video'>
        <source src={src} type='video/mp4' />
      </video>
      <button className='close-button' onClick={onClose}>
        X
      </button>
    </div>
  );
};

export default Video;

// width='1080' height='1920'
