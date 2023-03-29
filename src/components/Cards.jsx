import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Fragment, useState } from 'react';
function Respuesta(pregunta) {
	switch (pregunta) {
		case 1:
			return (
				<>
					<textarea name="" id="" cols="30" rows="10"></textarea>
				</>
			);
		case 2:
			<input type="checkbox" name="" id="" />;
			break;
		default:
			<input type="radio" name="" id="" />;
			break;
	}
}
export default function Card({text}) {
	const [tpreSeleccionado, setTpreSeleccionado] = useState(0);
	const [preguntas, setPreguntas] = useState([
		{
			pregunta: 'Define tu pregunta',
			descripcion: 'Agrega una descripción',
			type: 0,
			respuestas: [],
		},
	]);
	return (
		<>
			{preguntas.map((pregunta, preIndex) => (
				<div className="max-w-[750px] mx-auto" key={preIndex}>
					<div className="flex justify-end">
						{/* Serán iconos sin texto */}
						<button className="m-1 p-1 px-2">Duplicar</button>
						{/* Serán iconos sin texto */}
						<button className="m-1 p-1 px-2">Eliminar</button>
					</div>
					{/* card */}
					<div className="bg-zinc-100 p-5">
						<header className="w-full">
							<div className="flex">
								<p className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
									Pregunta:
								</p>
								<div className="mt-2 grow">
									<textarea
									value={text?text:null}
										id="pregunta"
										name="about"
										rows={3}
										className="block w-full p-3 h-9 ml-3 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
										defaultValue=""
									/>
								</div>
							</div>
							<div className="flex">
								<p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
									Description (Opcional)
								</p>
								<div className="mt-2 grow">
									<textarea
										id="pregunta"
										name="about"
										rows={3}
										className="block w-full p-3 h-9 ml-3 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
										defaultValue=""
									/>
								</div>
							</div>
						</header>
						<Respuesta pregunta={pregunta.type} />
						{/* {tipoDePregunta.map((tipo, tipIndex) =>
						)} */}
						<div></div>
						<div className="relative mt-8 flex items-center gap-x-4">
							<img src="" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
							<div className="text-sm leading-6">
								<p className="font-semibold text-gray-900">
									<span className="absolute inset-0" />
									post.authorname
								</p>
								<p className="text-gray-600">post.authorrole</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
}
