import { createPortal } from "react-dom"
import './Notification.css';

type NotificationProps = {
    message: string;
    type: 'success' | 'error';
}

export const Notification = ({ message, type }: NotificationProps) => {
    return createPortal(
        <div className={`notification ${type}`}>
            {message}
        </div>,
        document.getElementById('notification') as HTMLElement
    )
}