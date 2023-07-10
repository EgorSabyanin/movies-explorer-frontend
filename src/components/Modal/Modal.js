import { useRef } from 'react';
import './Modal.css';

function Modal({ isOpen, message, setIsOpen }) {
  const modal = useRef(null);

  function closeModal() {
    modal.current.classList.remove('modal_open');
    setIsOpen(false);
  }

  return (
    <div className={isOpen ? 'modal modal_open ' : 'modal'} ref={modal}>
      <div className='modal__container'>
        <p className='modal__message'>{message}</p>
        <button className='modal__close' onClick={closeModal}></button>
      </div>
    </div>
  );
}

export default Modal;
