import React from "react";
import employeeIcon from "../../../shared/assets/images/user/employee.svg";
import employerIcon from "../../../shared/assets/images/user/employer.svg";
import "./User.css";

interface UserProps {
    name: string;
    role: "employee" | "employer";
    tasksCompleted: number;
    profilePicture?: string;
}

const User: React.FC<UserProps> = ({ name, role, tasksCompleted, profilePicture }) => {
    return (
        <div className="user-wrapper">
            <div className="user-profile-picture">
                {profilePicture ? (
                    <img src={profilePicture} alt="Profile" />
                ) : (
                    <img src={role === "employee" ? employeeIcon : employerIcon} alt="Role Icon" />
                )}
            </div>
            <div className="user-info">
                <div className="user-name"><span>{name}</span></div>
                <div className="user-role"><span>{role === "employee" ? "Employee" : "Employer"}</span></div>
                <div className="user-tasks-completed"><span>Tasks Completed: {tasksCompleted}</span></div>
            </div>
        </div>
    );
};

export default User;
