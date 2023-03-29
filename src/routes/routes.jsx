import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import NavbarSesion from "../components/NavbarSesion";
import Inicio from "../views/Inicio";
import Creacion from "../components/Creacion";
import Formularios from "../components/Formularios";
import Buscar from "../components/Buscar";
import Respondidos from "../components/Respondidos";
import UndefinedPath from "../components/UndefinedPath";
import {QueryClient, QueryClientProvider} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools';
const queryClient = new QueryClient()
export default function Router() {
	return (
		<QueryClientProvider client={queryClient}>
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
				<Route path="*" element={<UndefinedPath />} />
			</Routes>
		</BrowserRouter>
		<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}
