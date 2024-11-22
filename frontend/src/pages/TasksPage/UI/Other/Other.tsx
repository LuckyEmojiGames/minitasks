import React from 'react';
import { useUser } from "../../../../app/context"; // Import the useUser hook
import TopBar from '../../TopBar/TopBar';
import './Other.css';
import profileIcon from "../../../../shared/assets/images/other/Profile.svg";
import notifyIcon from "../../../../shared/assets/images/other/Notify.svg";
import aboutIcon from "../../../../shared/assets/images/other/About.svg";
import checkIcon from "../../../../shared/assets/images/other/Check.svg";

const Other: React.FC = () => {
    const { user, setUser } = useUser(); // Use the user context
    const selectedRole = user.role === 'executor' ? 'executor' : 'customer';

    const handleRoleChange = (newRole: 'customer' | 'executor') => {
        setUser((prevUser: any) => ({ ...prevUser, role: newRole }));
    };

    return (
        <div className="tasks-page">
            <TopBar pageName="other" />
            <div className="tasks-page-content">
                <div className="settings-menu">
                    <div className="menu-item">
                        <img src={profileIcon} alt="profile" />
                        Профиль
                    </div>
                    <div className="menu-item">
                        <img src={notifyIcon} alt="notify" />
                        Уведомления
                    </div>
                    <div className="menu-item">
                        <img src={aboutIcon} alt="about" />
                        О приложении
                    </div>
                </div>
                <div className="role-selection">
                    <div
                        className={`role-option ${selectedRole === 'customer' ? 'selected' : ''}`}
                        onClick={() => handleRoleChange('customer')}
                    >
                        Я заказчик
                        {selectedRole === 'customer' ? <img src={checkIcon} alt='check' /> : ''}
                    </div>
                    <div
                        className={`role-option ${selectedRole === 'executor' ? 'selected' : ''}`}
                        onClick={() => handleRoleChange('executor')}
                    >
                        Я исполнитель
                        {selectedRole === 'executor' ? <img src={checkIcon} alt='check' /> : ''}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Other;