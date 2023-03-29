import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import NavbarSesion from '../components/NavbarSesion';
import Inicio from '../views/Inicio';
import Creacion from '../components/Creacion';
import Formularios from '../components/Formularios';
import Buscar from '../components/Buscar';
import Respondidos from '../components/Respondidos';
import Edicion from '../components/Edicion';
import UndefinedPath from '../components/UndefinedPath';
// import Log from "../views/Log";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path='/' element={<Navbar />}>
          <Route index element={<Inicio />} />
        </Route>
        {/* Sesión iniciada */}
        <Route path='/sesion' element={<NavbarSesion />}>
          {/* Vista para elegir a partir de que plantilla hacer un formulario */}
          <Route index element={<Creacion />} />
          {/* Formularios hechos */}
          <Route path='Formularios' element={<Formularios />} />
          {/* Búsqueda de formularios */}
          <Route path='Buscar' element={<Buscar />} />
          {/* Formularios respondidos */}
          <Route path='Respondidos' element={<Respondidos />} />
          {/* Creación y/o edición de un formulario */}
          <Route path='Edicion' element={<Edicion />} />
        </Route>
        <Route path='*' element={<UndefinedPath />} />
      </Routes>
    </BrowserRouter>
  );
}
