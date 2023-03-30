import { Link } from 'react-router-dom';
import { plantillas } from '../assets/constantes';
import Formulario from './Formulario';
export default function Creacion() {
	return (
		<>
			<div className="bg-gray-100">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<h2 className="p-5 text-2xl font-bold text-gray-900">
						Crear a partir de un formulario en blanco o de una plantilla
					</h2>

					<div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
						{plantillas.map((plantilla, index) => (
							<Link to="/sesion/edicion" key={index} >
								<Formulario form={plantilla} />
							</Link>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
