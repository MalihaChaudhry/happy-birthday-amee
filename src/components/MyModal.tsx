import React, { useEffect } from 'react';
import Video from './Video';
import Modal from 'react-modal';

type MyModalProps = {
  isOpen: boolean;
  styles?: object;
  textOnly?: boolean;
  text?: string;
  videoUrl?: string;
  onVideoClose?(): void;
};

const customStyles = {
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'tomato',
  },
};

const MyModal = ({
  isOpen,
  styles = {},
  textOnly = false,
  text,
  videoUrl,
  onVideoClose,
}: MyModalProps) => {
  return (
    <Modal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={onVideoClose}
      style={{ customStyles, ...styles }}
    >
      <div className='modal-contents'>
        <button className='close-button' onClick={onVideoClose}>
          ×
        </button>
        {textOnly && text ? (
          <p className='modal-text'>{text}</p>
        ) : (
          <Video src={videoUrl} />
        )}
      </div>
    </Modal>
  );
};

export default MyModal;
