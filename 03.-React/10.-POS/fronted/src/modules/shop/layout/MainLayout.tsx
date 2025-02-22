import { Outlet } from "react-router";
import createApi from "../../../api/createApi";



export const MainLayout = () => {

  const getSudaderas = async() => {
    const {data} =await createApi.get('/products')
    console.log(data.products)
  };
  return (
    <div>
      <nav className="w-full bg-gray-800 px-5 h-20 flex items-center justify-between">
        <h1 className="text-white font-bold text-3xl">
          POS<span className="text-green-500 text-lg ml-1">React/Nest</span>
        </h1>
        <div>
          <button className="btnNavbar" onClick={getSudaderas}>Sudaderas</button>
          <button className="btnNavbar">Tenis</button>
          <button className="btnNavbar">Lentes</button>
          <button className="w-50 h-9 rounded cursor-pointer bg-green-500 hover:scale-105 transition duration-300">
            Panel Administracion
          </button>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};
