import React, { useState } from 'react';
import { Task } from '../../../entities/Task'; // Adjust the path if necessary
import TopBar from '../TopBar/TopBar';
import TaskFilters from '../TaskFilters/TaskFilters';
import './tasks.css';

const tasksData = [
    {
        title: "Перевести на английский договор",
        description: "Перевести на английский договор на разработку ПО на английский язык...",
        workers: 232,
        rewards: 1500,
        platform: "YouTube",
        status: "new"
    },
    {
        title: "Another Task",
        description: "Description of another task...",
        workers: 150,
        rewards: 1000,
        platform: "Instagram",
        status: "in-progress"
    },
    {
        title: "Create a marketing plan",
        description: "Develop a comprehensive marketing plan for the new product launch...",
        workers: 50,
        rewards: 2000,
        platform: "Telegram",
        status: "new"
    },
    {
        title: "Design a logo",
        description: "Design a new logo for our brand...",
        workers: 75,
        rewards: 500,
        platform: "Instagram",
        status: "in-progress"
    },
    {
        title: "Write a blog post",
        description: "Write a detailed blog post about our latest features...",
        workers: 20,
        rewards: 300,
        platform: "YouTube",
        status: "history"
    },
    {
        title: "Conduct a survey",
        description: "Conduct a customer satisfaction survey...",
        workers: 100,
        rewards: 800,
        platform: "Telegram",
        status: "new"
    },
    {
        title: "Develop a mobile app",
        description: "Develop a mobile app for our service...",
        workers: 10,
        rewards: 5000,
        platform: "Telegram",
        status: "in-progress"
    },
    {
        title: "Create a video tutorial",
        description: "Create a video tutorial for our new users...",
        workers: 5,
        rewards: 1000,
        platform: "Instagram",
        status: "history"
    },
    {
        title: "Translate website content",
        description: "Translate the entire website content to Spanish...",
        workers: 30,
        rewards: 1200,
        platform: "Telegram",
        status: "new"
    },
    {
        title: "SEO optimization",
        description: "Optimize our website for search engines...",
        workers: 40,
        rewards: 700,
        platform: "Instagram",
        status: "in-progress"
    }
];

const Tasks: React.FC = () => {
    const [activeTab, setActiveTab] = useState('new');
    const [activePlatform, setActivePlatform] = useState <string | null> (null);

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        setActivePlatform(null);
    };

    const handleFilterChange = (platform: string) => {
        setActivePlatform(platform);
    };

    const filteredTasks = tasksData.filter(task =>
        task.status === activeTab && (activePlatform ? task.platform === activePlatform : true)
    );

    return (
        <div className="tasks-page">
            <TopBar onTabChange={handleTabChange}/>
            <TaskFilters onFilterChange={handleFilterChange}/>
            <div className="tasks-container">
                {filteredTasks.map((task, index) => (
                    <Task
                        key={index}
                        title={task.title}
                        description={task.description}
                        workers={task.workers}
                        rewards={task.rewards}
                        platform={task.platform}
                    />
                ))}
            </div>
        </div>
    );
};

export default Tasks;