import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "../views/Inicio";
import Navbar from "../components/Navbar";
import UndefinedPath from "../components/UndefinedPath";
import Log from "../views/Log";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navbar />}>
					<Route index element={<Inicio />} />
				</Route>
				<Route path="/Log" element={<Log />} />
				<Route path="*" element={<UndefinedPath />} />
			</Routes>
		</BrowserRouter>
	);
}
