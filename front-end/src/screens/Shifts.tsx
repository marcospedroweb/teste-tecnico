import React from 'react';
import LogoTitle from '../components/LogoTitle.tsx';
import styles from './Shifts.module.css';
import { GlobalContext } from '../context/GlobalContext.tsx';
import { useNavigate } from 'react-router-dom';
import ShiftCard from '../components/ShiftCard.tsx';
import { endShiftService, starShiftService } from '../services/UserService.ts';
import TimeShift from '../components/TimeShift.tsx';

const Shifts = () => {
  const { user, setUser, startTime, setStartTime } =
    React.useContext(GlobalContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user && !user.nameCode) navigate('/');
  }, []);

  async function handleStartShift() {
    const response = await starShiftService(user.nameCode);
    if (response.data && response.data.startTime) {
      setUser(response.data);
      setStartTime(response.data.startTime);
    }
  }

  async function handleEndShift() {
    const response = await endShiftService(user.nameCode);

    if (response.data) {
      setUser(response.data);
      setStartTime(null);
    }
  }

  if (user)
    return (
      <div className="w-100">
        <LogoTitle />
        <div className={`${styles.container} p-4`}>
          <div
            className={`${styles.containerActualShift} d-flex justify-content-between align-items-center`}
          >
            <h2 className="text-white mb-0">
              Olá, <span className="fw-bold ">{user.nameCode}</span>
            </h2>
            {startTime && <TimeShift startTime={startTime} />}
            {!startTime && (
              <button className={styles.btnStart} onClick={handleStartShift}>
                Iniciar turno
              </button>
            )}
            {startTime && (
              <button className={styles.btnEnd} onClick={handleEndShift}>
                Parar turno
              </button>
            )}
          </div>
          <div>
            <h2 className={`mb-2 ${styles.shiftTitle}`}>Turnos anteriores</h2>
            <div className="d-flex justify-content-start align-items-center gap-4">
              {user.previousShifts.map(({ date, duration }) => {
                return (
                  <div key={date}>
                    <ShiftCard date={date} duration={duration} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Shifts;
