import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';
import { Button } from '../Button/Button';

interface ModalProps {
    children: React.ReactNode;
    onClose?: () => void;
    isOpen?: boolean;
}

export const Modal = ({ children, onClose, isOpen }: ModalProps) => {

    if (!isOpen) return null;

    return createPortal(
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <Button onClick={onClose}>x</Button>
                {children}
            </div>
        </div>,
        document.getElementById('modal-root') as HTMLElement
    )
}
