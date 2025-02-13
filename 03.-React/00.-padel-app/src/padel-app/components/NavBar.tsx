
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/slices/authSlice'
import { Link } from 'react-router-dom'


export const NavBar = () => {
    const dispatch = useDispatch()

    const onLogout = async () => {
        dispatch(logout())
        localStorage.removeItem('token')
    }
    return (
        <div className='bg-linear-to-br from-thunderbird-500 to-thunderbird-700 flex items-center justify-between opacity-85 z-50'>
            <h1 className="text-2xl font-bold text-white ml-8 py-2">Padel</h1>
            <div className='flex font-semibold text-white w-[60vw] justify-around'>
                <Link to={'/'}><h4 className='hover:scale-110 transition'>Home</h4></Link>
                <Link to={'/matches'}><h4 className='hover:scale-110 transition'>Matches</h4></Link>
                <Link to={'/ranking'}><h4 className='hover:scale-110 transition'>Ranking</h4></Link>
                <Link to={'/dasboard'}><h4 className='hover:scale-110 transition'>Dasboard</h4></Link>
            </div>
            <button className="px-3 py-0.5 bg-secondary text-white rounded mr-4 cursor-pointer hover:bg-texto hover:text-white transition-all delay-50 duration-300 hover:scale-120" onClick={onLogout}>Salir</button>
        </div>
    )
}
