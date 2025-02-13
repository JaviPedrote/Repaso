import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useRef';
import { login } from '../../redux/slices/authSlice'


export const LoginView = () => {
  const distpatch = useDispatch()
  

  const initialValues = {
    name: '',
    password: ''
  }

  const { name, password, onInputChange, onResetForm } = useForm(initialValues)


  const onSubmit = (e : React.BaseSyntheticEvent) => {
    e.preventDefault()
    const {name, password} = e.target
    distpatch(login({name: name.value, password: password.value}))
    onResetForm()
    localStorage.setItem('token', 'true')
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('/padel-bg.jpg')] bg-cover bg-center">
      <div className="w-full max-w-sm bg-white/90 shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Iniciar sesión</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="flex items-center gap-2 font-semibold text-gray-700">
              Usuario
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nombre de usuario"
              name='name'
              value={name}
              onChange={onInputChange}
              autoComplete='username'
            />
          </div>

          <div className="mb-4">
            <label className="flex items-center gap-2 font-semibold text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Contraseña"
              name='password'
              value={password}
              onChange={onInputChange}
              autoComplete='current-password'
            />
          </div>

          <button
            className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
            type='submit'
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
    
  );
}