import { Link } from 'react-router-dom';
import { plantillas } from '../assets/constantes';
import Formulario from './Formulario';
import { useAuth0 } from '@auth0/auth0-react';
import { useMutation } from 'react-query';
import axios from 'axios';
import { useEffect } from 'react';

export default function Creacion() {
	const { user, isAuthenticated } = useAuth0();

	// Conexión con la API
	const { mutate: InicioE } = useMutation(
		(data) => axios.post('http://localhost:3000/AuthRoute', data),
		{
			onSuccess: (response) => {
				console.log(response.data);
				localStorage.setItem(
					'currentUser',
					JSON.stringify({
						nombre: response.data.nombre,
						token: response.data.token,
						status: response.data.status,
						icon: response.data.icon,
						id: response.data.id,
						type: 'estudiante',
					})
				);
			},
			onError: (err) => console.log(err),
		}
	);
	function setInicio(user) {
		InicioE({
			nombre: user.name,
			correo: user.email,
			clave: user.nickname,
			icon: user.picture,
		});
	}
	useEffect(() => {
		if (isAuthenticated) {
			/* console.log(user.name, user.email, user.nickname, user.picture); */
			setInicio(user);
		}
	}, [isAuthenticated]);

	return (
		<>
			<div className="bg-gray-100 dark:bg-gray-700 ">
				<div className="mx-auto max-w-7xl p-4 sm:px-6 lg:px-8">
					<h2 className="p-5 text-2xl font-bold text-gray-900 dark:text-gray-300">
						Crear a partir de un formulario en blanco o de una plantilla
					</h2>

					<div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
						{plantillas.map((plantilla, index) => (
							<Link to={'/sesion/edicion/:'+plantilla.theme} key={index}>
								<Formulario form={plantilla.theme} />
							</Link>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
