import React, { useState } from 'react';
import bellIcon from '../../../shared/assets/images/tasks/bell.svg'; // Replace with the correct path
import './TopBar.css';

interface TopBarProps {
    onTabChange?: (tab: string) => void; // Optional callback for tab changes
    pageName: string;                    // The name of the current page
}

const TopBar: React.FC<TopBarProps> = ({ onTabChange = () => {}, pageName }) => {
    const [activeTab, setActiveTab] = useState('new');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
        onTabChange(tab);
    };

    // Function to render tabs and titles based on the page name
    const renderContentByPage = () => {
        switch (pageName) {
            case 'minitasks':
                return {
                    title: 'Микрозадания',
                    tabs: (
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
                    ),
                    showBell: true,
                };

            case 'finances':
                return {
                    title: 'Финансы',
                    tabs: (
                        <div className="finance-tabs">
                            <button
                                className={`tab ${activeTab === 'replenish' ? 'active' : ''}`}
                                onClick={() => handleTabClick('replenish')}
                            >
                                <span>Пополнить</span>
                            </button>
                            <button
                                className={`tab ${activeTab === 'withdraw' ? 'active' : ''}`}
                                onClick={() => handleTabClick('withdraw')}
                            >
                                <span>Вывести</span>
                            </button>
                            <button
                                className={`tab ${activeTab === 'history' ? 'active' : ''}`}
                                onClick={() => handleTabClick('history')}
                            >
                                <span>История</span>
                            </button>
                            <button
                                className={`tab ${activeTab === 'stats' ? 'active' : ''}`}
                                onClick={() => handleTabClick('stats')}
                            >
                                <span>Статистика</span>
                            </button>
                        </div>
                    ),
                    showBell: false,
                };

            case 'other':
                return {
                    title: 'Еще',
                    tabs: null,
                    showBell: false,
                };

            default:
                return {
                    title: '',
                    tabs: null,
                    showBell: false,
                };
        }
    };

    const { title, tabs, showBell } = renderContentByPage();

    return (
        <div className="top-bar">
            {/* Top section with bell and dynamically rendered tabs */}
            <div className="top-section">
                {showBell && <img src={bellIcon} alt="Notifications" className="bell-icon" />}
                {tabs}
            </div>

            {/* Page title dynamically rendered based on pageName */}
            <h1 className="page-title">{title}</h1>
        </div>
    );
};

export default TopBar;