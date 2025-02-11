import { Outlet } from "react-router";


export const AuthLayout = () => {


  return (
    <div>
      <nav className="w-full bg-gray-800 h-12 flex items-center outline-1 outline-amber-200">
        <h1 className="text-white ml-5 font-bold text-xl">POS<span className="text-green-500 text-sm ml-1">React/Nest</span></h1>
      </nav>
      <Outlet />
    </div>
  );
};
