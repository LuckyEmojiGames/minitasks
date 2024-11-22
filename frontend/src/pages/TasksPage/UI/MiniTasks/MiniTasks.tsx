import React, { useState } from 'react';
import { Task } from '../../../../entities/Task'; // Adjust the path if necessary
import TopBar from '../../TopBar/TopBar';
import TaskFilters from '../../TaskFilters/TaskFilters';
import { useUser } from '../../../../app/context'; // Import the useUser hook
import addTaskIcon from '../../../../shared/assets/images/tasks/addtask.png'
import './MiniTasks.css';

// Mock tasks data; replace owner with a telegram alias or user id.
const tasksData = [
    {
        title: "Перевести на английский договор",
        description: "Перевести на английский договор на разработку ПО на английский язык...",
        workers: 232,
        rewards: 1500,
        platform: "YouTube",
        status: "new",
        owner: "john_doe", // Use Telegram alias or user id
    },
    {
        title: "Another Task",
        description: "Description of another task...",
        workers: 150,
        rewards: 1000,
        platform: "Instagram",
        status: "in-progress",
        owner: "jane_smith", // Use Telegram alias or user id
    },
    {
        title: "Create a marketing plan",
        description: "Develop a comprehensive marketing plan for the new product launch...",
        workers: 50,
        rewards: 2000,
        platform: "Telegram",
        status: "new",
        owner: "john_doe",
    },
    {
        title: "Design a logo",
        description: "Design a new logo for our brand...",
        workers: 75,
        rewards: 500,
        platform: "Instagram",
        status: "in-progress",
        owner: "jane_smith",
    },
    // ... (other tasks)
];

const MiniTasks: React.FC = () => {
    const { user } = useUser(); // Get the user context
    const [activeTab, setActiveTab] = useState('new');
    const [activePlatform, setActivePlatform] = useState<string | null>(null);

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

    const displayedTasks = user.role === 'executor'
        ? filteredTasks
        : filteredTasks.filter(task => task.owner === user.name);

    return (
        <div className="tasks-page">
            <TopBar pageName="minitasks" onTabChange={handleTabChange} />
            <TaskFilters onFilterChange={handleFilterChange} />
            <div className="tasks-wrapper">
                <div className="tasks-container">
                    {displayedTasks.map((task, index) => (
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
                {user.role === 'customer' && (
                    <div className="create-task-button">
                        <img src={addTaskIcon} alt={"Add Task"}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MiniTasks;