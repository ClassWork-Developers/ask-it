import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import NavbarSesion from "../components/NavbarSesion";
import Inicio from "../views/Inicio";
import Creacion from "../components/Creacion";
import Formularios from "../components/Formularios";
import Buscar from "../components/Buscar";
import Respondidos from "../components/Respondidos";
import UndefinedPath from "../components/UndefinedPath";
// import Log from "../views/Log";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navbar />}>
					{/* Landing Page */}
					<Route index element={<Inicio />} />
				</Route>
				<Route path="/sesion" element={<NavbarSesion />}>
					{/* Sesión iniciada */}
					<Route path="Crear" element={<Creacion />} />
					<Route path="Formularios" element={<Formularios />} />
					<Route path="Buscar" element={<Buscar />} />
					<Route path="Respondidos" element={<Respondidos />} />
				</Route>
				{/* <Route path="/Log" element={<Log />} /> */}
				<Route path="*" element={<UndefinedPath />} />
			</Routes>
		</BrowserRouter>
	);
}
