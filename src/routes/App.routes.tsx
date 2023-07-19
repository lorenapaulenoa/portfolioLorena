import { Navigate, Route, Routes } from "react-router-dom";
import { Principal } from "../pages/Principal";
import { NoEncontrado } from "../pages/NoEncontrado";
import { Registro } from "../pages/Registro";
import { Tiempo } from '../pages/Tiempo';
import { Login } from "../pages/Login";
import { ProtectedRoutes } from "./Protected.routes";

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Principal />}/>
        <Route path="/registro" element={<Registro />}/>
        <Route path="/login" element={<Login />}/>
        <Route element={<ProtectedRoutes />}>
          <Route path="/tiempo" element={<Tiempo />}/>
        </Route>
        <Route path="*" element={<NoEncontrado />}/>
        <Route path="/porfolioLorena" element={<Navigate to ={"/"} />}/>


    </Routes>
  )
}
