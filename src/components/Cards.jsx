import { Popover, Transition } from "@headlessui/react";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/20/solid";
import {
  PlusIcon,
  ClipboardDocumentIcon,
  TrashIcon,
  BarsArrowDownIcon,
  CheckCircleIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
function Respuesta({ pregunta, respuestas }) {
  // const [AgregarCheckbox, setAgregarCheckbox] = useState([]);
  // const [AgregarRadio, setAgregarRadio] = useState([]);
  const [data, setData] = useState("");
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
  const [show, setShow] = useState("hidden");
  const [tpreSeleccionado, setTpreSeleccionado] = useState(0);
  const [questionType, setQuestionType] = useState("Texto");

  const [nextId, aggnextId] = useState(2);
  let User = JSON.parse(localStorage.getItem("currentUser"));
  let config = {
    headers: {
      Authorization: `Bearer ${User.token}`,
      "Content-Type": "multipart/form-data",
    },
  };
  const [preguntas, aggPregunta] = useState([{ id: 1, pregunta: "" }]);
  //Crear preguntas
  const { mutate: Preguntas } = useMutation(
    (data) => axios.post("http://localhost:3000/CrearPregunta", data, config),
    {
      onSuccess: (response) => {
        console.log(response.data);
      },
      onError: (err) => console.log(err),
    }
  );
  function Add_pregunta(preguntas /* id_encuesta */) {
    Preguntas({
      pregunta,
      id_encuesta: 4,
    });
    setPregunta("");
  }

  function Selected(response) {
    setQuestionType(response);
    console.log(key);
  }
  const Show = () => {
    show == "hidden" ? setShow("flex") : setShow("hidden");
  };
  return (
    <>
      <ul className="bg-gray-300 p-5 w-1/2 mx-auto rounded-lg text-xl m-3 cursor-pointer">
        <li>
          <h3
            className="flex items-center justify-between"
            onClick={() => Show()}
          >
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
      {preguntas.map((pre, preIndex) => (
        <div className="w-full" key={preIndex}>
          <div className="w-full flex justify-end">
              {/* Duplicar pregunta */}
              <button className="mt-1 p-1 px-2">
                <ClipboardDocumentIcon
                  className="block h-6 w-6"
                  aria-hidden="true"
                />
              </button>
              {/* Eliminar pregunta */}
              <button
                className="mt-1 p-1 px-2"
                onClick={() => {
                  setCards(cards.filter((x) => x.id !== pregunta.id));
                }}
              >
                <TrashIcon className="block h-6 w-6" aria-hidden="true" />
                {/* {pregunta.id} */}
              </button>
            </div>
          {/* card */}
          <div className="bg-zinc-100 p-5 my-3 mt-1 rounded-md">
            <header className="w-full">
              <div className="flex">
                <p className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  Pregunta:
                </p>
                <div className="mt-2 grow">
                  <input
                    id={pre.id}
                    className="block w-full p-3 h-9 ml-3 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                    placeholder="Define tu pregunta"
                    defaultValue={pre.pregunta}
                    onChange={(e) =>
                      aggPregunta(
                        preguntas.map((pregunta) => {
                          if (pregunta.id == pre.id) {
                            console.log(preguntas);
                            return { ...pregunta, pregunta: e.target.value };
                          } else {
                            return pregunta;
                          }
                        })
                      )
                    }
                  />
                </div>
              </div>
            </header>
            <div className="max-w-lg mx-auto">
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
              <div className="mt-2">
                <textarea
                  id="descripcion"
                  rows={3}
                  className="block w-full p-3 h-9 ml-3 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                  defaultValue={pre.descripcion}
                  placeholder="Descripción (Opcional)"
                />
              </div>
              <div className="mt-2">
                <textarea
                  disabled
                  id="respuesta"
                  rows={3}
                  className="block w-full p-3 h-9 ml-3 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                  defaultValue={""}
                  placeholder="Plasma tu respuesta"
                />
              </div>
              {/* <Respuesta
                pregunta={questionType}
                respuestas={pregunta.respuestas}
              /> */}
            </div>
          </div>
        </div>
      ))}
      <button
        className="m-4 bg-gray-700 text-white p-3 cursor-pointer rounded-lg"
        onClick={() => {
          aggPregunta([...preguntas, { id: nextId, pregunta: "" }]);
          aggnextId(nextId + 1);
        }}
      >
        <PlusIcon className="inline mr-3 h-6 w-6" />
        Agregar pregunta
      </button>
    </>
  );
}
