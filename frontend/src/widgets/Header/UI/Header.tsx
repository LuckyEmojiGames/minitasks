import React from "react";
import styles from "./header.module.css";
///<reference types="vite-plugin-svgr/client" />
import AcademyIcon from "../../../shared/assets/images/header/academyCap.svg?react";
import TasksIcon from "../../../shared/assets/images/header/tasks.svg?react";
import LogoIcon from "../../../shared/assets/images/header/logoIcon.svg?react";
import StarIcon from "../../../shared/assets/images/header/star.svg?react";
import PeopleIcon from "../../../shared/assets/images/header/people.svg?react";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../../app/routers/routes";

const navItems = [
  {
    name: "Academy",
    icon: <AcademyIcon width="30px" height="30px" fillOpacity={0.5} />,
    path: ROUTES.ACADEMY,
  },
  {
    name: "Tasks",
    icon: <TasksIcon width="30px" height="30px" fillOpacity={0.5}/>,
    path: ROUTES.TASKS,
  },
  {
    name: "EVO",
    icon: <LogoIcon width="70px" height="40px" fillOpacity={0.5} />,
    path: ROUTES.HOME,
  },
  {
    name: "Rating",
    icon: <StarIcon width="30px" height="30px" fillOpacity={0.5}/>,
    path: ROUTES.RAITING,
  },
  {
    name: "Profile",
    icon: <PeopleIcon width="30px" height="30px" fillOpacity={0.5} />,
    path: ROUTES.PROFILE,
  },
];

const Header: React.FC = () => {
  const location = useLocation();
  return (
    <div className={styles.headerWrapper}>
      <nav className={styles.header}>
        {navItems.map(({ name, icon, path }, index) => {
          const isActive = location.pathname === path;
          const clonedIcon = React.cloneElement(icon, {
            style: { fillOpacity: isActive ? 1 : 0.5 },
          });
          return (
            <Link key={index} to={path} className={styles.linkBox}>
              <svg className={index === 2 ? styles.logoIcon : styles.icon}>
                {clonedIcon}
              </svg>
              <div className={isActive? styles.nameIconActive : styles.nameIcon}>{name}</div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Header;
