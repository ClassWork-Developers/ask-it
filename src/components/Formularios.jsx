import axios from "axios";
import { plantillas } from "../assets/constantes";
import { Link } from "react-router-dom";
import Formulario from "./Formulario";
import { useMutation } from "react-query";
import { useState, useEffect } from "react";
export default function Formularios() {
  const [forms, setForms] = useState([]);
  const { mutate: Formularios } = useMutation(
    (data) => axios.get("http://localhost:3000/FullData"),
    {
      onSuccess: (response) => {
        setForms(response.data.Encuestas);
	},
      onError: (err) => console.log(err),
    }
	);
  useEffect(() => {
    Formularios();
	console.log(forms);
  }, []);

  return (
    <>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="p-5 text-2xl font-bold text-gray-900">
            Formularios creados por ti
          </h2>
          {/* <Formulario form={} /> */}
          {forms.map((data) => (
            <div key={data.id} className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              <Link to={`/sesion/form/${data.id}`}>
                <Formulario form={plantillas[1]} name={data.nombre}/>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
