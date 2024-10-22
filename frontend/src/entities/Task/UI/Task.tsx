import workersIcon from "../../../shared/assets/images/task/workers.svg"
import moneyIcon from "../../../shared/assets/images/task/money.svg"
import platformIcon from "../../../shared/assets/images/task/platform.svg"
import "./Task.css"
import React from "react";

interface TaskProps {
    title: string
    description: string
    workers: number
    rewards: number
    platform: string
}

const Task: React.FC<TaskProps> = ({ title, description, workers, rewards, platform }) => {
    return (
        <div>
            <div className="task-wrapper">
                <div className="task-title"><span>{title}</span></div>
                <div className="task-description"><span>{description}</span></div>
                <div className="divider"></div>
                <div className="task-params">
                    <div className="task-workers">
                        <img src={workersIcon} alt="workersIcon"/>
                        <span>{workers}</span>
                    </div>
                    <div className="circle-divider"></div>
                    <div className="task-reward">
                        <img src={moneyIcon} alt="moneyIcon"/>
                        <span>{rewards}</span>
                    </div>
                    <div className="circle-divider"></div>
                    <div className="task-platform">
                        <img src={platformIcon} alt="platformIcon"/>
                        <span>{platform}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Task;