import axios from "axios";
import Formulario from "./Formulario";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
function VerForm() {
  const [respuestas, setRespuestas] = useState([]);
  const [formulario, setFormulario] = useState([{
    nombre : ''
  }]);
  let param = useParams()
  const addRespuesta = (newRespuesta) => {
    setRespuestas([...respuestas, newRespuesta])
  };

  const { mutate: Preguntas } = useMutation(
    (data) => axios.get("http://localhost:3000/FullData"),
    {
      onSuccess: (response) => {
        setFormulario(response.data.Encuestas.filter(x=>x.id ==param.id))
    },
      onError: (err) => console.log(err),
    }
  );
  useEffect(() => {
      Preguntas();
      console.log(formulario); 
  }, []);
  
  return (
    <>
      <form className="flex flex-col w-full items-center gap-5">
        <h1 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          {formulario[0].nombre}
        </h1>
        <p></p>

        <div className="w-full bg-zinc-100 p-5 my-3 mt-1 rounded-md">
          <p className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            esta es la pregunta
          </p>
          <input
            onChange={() => {
              addRespuesta(e.target.value);
            }}
            className="block w-full p-3 h-9 ml-3 mt-3 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
            type="text"
            name=""
            id=""
            placeholder="respuesta"
          />
        </div>
        <button
          className="m-4 bg-gray-700 text-white p-3 cursor-pointer rounded-lg"
          type="submit"
        >
          Enviar formulario
        </button>
      </form>
    </>
  );
}

export default VerForm;
