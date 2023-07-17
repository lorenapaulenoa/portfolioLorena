import { Route, Routes } from "react-router-dom";
import { Principal } from "../pages/Principal";
import { NoEncontrado } from "../pages/NoEncontrado";
import { Registro } from "../pages/Registro";

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Principal />}/>
        <Route path="/registro" element={<Registro />}/>
        <Route path="*" element={<NoEncontrado />}/>
    </Routes>
  )
}
