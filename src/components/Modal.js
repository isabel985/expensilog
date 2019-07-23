import React from 'react';

const Modal = (props) => {

  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-content-wrapper'>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Modal;