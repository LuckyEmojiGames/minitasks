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
    const isTasksPage = location.pathname === ROUTES.TASKS;

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
