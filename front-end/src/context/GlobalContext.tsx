import React, { useState, ReactNode } from 'react';
import type { IUser } from '../services/UserService.struct';
import { useNavigate } from 'react-router-dom';

export const GlobalContext = React.createContext();

interface GlobalStorageProps {
  children: ReactNode;
}

export const GlobalStorage: React.FC<GlobalStorageProps> = ({ children }) => {
  const [user, setUser] = useState<IUser>();
  const [startTime, setStartTime] = useState<Date>();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user && user.nameCode) {
      navigate('/shifts');
    } else {
      navigate('/');
    }
  }, [user]);

  return (
    <GlobalContext.Provider value={{ user, setUser, startTime, setStartTime }}>
      {children}
    </GlobalContext.Provider>
  );
};
