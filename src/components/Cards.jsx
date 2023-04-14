import { Popover, Transition } from "@headlessui/react";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/20/solid";
import {
  PlusIcon,
  ClipboardDocumentIcon,
  TrashIcon,
  BarsArrowDownIcon,
  CheckCircleIcon,
} from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";
import { useMutation } from "react-query";
import axios from "axios";

//componente Card

export default function Card({ form }) {
  const [show, setShow] = useState("hidden");

  const [nextId, aggnextId] = useState(2);
  let User = JSON.parse(localStorage.getItem("currentUser"));
  let config = {
    headers: {
      Authorization: `Bearer ${User.token}`,
      "Content-Type": "multipart/form-data",
    },
  };
  const [select, setSelect] = useState([]);
  const [preguntas, aggPregunta] = useState([{ id: 1, pregunta: "", list: false, vof: false }]);
  const { mutate: PreguntasList } = useMutation(
    (data) => axios.get("http://localhost:3000/MostrarPreguntas"),
    {
      onSuccess: (response) => {
        setSelect(response.data);
      },
      onError: (err) => console.log(err),
    }
  );
  useEffect(() => {
		PreguntasList()
	}, [])
  const Show = () => {
    show == "hidden" ? setShow("flex") : setShow("hidden");
  };
  const eliminarPregunta = (id) => {
    const pre = preguntas.filter((a) => 
    a.id !== id)
    aggPregunta(pre)
  };
  return (
    <>
      <ul className="bg-gray-300  w-1/2 mx-auto rounded-lg text-xl m-3 cursor-pointer">
        <li>
          <h3
            className="flex p-5 items-center justify-between"
            onClick={() => Show()}
          >
            Sugerencias de preguntas
            <BarsArrowDownIcon className="h-6 w-6" />
          </h3>
        </li>
        {select.map((pre, preI) => (
          <li
            className={`${show} justify-between p-5 pt-7 pb-3 border-b-2 border-gray-400`}
            key={preI}
            onClick={() => {
              aggPregunta([...preguntas, { id: pre._id, pregunta: pre.pregunta, list: true, vof: false }]);
              form(preguntas);
            }}
          >
            {pre.pregunta} <CheckCircleIcon className="h-6 w-6" />
          </li>
        ))}
      </ul>
      {preguntas.map((pre, preIndex) => (
        <div className="w-full" key={preIndex}>
          <div className="w-full flex justify-end">
              {/* Duplicar pregunta */}
              <button 
                className="mt-1 p-1 px-2"
                onClick={() => {
                  aggPregunta([...preguntas, { id: nextId, pregunta: pre.pregunta, list: false, vof: false}]);
                  aggnextId(nextId + 1);
                  form(preguntas);
                }}
              >
                <ClipboardDocumentIcon
                  className="block h-6 w-6"
                  aria-hidden="true"
                />
              </button>
              {/* Eliminar pregunta */}
              <button
                className="mt-1 p-1 px-2"
                onClick={() => eliminarPregunta(pre.id)}
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
                  {pre.list == false ? (
                  <input
                    id={pre.id}
                    type="checkbox"
                    checked={pre.vof}
                    onChange={(e) =>
                      {aggPregunta(
                        preguntas.map((pregunta) => {
                          if (pregunta.id == pre.id) {
                            return { ...pregunta, vof: !pre.vof };
                          } else {
                            return pregunta;
                          }
                        })
                      );
                      form(preguntas);
                    }
                    }
                  />
                  ) : (<></>)}
                  <input
                    id={pre.id}
                    className="block w-full p-3 h-9 ml-3 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                    placeholder="Define tu pregunta"
                    value={pre.pregunta}
                    onChange={(e) =>
                      {aggPregunta(
                        preguntas.map((pregunta) => {
                          if (pregunta.id == pre.id) {
                            return { ...pregunta, pregunta: e.target.value };
                          } else {
                            return pregunta;
                          }
                        })
                      );
                      form(preguntas);
                    }
                    }
                  />
                </div>
              </div>
            </header>
            <div className="max-w-lg mx-auto">
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
            </div>
          </div>
        </div>
      ))}
      <button
        className="m-4 bg-gray-700 text-white p-3 cursor-pointer rounded-lg"
        onClick={() => {
          aggPregunta([...preguntas, { id: nextId, pregunta: "", list: false, vof: false}]);
          form(preguntas);
          aggnextId(nextId + 1);
        }}
      >
        <PlusIcon className="inline mr-3 h-6 w-6" />
        Agregar pregunta
      </button>
    </>
  );
}
