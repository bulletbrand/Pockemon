import React from 'react';
import styles from './Header.module.scss';
import logo from 'src/assets/images/logo.png';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.logo} src={logo} alt={'logo image'} />
    </div>
  );
};

export default Header;
