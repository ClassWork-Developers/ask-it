import { useState } from 'react';
import {
	ClipboardDocumentIcon,
	TrashIcon,
	BarsArrowDownIcon,
	CheckCircleIcon,
	PlusIcon,
} from '@heroicons/react/20/solid';
import Card from './Cards';
export default function Edicion() {
	const GetId = () => {
		return Math.floor(Math.random() * 1000);
	};
	const [show, setShow] = useState('hidden');
	const [cards, setCards] = useState([{ id: GetId(), card: <Card key={0} /> }]);
	
	const Agregar = (text) => {
		text
		? setCards([...cards, { id: GetId(), card: <Card text={text} /> }])
		: setCards([...cards, { id: GetId(), card: <Card /> }]);
	};
	
	const Show = () => {
		show == 'hidden' ? setShow('flex') : setShow('hidden');
	};
	let User = JSON.parse(localStorage.getItem("currentUser"));
	return (
		<>
			<section className="relative isolate overflow-hidden bg-zinc-200 py-6 px-6 lg:px-8 rounded-md">
				<div className="mx-auto max-w-2xl lg:max-w-4xl">
					<figure>
						<figcaption>
							<img
								className="mx-auto h-10 w-10 rounded-full"
								src={User.icon}
								alt=""
							/>
							<p className="font-semibold text-gray-900 text-center py-2">{User.nombre}</p>
						</figcaption>
						<blockquote className="grid grid-cols-2 gap-x-3 text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
							<div className="mt-2 col-span-1">
								<input
									id="tittle"
									className="block w-full h-9 p-3 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
									defaultValue=""
									placeholder='Titulo del formulario'
									/>
							</div>
							<div className="mt-2 col-span1">
								<input
									id="periodo"
									className="block w-full h-9 p-3 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
									defaultValue=""
									placeholder='Periodo'
									/>
							</div>
							<div className="mt-2 col-span-2">
								<textarea
									id="about"
									rows={3}
									className="block w-full p-3 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
									defaultValue=""
									placeholder="Descripción opcional"
								/>
							</div>
						</blockquote>
					</figure>
				</div>
			</section>
			<ul className="bg-gray-300 p-5 rounded-lg text-xl m-3 cursor-pointer">
				<li>
					<h3 className="flex items-center justify-between" onClick={() => Show()}>
						Sugerencias de preguntas
						<BarsArrowDownIcon className="h-6 w-6" />
					</h3>
				</li>
				<li
					className={`${show} justify-between pt-7 pb-3 border-b-2 border-gray-400`}
					onClick={(e) => {
						Agregar(e.target.textContent);
					}}
				>
					como salirse de la carrera? <CheckCircleIcon className="h-6 w-6" />
				</li>
				<li
					className={`${show} justify-between pt-7 pb-3 border-b-2 border-gray-400`}
					onClick={(e) => {
						Agregar(e.target.textContent);
					}}
				>
					como salirse de la carrera? <CheckCircleIcon className="h-6 w-6" />
				</li>
			</ul>
			<div className="flex flex-col items-center">
				{cards.map((pregunta, index) => (
					<div className="w-1/2 flex flex-col items-center" key="index">
						<div className="w-full flex justify-end">
							{/* Duplicar pregunta */}
							<button className="m-1 p-1 px-2">
								<ClipboardDocumentIcon className="block h-6 w-6" aria-hidden="true" />
							</button>
							{/* Eliminar pregunta */}
							<button
								className="m-1 p-1 px-2"
								onClick={() => {
									setCards(cards.filter((x) => x.id !== pregunta.id));
								}}
							>
								<TrashIcon className="block h-6 w-6" aria-hidden="true" />
								{/* {pregunta.id} */}
							</button>
						</div>
						{pregunta.card}
					</div>
				))}
			</div>
			<button
				className="m-4 bg-gray-700 text-white p-3 cursor-pointer rounded-lg"
				onClick={() => {
					Agregar();
				}}
			>
				<PlusIcon className="inline mr-3 h-6 w-6" />
				Agregar pregunta
			</button>
			<div>
				<button className="p-3 my-5  bg-gray-900 text-white rounded-lg">
					Guardar Formulario
				</button>
			</div>
		</>
	);
}
