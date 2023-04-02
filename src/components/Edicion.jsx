import { useState } from "react";
import {
  ClipboardDocumentIcon,
  TrashIcon,
  BarsArrowDownIcon,
  CheckCircleIcon,
} from "@heroicons/react/20/solid";
import Card from "./Cards";
import { useMutation } from "react-query";
import axios from "axios";
export default function Edicion() {
  const [array_preguntas, setPreguntas] = useState([]);
  const [relaciones, setRelaciones] = useState([]);
  const [nombre, setNombre] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [description, setDescription] = useState("");
	function PreguntasForm(data) {
    let pregNew = []
    let pregList = []
    for (const pre in data) {
      if (data[pre].list == false) {
        pregNew.push(data[pre])
      } else {
        pregList.push(data[pre])
      }
    }
    setPreguntas(pregNew)
    setRelaciones(pregList)
	}
  let id_encuesta = '';
  let User = JSON.parse(localStorage.getItem("currentUser"));
  let config = {
    headers: {
      Authorization: `Bearer ${User.token}`,
    },
  };
  //Crear encuesta
  const { mutate: Encuestas } = useMutation(
    (data) => axios.post("http://localhost:3000/CrearEncuesta", data, config),
    {
      onSuccess: (response) => {
        id_encuesta = response.data.data.id;
        Preguntas({ array_preguntas, id_encuesta})
        Relacion({ relaciones, id_encuesta})
				setNombre("");
				setPeriodo("");
				setDescription("");
      },
      onError: (err) => console.log(err),
    }
  );
  const { mutate: Preguntas } = useMutation(
    (data) => axios.post("http://localhost:3000/CrearPregunta", data, config),
    {
      onSuccess: (response) => {
        console.log(response.data);
      },
      onError: (err) => console.log(err),
    }
  );
  const { mutate: Relacion } = useMutation(
    (data) => axios.post("http://localhost:3000/CrearRelacion", data, config),
    {
      onSuccess: (response) => {
        console.log(response.data);
      },
      onError: (err) => console.log(err),
    }
  );
  const handleSubmit = () => {
    Encuestas({ nombre, periodo });
  };
  let user = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <>
      <section className="relative isolate overflow-hidden bg-zinc-200 py-6 px-6 lg:px-8 rounded-md">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <figure>
            <figcaption>
              <img
                className="mx-auto h-10 w-10 rounded-full"
                src={user.icon}
                alt=""
              />
              <p className="font-semibold text-gray-900 text-center py-2">
                {user.nombre}
              </p>
            </figcaption>
            <blockquote className="grid grid-cols-2 gap-x-3 text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <div className="mt-2 col-span-1">
                <input
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  id="tittle"
                  className="block w-full h-9 p-3 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                  placeholder="Titulo del formulario"
                />
              </div>
              <div className="mt-2 col-span1">
                <input
                  value={periodo}
                  onChange={(e) => setPeriodo(e.target.value)}
                  id="periodo"
                  className="block w-full h-9 p-3 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                  placeholder="Periodo"
                />
              </div>
              <div className="mt-2 col-span-2">
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  id="about"
                  rows={3}
                  className="block w-full p-3 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                  placeholder="Descripción opcional"
                />
              </div>
            </blockquote>
          </figure>
        </div>
      </section>
      <div className="flex flex-col items-center">
        <Card form={PreguntasForm}/>
      </div>
      <div>
        <button
          className="p-3 my-5  bg-gray-900 text-white rounded-lg"
          onClick={() => {
            handleSubmit();
          }}
        >
          <CheckCircleIcon className="inline mr-3 h-6 w-6" />
          Guardar Formulario
        </button>
      </div>
    </>
  );
}
