import React from "react";
import { Header } from "../../../widgets/Header/index";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <Header />
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
