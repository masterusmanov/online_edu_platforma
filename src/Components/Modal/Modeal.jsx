import React, { useRef, useEffect } from 'react';

const Modal = ({ isOpen, closeModal, children }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [closeModal]);

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content" ref={modalRef}>
        <span className="close" onClick={closeModal}><i className='bx bx-chevrons-left text-[24px]'></i></span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
