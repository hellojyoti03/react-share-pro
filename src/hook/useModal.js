import Rc from 'react';

export default function useModal() {
  const [isOpen, setIsOpen] = Rc.useState(false);

  /**
   * @param {boolean} isOpen - Indicates whether the modal is currently open.
   * @param {Function} open - Opens the modal.
   * @param {Function} toggle - Toggles the modal state (opens if closed, closes if open).
   * @param {Function} close - Closes the modal.
   */
  const open = Rc.useCallback(() => {
    setIsOpen(true);
  }, []);

  const toggle = Rc.useCallback(() => {
    setIsOpen(!isOpen);
  }, []);

  const close = Rc.useCallback(() => {
    setIsOpen(false);
  }, []);

  return { isOpen, open, toggle, close };
}