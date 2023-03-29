import { Link } from 'react-router-dom';
import { plantillas } from '../assets/constantes';
export default function Creacion() {
	return (
		<>
			<div className="bg-gray-100">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<h2 className="text-2xl font-bold text-gray-900">
						Crear a partir de un formulario en blanco o de una plantilla
					</h2>

					<div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
						{plantillas.map((plantilla, index) => (
							<Link to="/sesion/edicion" key={index} >
								<div className="group relative">
									<div className="relative w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1">
										<div className={plantilla.colores[0]+' h-20'}> </div>
										<div className={plantilla.colores[1]+' h-20'}> </div>
										<div className={plantilla.colores[2]+' h-20'}> </div>
									</div>
									<p className="mt-6 text-lg text-bold">{plantilla.name}</p>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
