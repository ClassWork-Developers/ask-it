import { useParams } from "react-router-dom";
import { useMutation } from "react-query";
import { useEffect } from "react";
import { CheckCircleIcon, BarsArrowDownIcon } from "@heroicons/react/20/solid";
import Swal from "sweetalert2";
import axios from "axios";
import { useState } from "react";
function VerRespuestas() {
  let param = useParams();
  const [form, setForm] = useState([
    {
      nombre: "",
      descripcion: "",
      preguntas: [
        {
          respuestas: [
            {
              respuesta: "",
            },
          ],
        },
      ],
    },
  ]);
  const [show, setShow] = useState("hidden");
  const { mutate: Preguntas } = useMutation(
    (data) => axios.get("http://localhost:3000/FullData"),
    {
      onSuccess: (response) => {
        setForm(response.data.Encuestas.filter((x) => x.id == param.id));
      },
      onError: (err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "hbuh",
          showConfirmButton: true,
          timer: 1200,
        });
      },
    }
  );
  useEffect(() => {
    Preguntas();
  }, []);
  const Show = () => {
    show == "hidden" ? setShow("flex") : setShow("hidden");
  };
  return (
    <div className="flex flex-col w-full items-center gap-5">
      <h1 className="mt-3 text-2xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
        {form[0].nombre}
      </h1>
      <p>{form[0].descripcion}</p>
      {form[0].preguntas.map((pregunta) => (
        <div
          key={pregunta.id}
          className="w-full bg-zinc-100 p-5 my-3 mt-1 rounded-md"
        >
          <p className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            Pregunta: {pregunta.pregunta}
          </p>
          <ul className="bg-gray-300 w-1/2 mx-auto rounded-lg text-xl m-3 cursor-pointer">
            <h1 className="flex p-5 items-center justify-between" onClick={() => Show()} >
              Respuestas <BarsArrowDownIcon className="h-6 w-6" />
            </h1>
            {pregunta.respuestas.map((respuesta) => (
              <li key={respuesta._id} className={`${show} justify-start items-center gap-5 pt-7 pb-3 px-5 border-b-2 border-gray-400`} ><CheckCircleIcon className="h-6 w-6" />{respuesta.respuesta}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default VerRespuestas;
