import React, { ReactNode } from 'react';
import styles from './StubScreenUI.module.scss'

interface StubScreenUIProps {
  children: ReactNode;
}

interface StubScreenUIProps {
  children: ReactNode;
}

const StubScreenUI: React.FC<StubScreenUIProps> = ({ children }) => {
  return <div className={styles.stubScreenUI}>
    <div className={styles.stubScreenConatiner}>
    {children}
    </div>
  </div>;
};

export default StubScreenUI;