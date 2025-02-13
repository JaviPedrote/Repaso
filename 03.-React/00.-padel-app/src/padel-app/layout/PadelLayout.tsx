import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";

export const PadelLayout = () => {
  return (
    <div className="relative min-h-[calc(100vh-50px)] flex flex-col items-center justify-center">
    <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[url('/Padel_Blog.jpg')] before:bg-cover before:opacity-60 before:content-['']"></div>
    <div className="relative z-10 w-full">
    
      <NavBar />
      <Outlet />
    </div>
  </div>
  );
};
