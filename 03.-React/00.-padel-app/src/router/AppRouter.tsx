
import { Route, Routes } from 'react-router-dom'
import { PrivateRouter } from './PrivateRoute'
import { LoginView } from '../auth/views/LoginView'
import { PublicRouter } from './PublicRoute'
import { PadelRoutes } from '../padel-app/routes/PadelRoutes'

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/login' element={
                    <PublicRouter>
                        <LoginView />
                    </PublicRouter>
                } />
                <Route path='/*' element={
                    <PrivateRouter>
                        <PadelRoutes />
                    </PrivateRouter>} />
            </Routes>
        </>
    )
}
