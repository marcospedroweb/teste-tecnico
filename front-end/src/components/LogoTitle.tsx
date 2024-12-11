import React from 'react';
import styles from './LogoTitle.module.css';

const LogoTitle = () => {
  return (
    <h2 className={`text-white ${styles.title} mx-auto`}>
      Ponto <span className="fw-bold">Ilumeo</span>
    </h2>
  );
};

export default LogoTitle;
