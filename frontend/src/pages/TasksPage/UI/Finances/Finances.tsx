import React, { useState } from "react";
import TopBar from "../../TopBar/TopBar.tsx";
import "./Finances.css";

const Finances: React.FC = () => {
    const [activeTab, setActiveTab] = useState('replenish');

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'replenish':
                return (
                    <div>Контент для Пополнить</div>
                );
            case 'withdraw':
                return <div>Контент для Вывести</div>;
            case 'history':
                return <div>Контент для История</div>;
            case 'stats':
                return <div>Контент для Статистика</div>;
            default:
                return null;
        }
    };

    return (
        <div>
            <TopBar pageName="money" onTabChange={handleTabChange} />
            {renderContent()}
        </div>
    );
}

export default Finances;