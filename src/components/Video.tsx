import React from 'react';

const Video = ({ src }) => {
  return (
    <video controls autoPlay className='video'>
      <source src={`../../videos/${src}.mp4`} type='video/mp4' />
    </video>
  );
};

export default Video;

// width='1080' height='1920'
