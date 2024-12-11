import React from 'react';
import styles from './ShiftCard.module.css';
import { formatTime } from '../helpers/FormatTime.ts';
import { formatDate } from '../helpers/FormatDate.ts';

const ShiftCard = ({ date, duration }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.date}>{formatDate(date)}</h3>
      <p className={`${styles.time} mx-auto`}>{formatTime(duration)}</p>
    </div>
  );
};

export default ShiftCard;
