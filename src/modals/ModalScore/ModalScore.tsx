import React, { FC, ReactNode } from 'react';
import './ModalScore.css'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return isOpen ? (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;