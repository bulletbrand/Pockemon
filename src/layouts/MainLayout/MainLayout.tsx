import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'src/components/Header/Header';
import styles from './MainLayout.module.scss';

const MainLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <div className={styles.main}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
