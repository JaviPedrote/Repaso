
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../redux/store";


export const PublicRouter = ({ children }: { children: ReactNode }) => {

const isLoggedIn = useSelector((state:RootState) => state.auth.isLoggedIn);

return (!isLoggedIn)
  ? children 
  : <Navigate to={'/'}/>
}
