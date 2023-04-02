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
import Register from '../views/Register'
import Login from '../views/Login'
import VerForm from '../components/VerForm';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path='/' element={<Navbar />}>
          <Route index element={<Inicio />} />
          <Route path='registro' element={<Register />} />
          <Route path='login' element={<Login />} />
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
          {/* Ver form individual */}
          <Route path='form/:id' element={<VerForm />} />
        </Route>
        <Route path='*' element={<UndefinedPath />} />
      </Routes>
    </BrowserRouter>
  );
}
