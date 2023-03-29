import { Popover, Transition } from '@headlessui/react';
import {
	ClipboardDocumentIcon,
	TrashIcon,
	PlusCircleIcon,
	MinusCircleIcon,
} from '@heroicons/react/20/solid';
import { useState } from 'react';
function Respuesta(pregunta, respuestas) {
	console.log(respuestas);
	switch (pregunta.pregunta) {
		case 'textarea':
			return (
				<fieldset>
					<label
						htmlFor="about"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						About
					</label>
					<div className="mt-2">
						<textarea
							id="about"
							name="about"
							rows={3}
							className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
							defaultValue={''}
						/>
					</div>
				</fieldset>
			);
		case 'checkbox':
			return (
				<fieldset>
					<div className="mt-6 space-y-6">
						<div className="relative flex gap-x-3">
							<div className="flex h-6 items-center">
								<input
									id="comments"
									name="comments"
									type="checkbox"
									className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
								/>
							</div>
							<div className="text-sm leading-6">
								<label htmlFor="comments" className="font-medium text-gray-900">
									Comments
								</label>
							</div>
						</div>
						<div className="relative flex gap-x-3">
							<div className="flex h-6 items-center">
								<input
									id="candidates"
									name="candidates"
									type="checkbox"
									className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
								/>
							</div>
							<div className="text-sm leading-6">
								<label htmlFor="candidates" className="font-medium text-gray-900">
									Candidates
								</label>
							</div>
						</div>
						<div className="relative flex gap-x-3">
							<div className="flex h-6 items-center">
								<input
									id="offers"
									name="offers"
									type="checkbox"
									className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
								/>
							</div>
							<div className="text-sm leading-6">
								<label htmlFor="offers" className="font-medium text-gray-900">
									Offers
								</label>
							</div>
						</div>
					</div>
					<div>
						<input type="text" name="" id="" placeholder="Agregar otra respuesta" />
						<button className="m-1 p-1 px-2">
							<MinusCircleIcon className="block h-6 w-6" aria-hidden="true" />
						</button>
						<button className="p-3 my-5 rounded-lg">
							<PlusCircleIcon className="block h-6 w-6" aria-hidden="true" />
						</button>
					</div>
				</fieldset>
			);
		default: //radio
			return (
				<fieldset>
					<div className="mt-6 space-y-6">
						<div className="flex items-center gap-x-3">
							<input
								id="push-everything"
								name="push-notifications"
								type="radio"
								className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
							/>
							<label
								htmlFor="push-everything"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Everything
							</label>
						</div>
						<div className="flex items-center gap-x-3">
							<input
								id="push-email"
								name="push-notifications"
								type="radio"
								className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
							/>
							<label
								htmlFor="push-email"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Same as email
							</label>
						</div>
						<div className="flex items-center gap-x-3">
							<input
								id="push-nothing"
								name="push-notifications"
								type="radio"
								className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
							/>
							<label
								htmlFor="push-nothing"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								No push notifications
							</label>
						</div>
					</div>
					<div>
						<input type="text" name="" id="" placeholder="Agregar otra respuesta" />
						<button className="m-1 p-1 px-2">
							<MinusCircleIcon className="block h-6 w-6" aria-hidden="true" />
						</button>
						<button className="p-3 my-5 rounded-lg">
							<PlusCircleIcon className="block h-6 w-6" aria-hidden="true" />
						</button>
					</div>
				</fieldset>
			);
	}
}
export default function Card() {
	const [preguntas, setPreguntas] = useState([
		{
			pregunta: 'Define tu pregunta',
			descripcion: 'Agrega una descripción',
			tipo: 'checkbox',
			respuestas: [],
		},
	]);
	return (
		<>
			{preguntas.map((pregunta, preIndex) => (
				<div className="max-w-[750px] mx-auto" key={preIndex}>
					<div className="flex justify-end">
						{/* Duplicar pregunta */}
						<button className="m-1 p-1 px-2">
							<ClipboardDocumentIcon className="block h-6 w-6" aria-hidden="true" />
						</button>
						{/* Eliminar pregunta */}
						<button className="m-1 p-1 px-2">
							<TrashIcon className="block h-6 w-6" aria-hidden="true" />
						</button>
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
						<div className="max-w-lg mx-auto">
							<Respuesta pregunta={pregunta.tipo} respuestas={pregunta.respuestas} />
						</div>
					</div>
				</div>
			))}
		</>
	);
}
