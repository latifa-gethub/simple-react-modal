import React from 'react';
import PropTypes from 'prop-types';
import './modal.css';

const Modal = ({ isOpen, 
  onClose, contentModal,titlHeaderModal,styleTitleModal,styleModal,styleContent }) => {
 
    return (
      <>
      {isOpen && <div className="container-modal">
        <div className="modal" style={{...styleModal}}>
          <header className='header-modal' >
            <h3 style={{...styleTitleModal}}>{titlHeaderModal}</h3>
            <button className="modal-close-button" onClick={onClose}>
              X
            </button>
          </header>
          <div style={{styleContent}} className='contentModal'>{contentModal}</div>
          
        </div>
      </div>}
      </>
      
    );
  }
 
Modal.propTypes={
  isOpen:PropTypes.bool.isRequired,
  onClose:PropTypes.func,
  content:PropTypes.string,
  title:PropTypes.string,
  styleModal:PropTypes.object,
  styleContent:PropTypes.object
}
export default Modal;
