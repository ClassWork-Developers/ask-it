import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import NavbarSesion from "../components/NavbarSesion";
import Inicio from "../views/Inicio";
import Creacion from "../components/Creacion";
import Formularios from "../components/Formularios";
import Buscar from "../components/Buscar";
import Respondidos from "../components/Respondidos";
import Edicion from "../components/Edicion";
import UndefinedPath from "../components/UndefinedPath";
import Register from "../views/Register";
import Login from "../views/Login";
import VerForm from "../components/VerForm";
import VerRespuestas from "../components/VerRespuestas";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import PrivateRoutes from "./PrivateRoutes";

export default function Router() {
  const [darkToggle, setDarkToggle] = useState(false);
  return (
    <div className={`${darkToggle && "dark"}`}>
      <BrowserRouter>
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<Navbar />}>
            <Route index element={<Inicio />} />
            <Route path="registro" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
          {/* Sesión iniciada */}
          <Route path="/sesion" element={<NavbarSesion />}>
            {/* Vista para elegir a partir de que plantilla hacer un formulario */}
            <Route index element={<PrivateRoutes><Creacion /></PrivateRoutes>} />
            {/* Formularios hechos */}
            <Route
              path="Formularios"
              element={<PrivateRoutes><Formularios busqueda={"general"} /></PrivateRoutes>}
            />
            {/* Formularios del Usuario */}
            <Route
              path="Formularios/user"
              element={<PrivateRoutes><Formularios busqueda={"user"} /></PrivateRoutes>}
            />
            {/* Ver formulario con respuestas */}
            <Route path="respuestas/:id" element={<PrivateRoutes><VerRespuestas /></PrivateRoutes>} />
            {/* Búsqueda de formularios */}
            <Route path="Buscar" element={<PrivateRoutes><Buscar /></PrivateRoutes>} />
            {/* Formularios respondidos */}
            <Route path="Respondidos" element={<PrivateRoutes><Respondidos /></PrivateRoutes>} />
            {/* Creación y/o edición de un formulario */}
            <Route path="Edicion/:theme" element={<PrivateRoutes><Edicion /></PrivateRoutes>} />
            {/* Ver form individual */}
            <Route path="form/:id" element={<PrivateRoutes><VerForm /></PrivateRoutes>} />
          </Route>
          <Route path="*" element={<UndefinedPath />} />
        </Routes>
      </BrowserRouter>
      <div
        onClick={() => setDarkToggle(!darkToggle)}
        className="w-16 h-16 p-3 fixed bottom-5 right-3 rounded-full flex items-center justify-center bg-gray-600 transition-all duration-400 dark:bg-white dark:border-2 border-white dark:text-black cursor-pointer text-4xl text-white"
      >
        <MoonIcon className="dark:hidden" />
        <SunIcon className="hidden dark:block" />
      </div>
    </div>
  );
}
