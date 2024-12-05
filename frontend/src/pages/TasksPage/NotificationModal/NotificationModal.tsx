import React, { useEffect, useState } from 'react';
import './NotificationModal.css';

interface Notification {
    title: string;
    description: string;
    time: string;
}

interface NotificationModalProps {
    onClose: () => void;
}

const NotificationModal: React.FC<NotificationModalProps> = ({ onClose }) => {
    const [isClosing, setIsClosing] = useState(false);
    const [notifications, setNotifications] = useState<Notification[]>([]);

    const handleCloseClick = () => {
        setIsClosing(true);
        setTimeout(onClose, 250);
    };

    useEffect(() => {
        // Simulate fetching notifications from the backend
        const fetchNotifications = () => {
            setTimeout(() => {
                setNotifications([
                    { title: 'Доброе утро дорогие друзья!', description: 'Подпишитесь на нас в Telegram, следите за нашими новостями, розыгрышами!', time: '10:01' },
                    { title: 'Доброе утро дорогие друзья!', description: 'Подпишитесь на нас в Telegram, следите за нашими новостями, розыгрышами!', time: '10:02' },
                    { title: 'Доброе утро дорогие друзья!', description: 'Подпишитесь на нас в Telegram, следите за нашими новостями, розыгрышами!', time: '10:03' },
                ]);
            }, 0);
        };

        fetchNotifications();
    }, []);

    return (
        <div className={`notification-modal ${isClosing ? 'closing' : ''}`}>
            <div className="modal-content">
                <button className="close-button" onClick={handleCloseClick}>Закрыть</button>
                <h3 className="not-header">Уведомления</h3>
                <div className="notifications">
                    {notifications.length > 0 ? (
                        notifications.map((notification, index) => (
                            <div key={index} className="notification-item">
                                <h4>{notification.title}</h4>
                                <p>{notification.description}</p>
                                <span className="notification-time">{notification.time}</span>
                            </div>
                        ))
                    ) : (
                        <p>No new notifications</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NotificationModal;