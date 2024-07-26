import React, { useState } from 'react';
import MyModal from './MyModal';

const Collage = () => {
  const [currentVideo, setCurrentVideo] = useState('');
  const [text, setText] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);

  const images = [
    {
      src: 'ateya',
      alt: 'Amee & Ateya Auntie',
      video: null,
      w: '3',
    },
    {
      src: 'ish',
      alt: 'Amee and Ish',
      video: 'Ish',
      w: '3',
    },
    {
      src: 'maliha',
      alt: 'Amee and Me!',
      video: 'Maliha',
      w: '2',
    },
    {
      src: 'noah',
      alt: 'Amee and Noah',
      video: 'Noah',
      w: '2',
    },
    {
      src: 'mishu',
      alt: 'Amee and Mishu',
      video: 'Mishu',
      w: '2',
    },
    {
      src: 'shuvy',
      alt: 'Amee and Shuvy',
      video: 'Shuvy',
      w: '3',
    },
    {
      src: 'ummad',
      alt: 'Amee and Ummi',
      video: 'Ummi',
      w: '3',
    },
  ];

  const playVideo = (videoSrc: string) => {
    setCurrentVideo(videoSrc);
  };

  const closeVideo = () => {
    setCurrentVideo('');
    setText('');
    setIsOpen(false);
  };

  return (
    <>
      <div className='container'>
        <div className='gallery'>
          {images.map((image, i) => (
            <div key={i} className={`gallery-container  w-${image.w} h-2`}>
              <div className='gallery-item'>
                <div className='image'>
                  <img
                    className='image'
                    src={`images/${image.src}.jpg`}
                    alt={image.alt}
                    onClick={() => {
                      if (image.video) {
                        playVideo(image.video);
                      } else {
                        setText(
                          `Dear Zoya baji,
                          Happy Birthday!!! Another year of an amazing life that deserves to be celebrated everyday.
                          Thank you for always being there for me. You are a true gift from Allah and a bright presence in my life.
                          
                          Lots of love, Ateya.`
                        );
                      }
                      setIsOpen(true);
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {modalIsOpen && (
        <MyModal
          isOpen={modalIsOpen}
          onVideoClose={closeVideo}
          text={text ? text : ''}
          textOnly={Boolean(text)}
          videoUrl={currentVideo ? currentVideo : ''}
        />
      )}
    </>
  );
};

export default Collage;
