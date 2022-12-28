import { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledDialog = styled.div`
  border-radius: var(--border-radius);
  border: 1px solid var(--link-text);
  background: #FFF;
  padding: 1rem;
  position: absolute;
  width: 350px;
  top: 50%;
  left: calc(50% - 175px);
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

type ModalProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({
  title,
  isOpen,
  onClose,
  children,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const lastActiveElement = useRef<HTMLElement | null>(null);

  const handleEscapeKey = useCallback((event: KeyboardEvent) => {
    if (event.code === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    const el = modalRef?.current;

    if (isOpen) {
      lastActiveElement.current = document.activeElement as HTMLElement | null;
      if (el) {
        el.style.display = 'block';
        document.addEventListener('keyup', handleEscapeKey);
      }
    } else {
      if (el) {
        el.style.display = 'none';
        document.removeEventListener('keyup', handleEscapeKey);
      }
      lastActiveElement?.current?.focus();
    }

    return () => {
      document.removeEventListener('keyup', handleEscapeKey);
    };
  }, [isOpen, handleEscapeKey]);

  return (
    <StyledDialog ref={modalRef}>
      <div>
        <h3>{title}</h3>

        {children}

        <ButtonWrapper>
          <button onClick={onClose}>Close</button>
        </ButtonWrapper>
      </div>
    </StyledDialog>
  );
};

export default Modal;
