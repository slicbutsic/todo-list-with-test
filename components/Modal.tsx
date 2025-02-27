// 'use client';

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (value: boolean) => boolean | void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ( { modalOpen, setModalOpen, children }) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
      <div className="modal-box">
        <form method="dialog">

          <button
          onClick={() => setModalOpen(false)}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <div className="modal-content">
          {children}
        </div>

      </div>
    </div>
  )
}
export default Modal;
