import React from 'react';

const ModalTwo = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-2 rounded shadow-lg w-96">
        <i onClick={onClose} className="bx bx-x text-[28px] text-[#77BF44] font-bold p-2 rounded float-end"></i>
        {children}
      </div>
    </div>
  );
};

export default ModalTwo;
