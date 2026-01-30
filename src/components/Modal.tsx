import { useEffect } from "react";
import "../styles/tripModal.scss";

type ModalProps = {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
};

export const Modal = ({ isOpen, title, onClose, children }: ModalProps) => {
  useEffect(() => {
    if (isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modalOverlay" role="presentation" onClick={onClose}>
      <div
        className="modalDialog"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modalHeader">
          <h2 className="modalTitle">{title}</h2>
          <button
            type="button"
            className="modalClose"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="modalBody">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
