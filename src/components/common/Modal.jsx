/** Accessible modal with focus trap and keyboard dismissal. */
import { useEffect, useRef } from 'react';

export default function Modal({ isOpen, onClose, title, children }) {
  const modalRef = useRef(null);
  useEffect(() => {
    if (!isOpen) return undefined;
    const previous = document.activeElement;
    const modal = modalRef.current;
    const focusable = () => [...modal.querySelectorAll('button, a, input, select, [tabindex]:not([tabindex="-1"])')];
    focusable()[0]?.focus();
    const handleKey = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'Tab') {
        const items = focusable();
        const first = items[0];
        const last = items.at(-1);
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => { document.removeEventListener('keydown', handleKey); previous?.focus(); };
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  return <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}><section className="modal" ref={modalRef} role="dialog" aria-modal="true" aria-labelledby="modal-title"><header className="modal__header"><h2 id="modal-title">{title}</h2><button className="modal__close" onClick={onClose} aria-label="Close modal">×</button></header>{children}</section></div>;
}
