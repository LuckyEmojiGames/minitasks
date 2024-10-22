import React from "react";
import taskIcon from '../../../shared/assets/images/tasks/tasks.svg';
import usersIcon from '../../../shared/assets/images/tasks/refs.svg';
import moneyIcon from '../../../shared/assets/images/tasks/money.svg';
import briefcaseIcon from '../../../shared/assets/images/tasks/chemodan.svg';
import moreIcon from '../../../shared/assets/images/tasks/other.svg';
import logoutIcon from '../../../shared/assets/images/tasks/quit.svg';
import { Link, useLocation } from "react-router-dom";
import styles from "./TasksNavBar.module.css";
import { ROUTES } from "../../../app/routers/routes";

const navItems = [
    {
        name: "Tasks",
        icon: taskIcon,
        path: ROUTES.TASKS,
    },
    {
        name: "Users",
        icon: usersIcon,
        path: ROUTES.TASKS_USERS,
    },
    {
        name: "Money",
        icon: moneyIcon,
        path: ROUTES.TASKS_MONEY,
    },
    {
        name: "Briefcase",
        icon: briefcaseIcon,
        path: ROUTES.TASKS_BRIEFCASE,
    },
    {
        name: "More",
        icon: moreIcon,
        path: ROUTES.TASKS_OTHER,
    },
    {
        name: "Logout",
        icon: logoutIcon,
        path: ROUTES.HOME
    },
];

const BottomNavbar: React.FC = () => {
    const location = useLocation();
    return (
        <div className={styles.headerWrapper}>
            <nav className={styles.header}>
                {navItems.map(({ name, icon, path }, index) => {
                    const isActive = location.pathname === path;
                    return (
                        <Link key={index} to={path} className={styles.linkBox}>
                            <img
                                src={icon}
                                alt={name}
                                className={isActive ? styles.activeIcon : styles.icon}
                            />
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
};

export default BottomNavbar;