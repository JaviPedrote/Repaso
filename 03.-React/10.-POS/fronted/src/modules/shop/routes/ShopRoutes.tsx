// import { Routes } from 'react-router'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomeView } from '../Views/HomeView'
import { MainLayout } from '../layout/MainLayout'
import { DashboardView } from '../Views/DashboardView'

export const ShopRoutes = () => {
  return (
    <Routes>
      {/* Rutas principales */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomeView />} />
        <Route path="dashboard" element={<DashboardView />} />
      </Route>
      {/* Redirección general para rutas no encontradas */}
      <Route path="*" element={<Navigate to="/" />} />

    </Routes>
  )
}
