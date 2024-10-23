import React, { useState } from 'react';
import { Task } from '../../../entities/Task'; // Adjust the path if necessary
import TopBar from '../TopBar/TopBar';
import TaskFilters from '../TaskFilters/TaskFilters';
import './Tasks.css';

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
    },
    {
        title: "Update user documentation",
        description: "Update the user documentation for the latest software release...",
        workers: 15,
        rewards: 600,
        platform: "YouTube",
        status: "new"
    },
    {
        title: "Fix bugs in the app",
        description: "Identify and fix bugs in the mobile application...",
        workers: 25,
        rewards: 1500,
        platform: "Telegram",
        status: "in-progress"
    },
    {
        title: "Create social media posts",
        description: "Create engaging social media posts for our new campaign...",
        workers: 50,
        rewards: 400,
        platform: "Instagram",
        status: "new"
    },
    {
        title: "Develop a chatbot",
        description: "Develop a chatbot for customer support...",
        workers: 5,
        rewards: 3000,
        platform: "Telegram",
        status: "in-progress"
    },
    {
        title: "Design a flyer",
        description: "Design a promotional flyer for our event...",
        workers: 10,
        rewards: 200,
        platform: "Instagram",
        status: "history"
    },
    {
        title: "Write a press release",
        description: "Write a press release for our new product launch...",
        workers: 8,
        rewards: 500,
        platform: "YouTube",
        status: "new"
    },
    {
        title: "Conduct a webinar",
        description: "Conduct a webinar on our latest features...",
        workers: 3,
        rewards: 1000,
        platform: "Telegram",
        status: "in-progress"
    },
    {
        title: "Translate marketing materials",
        description: "Translate marketing materials to French...",
        workers: 20,
        rewards: 800,
        platform: "Instagram",
        status: "new"
    },
    {
        title: "Create an infographic",
        description: "Create an infographic for our annual report...",
        workers: 5,
        rewards: 600,
        platform: "YouTube",
        status: "history"
    },
    {
        title: "Optimize database performance",
        description: "Optimize the performance of our database...",
        workers: 10,
        rewards: 2000,
        platform: "Telegram",
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
            <div className="tasks-wrapper">
                <div className="tasks-container">
                    { filteredTasks.map((task, index) => (
                        <Task
                            key={ index }
                            title={ task.title }
                            description={ task.description }
                            workers={ task.workers }
                            rewards={ task.rewards }
                            platform={ task.platform }
                        />
                    )) }
                </div>
            </div>

        </div>
    );
};

export default Tasks;