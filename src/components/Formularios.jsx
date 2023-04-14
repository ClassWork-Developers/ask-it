import axios from "axios";
import { plantillas } from "../assets/constantes";
import { Link } from "react-router-dom";
import Formulario from "./Formulario";
import { useMutation } from "react-query";
import { useState, useEffect } from "react";


export default function Formularios({busqueda}) {
  let user = localStorage.getItem('currentUser');
  user = JSON.parse(user);
  const [forms, setForms] = useState([]);
  const { mutate: Formularios } = useMutation(
    (data) => axios.get(busqueda=='general'?"http://localhost:3000/FullData":`http://localhost:3000/DataFilter/${user.id}`),
    {
      onSuccess: (response) => {
        console.log(response)
        setForms(response.data.Encuestas);
        console.log(forms);
      },
      onError: (err) => console.log(err),
    }
  );
  useEffect(() => {
    Formularios();
  }, [forms]);

  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-700">
        <div className="mx-auto p-4 max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="p-5 text-2xl font-bold text-gray-900 dark:text-gray-300">Formularios</h2>
          {/* <Formulario form={} /> */}
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-6 lg:space-y-0">
            {forms.map((data) => (
              <Link key={data.id} to={busqueda == 'general' ?`/sesion/form/${data.id}`:`/sesion/respuestas/${data.id}`}>
                <Formulario form={plantillas[1]} name={data.nombre} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
