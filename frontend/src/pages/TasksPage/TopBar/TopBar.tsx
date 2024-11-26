import React, { useState, useEffect, useRef } from 'react';
import bellIcon from '../../../shared/assets/images/tasks/bell.svg'; // Replace with the correct path
import './TopBar.css';

interface TopBarProps {
    onTabChange?: (tab: string) => void; // Optional callback for tab changes
    pageName: string;                    // The name of the current page
}

const TopBar: React.FC<TopBarProps> = ({ onTabChange = () => {}, pageName }) => {
    const getDefaultTab = (pageName: string) => {
        switch (pageName) {
            case 'minitasks':
                return 'new';
            case 'money':
                return 'replenish';
            case 'other':
                return '';
            default:
                return '';
        }
    }

    const [activeTab, setActiveTab] = useState(() => getDefaultTab(pageName));
    const [sliderStyle, setSliderStyle] = useState({});
    const tabsRef = useRef<HTMLDivElement>(null);

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
        onTabChange(tab);
    };

    useEffect(() => {
        if (tabsRef.current) {
            const activeTabElement = tabsRef.current.querySelector(`.tab.active`);
            if (activeTabElement) {
                const { offsetLeft, offsetWidth } = activeTabElement as HTMLElement;
                setSliderStyle({
                    left: offsetLeft,
                    width: offsetWidth
                });
            }
        }
    }, [activeTab]);

    const renderContentByPage = () => {
        switch (pageName) {
            case 'minitasks':
                return {
                    title: 'Микрозадания',
                    tabs: (
                        <div className="task-tabs" ref={tabsRef}>
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
                            <div className="tab-slider" style={sliderStyle}></div>
                        </div>
                    ),
                    showBell: true,
                };

            case 'money':
                return {
                    title: 'Финансы',
                    tabs: (
                        <div className="finance-tabs" ref={tabsRef}>
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
                            <div className="tab-slider" style={sliderStyle}></div>
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
            
            case 'create-task':
                return {
                    title: 'Создать задание',
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
            <div className={`top-section ${tabs === null ? 'hidden' : ''}`}>
                {showBell && <img src={bellIcon} alt="Notifications" className="bell-icon" />}
                {tabs}
            </div>
            <h1 className={`page-title ${tabs === null ? 'other' : ''}`}>{title}</h1>
            {
                title==='Еще'
                &&
                <h2 className="page-subtitle">Страница вашего профиля</h2>
            }
        </div>
    );
};

export default TopBar;