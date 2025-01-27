import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/LoginView";
import { Register } from "./views/RegisterView";
import {AuthLayout} from "./layout/AuthLayout";

export default function Router() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}
