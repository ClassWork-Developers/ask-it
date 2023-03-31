import { useState } from 'react';
import {
	ClipboardDocumentIcon,
	TrashIcon,
	BarsArrowDownIcon,
	CheckCircleIcon,
	PlusIcon,
	MinusCircleIcon,
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
	return (
		<>
			<section className="relative isolate overflow-hidden bg-zinc-200 py-6 px-6 lg:px-8 rounded-md">
				<div className="mx-auto max-w-2xl lg:max-w-4xl">
					<figure>
						<figcaption>
							<img
								className="mx-auto h-10 w-10 rounded-full"
								src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
								alt=""
							/>
							<p className="font-semibold text-gray-900 text-center py-2">Judith Black</p>
						</figcaption>
						<blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
							<div className="mt-2">
								<textarea
									id="about"
									name="about"
									rows={3}
									className="block w-full h-9 p-3 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
									defaultValue="Titulo del formulario"
								/>
							</div>
							<div className="mt-2">
								<textarea
									id="about"
									name="about"
									rows={3}
									className="block w-full p-3 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
									defaultValue="Descripcion opcional"
								/>
							</div>
						</blockquote>
					</figure>
				</div>
			</section>
			<ul className="bg-gray-300 w-full p-5 rounded-lg text-xl m-3 cursor-pointer">
				<h3 className="flex items-center justify-between" onClick={() => Show()}>
					Sugerencias de preguntas
					<BarsArrowDownIcon className="h-6 w-6" />
				</h3>
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
			<div className="w-full flex flex-col items-center">
				{cards.map((pregunta, index) => (
					<div className="w-1/2 fl ex flex-col items-center" key="index">
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
								{pregunta.id}
							</button>
						</div>
						{pregunta.card}
					</div>
				))}
			</div>
			<p
				className="w-1/4 m-4 bg-gray-700 flex items-center justify-center font-exe font-bold p-3 cursor-pointer text-lg rounded-lg"
				onClick={() => {
					Agregar();
				}}
			>
				Agregar pregunta
				<PlusIcon className="h-6 w-6" />
			</p>
			<div>
				<button className="p-3 my-5 rounded-lg">Agregar pregunta</button>
				<button className="p-3 my-5  bg-gray-900 text-white rounded-lg">
					Guardar Formulario
				</button>
			</div>
		</>
	);
}
