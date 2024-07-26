import React, { useEffect, useState } from 'react';
import Video from './Video';
import Modal from 'react-modal';

const customStyles = {
  content: {
    maxHeight: '90vh',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Collage = () => {
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  const images = [
    {
      src: '../../images/Amee&AteyaAuntie.jpg',
      alt: 'Amee & Ateya Auntie',
      video: null,
      w: '3',
    },
    {
      src: '../../images/Amee&Ish.jpg',
      alt: 'Amee and Ish',
      video: '../../videos/Noah.mp4',
      w: '3',
    },
    {
      src: '../../images/Amee&Me.jpg',
      alt: 'Amee and Me!',
      video: '../../videos/Maliha.mp4',
      w: '2',
    },
    {
      src: '../../images/Amee&Noey.jpg',
      alt: 'Amee and Noah',
      video: '../../videos/Noah.mp4',
      w: '2',
    },
    {
      src: '../../images/Amee&Mishu.jpg',
      alt: 'Amee and Mishu',
      video: '../../videos/Mishu.mp4',
      w: '2',
    },
    {
      src: '../../images/Amee&Shuvy2.jpg',
      alt: 'Amee and Shuvy',
      video: '../../videos/Shuvy.mp4',
      w: '3',
    },
    {
      src: '../../images/Amee&Ummad.jpg',
      alt: 'Amee and Ummi',
      video: '../../videos/Ummi.mp4',
      w: '3',
    },
  ];

  const playVideo = (videoSrc) => {
    setCurrentVideo(videoSrc);
    setIsOpen(true);
  };

  const closeVideo = () => {
    setCurrentVideo(null);
    setIsOpen(false);
  };

  const showMessage = () => {
    setIsOpen(true);
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeVideo}
      style={customStyles}
      contentLabel='Text Modal'
    >
      <p>
        Dear Zoya baji, Happy Birthday!!! Another year of an amazing life that
        deserves to be celebrated everyday. Thank you for always being there for
        me. You are a true gift from Allah and a bright presence in my life.
        Lots of love, Ateya.
      </p>
    </Modal>;
  };

  // useEffect(() => {
  //   playVideo(currentVideo);
  // }, [currentVideo]);

  return (
    <div className='container'>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeVideo}
        style={customStyles}
        contentLabel='Video Modal'
      >
        {currentVideo && <Video src={currentVideo} onClose={closeVideo} />}
      </Modal>
      <div className='gallery'>
        {images.map((image, i) => (
          <div key={i} className={`gallery-container  w-${image.w} h-2`}>
            <div className='gallery-item'>
              <div className='image'>
                <img
                  className='image'
                  src={image.src}
                  alt={image.alt}
                  onClick={
                    image.video
                      ? () => playVideo(image.video)
                      : () => showMessage()
                  }
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collage;
