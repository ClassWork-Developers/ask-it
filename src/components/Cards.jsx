import { Popover, Transition } from '@headlessui/react';
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

function Respuesta({ pregunta, respuestas }) {
	// const [AgregarCheckbox, setAgregarCheckbox] = useState([]);
	// const [AgregarRadio, setAgregarRadio] = useState([]);
	const [data, setData] = useState('');
	function updateData(data) {
		setData(data);
	}
	// function PreguntaCerrada(e) {
	//   e.preventDefault();
	//   if (pregunta == "Seleccion multiple") {
	//     setAgregarCheckbox([
	//       ...AgregarCheckbox,
	//       <div className="relative flex gap-x-3">
	//         <div className="relative flex gap-x-3">
	//           <div className="flex h-6 items-center">
	//             <input
	//               id={data}
	//               name={data}
	//               type="checkbox"
	//               className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
	//             />
	//           </div>
	//           <div className="text-sm leading-6">
	//             <label htmlFor={data} className="font-medium text-gray-900">
	//               {data}
	//             </label>
	//           </div>
	//         </div>
	//       </div>,
	//     ]);
	//   } else if (pregunta == "Seleccion simple") {
	//     setAgregarRadio([
	//       ...AgregarRadio,
	//       <div className="flex items-center gap-x-3">
	//         <input
	//           id={data}
	//           name={data}
	//           type="radio"
	//           className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
	//         />
	//         <label
	//           htmlFor={data}
	//           className="block text-sm font-medium leading-6 text-gray-900"
	//         >
	//           {data}
	//         </label>
	//       </div>,
	//     ]);
	//   }
	//   setData("");
	// }
	// switch (pregunta) {
	//   case "Texto":
	//     return (
	//       <fieldset>
	//         <div className="mt-2">
	//           <textarea
	//             id="about"
	//             name="about"
	//             rows={3}
	//             className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
	//             defaultValue={""}
	//           />
	//         </div>
	//       </fieldset>
	//     );
	//   case "Seleccion multiple":
	//     return (
	//       <fieldset>
	//         <div className="mt-6 space-y-6">
	//           {AgregarCheckbox.map((check) => check)}
	//           <div className="relative flex gap-x-3">
	//             <div className="flex h-6 items-center">
	//               <input
	//                 id="comments"
	//                 name="comments"
	//                 type="checkbox"
	//                 className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
	//               />
	//             </div>
	//             <div className="text-sm leading-6">
	//               <label htmlFor="comments" className="font-medium text-gray-900">
	//                 Comments
	//               </label>
	//             </div>
	//           </div>
	//         </div>
	//         <form
	//           onSubmit={(e) => {
	//             PreguntaCerrada(e);
	//           }}
	//         >
	//           <input
	//             onChange={(e) => {
	//               updateData(e.target.value);
	//             }}
	//             value={data}
	//             type="text"
	//             name=""
	//             placeholder="Agregar otra respuesta"
	//           />
	//           <button className="p-3 my-5 rounded-lg">
	//             <PlusCircleIcon className="block h-6 w-6" aria-hidden="true" />
	//           </button>
	//         </form>
	//       </fieldset>
	//     );
	//   default: //radio
	//     return (
	//       <fieldset>
	//         <div className="mt-6 space-y-6">
	//           {AgregarRadio.map((radio) => radio)}
	//           <div className="flex items-center gap-x-3">
	//             <input
	//               id="push-everything"
	//               name="push-notifications"
	//               type="radio"
	//               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
	//             />
	//             <label
	//               htmlFor="push-everything"
	//               className="block text-sm font-medium leading-6 text-gray-900"
	//             >
	//               Everything
	//             </label>
	//           </div>
	//         </div>
	//         <form
	//           onSubmit={(e) => {
	//             PreguntaCerrada(e);
	//           }}
	//         >
	//           <input
	//             onChange={(e) => {
	//               updateData(e.target.value);
	//             }}
	//             value={data}
	//             type="text"
	//             name=""
	//             placeholder="Agregar otra respuesta"
	//           />
	//           <button className="p-3 my-5 rounded-lg">
	//             <PlusCircleIcon className="block h-6 w-6" aria-hidden="true" />
	//           </button>
	//         </form>
	//       </fieldset>
	//     );
	// }
}
export default function Card({ text, key }) {
	const [tpreSeleccionado, setTpreSeleccionado] = useState(0);
	const [questionType, setQuestionType] = useState('Texto');
	const [preguntas, setPreguntas] = useState([
		{
			pregunta: 'Define tu pregunta',
			descripcion: 'Agrega una descripción',
			tipo: questionType,
			respuestas: [],
		},
	]);

	function Selected(response) {
		setQuestionType(response);
		console.log(key);
	}
	return (
		<>
			{preguntas.map((pregunta, preIndex) => (
				<div className="w-full mx-auto" key={preIndex}>
					{/* card */}
					<div className="bg-zinc-100 p-5 my-3">
						<header className="w-full">
							<div className="flex">
								<p className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
									Pregunta:
								</p>
								<div className="mt-2 grow">
									<textarea
										value={text ? text : null}
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
							{/* <div className="flex justify-start my-2">
                <p className="w-full mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
                  Seleccione el tipo de respuesta:{" "}
                </p>
                <select
                  className="block w-full p-3 h-9 ml-3 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    Selected(e.target.value);
                  }}
                  name=""
                  id=""
                >
                  <option defaultValue value="Texto">
                    Texto
                  </option>
                  <option value="Seleccion simple">Seleccion simple</option>
                  <option value="Seleccion multiple">Seleccion multiple</option>
                </select>
              </div> */}
						</header>
						<div className="max-w-lg mx-auto">
							<fieldset>
								<div className="mt-2">
									<textarea
										disabled
										id="about"
										name="about"
										rows={3}
										className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
										defaultValue={''}
									/>
								</div>
							</fieldset>
							{/* <Respuesta
                pregunta={questionType}
                respuestas={pregunta.respuestas}
              /> */}
						</div>
					</div>
				</div>
			))}
		</>
	);
}
