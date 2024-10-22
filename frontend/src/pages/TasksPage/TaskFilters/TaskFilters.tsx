import React, { useState } from "react";
import youtubeIcon from '../../../shared/assets/images/tasks/youtube.svg'; // Replace with correct paths
import telegramIcon from '../../../shared/assets/images/tasks/telegram.svg';
import instagramIcon from '../../../shared/assets/images/tasks/instagram.svg';
import './TaskFilters.css'

interface TaskFiltersProps {
    onFilterChange: (platform: string) => void;
}

const platformIcons: Record<string, string> = {
    'YouTube': youtubeIcon,
    'Telegram': telegramIcon,
    'Instagram': instagramIcon,
};

const TaskFilters: React.FC<TaskFiltersProps> = ({ onFilterChange }) => {
    const [activePlatform, setActivePlatform] = useState<string | null>(null);
    const platforms = ['YouTube', 'Telegram', 'Instagram'];

    const handleFilterClick = (platform: string) => {
        setActivePlatform(platform);
        onFilterChange(platform);
    };

    return (
        <div className="task-filters">
            {platforms.map((platform) => (
                <button
                    key={platform}
                    className={`filter-btn ${activePlatform === platform ? 'active' : ''}`}
                    onClick={() => handleFilterClick(platform)}
                >
                    <img src={platformIcons[platform]} alt={`${platform} icon`} width="16" height="16" />
                    {platform}
                </button>
            ))}
        </div>
    );
};

export default TaskFilters;