import React, { useState } from 'react';
import bellIcon from '../../../shared/assets/images/tasks/bell.svg'; // Replace with the correct path
import './TopBar.css';

interface TopBarProps {
    onTabChange: (tab: string) => void;
}

const TopBar: React.FC<TopBarProps> = ({ onTabChange }) => {
    const [activeTab, setActiveTab] = useState('new');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
        onTabChange(tab);
    };

    return (
        <div className="top-bar">
            {/* Top section with bell and title */}
            <div className="top-section">
                {/* Tabs section */}
                <img src={bellIcon} alt="Notifications" className="bell-icon"/>
                <div className="task-tabs">
                    <button
                        className={`tab ${activeTab === 'new' ? 'active' : ''}`}
                        onClick={() => handleTabClick('new')}
                    >
                        <span>Новые</span>
                    </button>
                    <button
                        className={`tab ${activeTab === 'in-progress' ? 'active' : ''}`}
                        onClick={() => handleTabClick('in-progress')}
                    >
                        <span>В процессе</span>
                    </button>
                    <button
                        className={`tab ${activeTab === 'history' ? 'active' : ''}`}
                        onClick={() => handleTabClick('history')}
                    >
                        <span>История</span>
                    </button>
                </div>
            </div>
            <h1 className="page-title">Микрозадания</h1>
        </div>
    );
};

export default TopBar;