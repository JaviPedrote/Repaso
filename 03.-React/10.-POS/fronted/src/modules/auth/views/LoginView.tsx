import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";

export const LoginView = () => {
  const { name, password, onInputChange, onResetForm } = useForm({
    name: "",
    password: "",
  });

  const navigate = useNavigate();

  const loginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Iniciando sesión", name, password);
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('/padel-bg.jpg')] bg-cover bg-center">
      <div className="w-full max-w-sm bg-white/90 shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Iniciar sesión
        </h2>
        <form onSubmit={loginSubmit}>
          <div className="mb-4">
            <label className="flex items-center gap-2 font-semibold text-gray-700">
              Usuario
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nombre de usuario"
              name="name"
              value={name}
              onChange={onInputChange}
              autoComplete="username"
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
              name="password"
              value={password}
              onChange={onInputChange}
              autoComplete="current-password"
            />
          </div>

          <button
            className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
            type="submit"
          >
            Entrar
          </button>
        </form>
        <Link
          to={"/auth/register"}
          className="text-blue-500 underline place-content-center flex mt-3"
        >
          Pulse aquí si no tiene cuenta
        </Link>
      </div>
    </div>
  );
};
