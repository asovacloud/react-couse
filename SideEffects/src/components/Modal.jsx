import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children, modal, handleClose }) => {
  const dialog = useRef(null);

  useEffect(() => {
    if (modal) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [modal]);

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={handleClose}>
      {modal && children}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;
