import { Routes, Route } from 'react-router-dom';
import { Login } from '../auth/pages/Login';
import { PrincipalPage } from '../TakeTime/pages/PrincipalPage';

export const Routing = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<PrincipalPage />} />
    </Routes>
  );
};
