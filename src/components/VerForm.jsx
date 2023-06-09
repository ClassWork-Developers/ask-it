import axios from "axios";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import Swal from "sweetalert2";
function VerForm() {
  const [respuestas, setRespuestas] = useState([]);
  const [formulario, setFormulario] = useState([
    {
      nombre: "",
      descripcion: "",
      preguntas: [],
    },
  ]);
  let user = JSON.parse(localStorage.getItem("currentUser"));
  let config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  let param = useParams();
  const addRespuesta = (newRespuesta, id) => {
    let res = respuestas.filter((r) => r.id !== id);
    setRespuestas([...res, { id: id, respuesta: newRespuesta }]);
  };

  const { mutate: Preguntas } = useMutation(
    (data) => axios.get("http://localhost:3000/FullData"),
    {
      onSuccess: (response) => {
        setFormulario(response.data.Encuestas.filter((x) => x.id == param.id));
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
  const { mutate: Respuestas } = useMutation(
    (data) => axios.post("http://localhost:3000/CrearRespuesta", data, config),
    {
      onSuccess: (response) => {
        console.log(response.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Respuesta enviada",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          location.href = "/sesion/Formularios";
        });
      },
      onError: (err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: err.data.msg,
          showConfirmButton: true,
          timer: 1200,
        });
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    Respuestas({
      id_encuesta: formulario[0].id,
      id_usuario: user.id,
      respuestas,
    });
  };
  useEffect(() => {
    Preguntas();
  }, []);
  return (
    <>
      <section
        className={
          "relative isolate overflow-hidden bg-gray-200 dark:bg-gray-500 py-6 px-6 lg:px-8 rounded-md"
        }
      >
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
          </figure>
        </div>
      </section>
      <form
        className="flex flex-col w-full items-center gap-5"
        onSubmit={handleSubmit}
      >
        <h1 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-gray-300  group-hover:text-gray-600">
          {formulario[0].nombre}
        </h1>
        <p className="dark:text-gray-300">{formulario[0].descripcion}</p>
        {formulario[0].preguntas.map((x) => (
          <div
            key={x.id}
            className="w-1/2 mx-auto bg-zinc-100 dark:bg-zinc-500 p-5 my-3 mt-1 rounded-md"
          >
            <p className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              {x.pregunta}
            </p>
            <input
              onChange={(e) => {
                addRespuesta(e.target.value, x.id);
              }}
              value={respuestas.forEach((r) => {
                if (r.id == x.id) return r.respuesta;
              })}
              // value={respuestas.filter((r) => { if (r.id == x.id) return r.respuesta})}
              className="block w-full p-3 h-9 ml-3 mt-3 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
              type="text"
              name=""
              id=""
              placeholder="respuesta"
            />
          </div>
        ))}
        <button
          className="m-4 bg-gray-700 dark:bg-gray-500 text-white p-3 cursor-pointer rounded-lg"
          type="submit"
        >
          Enviar formulario
        </button>
      </form>
    </>
  );
}

export default VerForm;
