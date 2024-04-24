import React from 'react';
import PropTypes from 'prop-types';
import './modal.css';

/**
 *  Function to create Modal Component modulable
 * @param {boolean} param0
 * @param {function} param1
 * @param {string} param2-3
 * @param {propertiesCss}param5-6-7
 * @returns {jsx element modal}
 */
const Modal = ({ isOpen, 
                 onClose,
                 contentModal,
                 headerModal,
                 titlHeaderModal,
                 styleTitleModal,
                 styleModal,
                 styleContent }) => {
                  if(isOpen){
                    console.log("etat isopen",isOpen)
                    document.body.classList.add('modal-open');
                  }else{
                    document.body.classList.remove('modal-open');
                     
                  }
 
    return (
      <div>
      {isOpen && <div className="container-modal">
        <div className="modal" style={{...styleModal}}>
          <header style={{...headerModal}} className='header-modal' >
            <h3 style={{...styleTitleModal}}>{titlHeaderModal}</h3>
            <button className="modal-close-button" onClick={onClose}>
              X
            </button>
          </header>
          <div style={{styleContent}} className='contentModal'>{contentModal}</div>
          
        </div>
      </div>}
      </div>      
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
