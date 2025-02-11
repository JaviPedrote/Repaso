import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthRoutes } from '../auth/Routes/AuthRoutes';
import { ShopRoutes } from '../shop/routes/ShopRoutes';
// import { auth } from '../../types/AuthTypes';

const AppRouter = () => {

  type auth = "autenticado" | "noAutenticado" | "cargando";

  const autenticado: auth = "autenticado";
  


  return (
    <Routes>
      {(autenticado === "autenticado") ?
        <Route path="/auth/*" element={<AuthRoutes />} /> :
        <Route path="/*" element={<ShopRoutes />} />
      }
      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};

export default AppRouter;