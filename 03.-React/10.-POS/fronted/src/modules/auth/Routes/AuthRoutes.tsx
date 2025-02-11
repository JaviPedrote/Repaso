import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { LoginView } from '../views/LoginView';
import { RegisterView } from '../views/RegisterView';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<LoginView />} />
        <Route path="login" index element={<LoginView />} />
        <Route path="register" element={<RegisterView />} />
        {/* Redirección para rutas no válidas dentro de "auth" */}
        <Route path="*" element={<Navigate to="/auth/login" />} />
      </Route>
    </Routes>)
}
