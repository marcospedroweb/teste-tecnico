import React from 'react';
import styles from './App.module.css';
import Login from './screens/Login.tsx';
import { GlobalStorage } from './context/GlobalContext.tsx';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shifts from './screens/Shifts.tsx';

function App() {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <ToastContainer />
        <div className={styles.container}>
          <div
            className={`container-xl d-flex flex-column justify-content-center align-items-center`}
          >
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/shifts" element={<Shifts />} />
            </Routes>
          </div>
        </div>
      </GlobalStorage>
    </BrowserRouter>
  );
}

export default App;
