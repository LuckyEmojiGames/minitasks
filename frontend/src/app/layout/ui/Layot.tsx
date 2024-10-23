import React from "react";
import { Header } from "../../../widgets/Header/index";
import styles from "./Layout.module.css";
import BottomNavbar from "../../../widgets/TasksNavBar/UI/TasksNavBar.tsx";
import {useLocation} from "react-router-dom";
import {ROUTES} from "../../routers/routes.ts";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const location = useLocation();
    const isTasksPage = [
        ROUTES.TASKS,
        ROUTES.TASKS_USERS,
        ROUTES.TASKS_MONEY,
        ROUTES.TASKS_BRIEFCASE,
        ROUTES.TASKS_OTHER
    ].some(route => location.pathname.includes(route));

  return (
    <div className={styles.layout}>
      <div className={styles.header}>
          {isTasksPage ? <BottomNavbar /> : <Header />}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
