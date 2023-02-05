import { Routes, Route } from 'react-router-dom';
import GuestPage from '../pages/GuestPage/GuestPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import LoginPage from '../pages/LoginPage/LoginPage';

export const RoutesTest = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<GuestPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegistrationPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
}

