import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LOCATIONS } from 'src/constants/locations';
import notFoundImage from 'src/assets/images/notFound.png';
import styles from './NotFoundPage.module.scss';

const NoteFoundPage = () => {
  const navigate = useNavigate();

  const navigateToHome = () => navigate(LOCATIONS.home);

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={notFoundImage} alt={'not found image'} />
      </div>
      <div className={styles.notFoundContent}>
        <div className={styles.notFoundTitle}>
          <h3>404</h3>
        </div>
        <div className={styles.notFoundText}>
          <h3>Dude where is my page?</h3>
        </div>
        <button className={styles.goHomeBtn} onClick={navigateToHome}>
          Go home
        </button>
      </div>
    </div>
  );
};

export default NoteFoundPage;
