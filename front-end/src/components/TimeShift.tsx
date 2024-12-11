import React from 'react';
import styles from './TimeShift.module.css';
import { calculateTimeDifference } from '../helpers/CalculateTime.ts';

const TimeShift = ({ startTime }) => {
  const [timePassed, setTimePassed] = React.useState('');

  React.useEffect(() => {
    const updateTime = () => {
      const timeString = calculateTimeDifference(startTime);
      setTimePassed(timeString);
    };

    updateTime();

    const intervalId = setInterval(updateTime, 60000);

    return () => clearInterval(intervalId);
  }, [startTime]);

  return (
    <div className={'text-white text-center'}>
      <h2 className={styles.title}>{timePassed}</h2>
      <span className={styles.span}>Horas de hoje</span>
    </div>
  );
};

export default TimeShift;
