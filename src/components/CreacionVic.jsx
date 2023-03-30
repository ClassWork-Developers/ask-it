import {BarsArrowDownIcon, CheckCircleIcon, PlusIcon} from '@heroicons/react/20/solid';
import React, { useState } from "react";
export default function Creacion() {
  const [show, setShow] = useState("hidden");
  const [formTittle, setFormTittle] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [preguntas, setPreguntas] = useState([]);
  console.log(preguntas);


  const cambio = (text) => {
    console.log(text);
    let lista = document.getElementById("lista");
    let question = document.createElement("input");
    question.placeholder = "Escriba su pregunta aquí";
    question.value = text ? text : null;
    question.className =
      "bg-gray-400 p-3 text-lg rounded-sm my-2 placeholder:text-gray-800";
    lista.appendChild(question);
  };

  const envio = (e) => {
    e.preventDefault();
    let lista = document.getElementById("lista");
    let hijos = lista.childNodes;
    hijos.forEach((element) => {
      if (element.tagName == "INPUT") {
        preguntas.push(element.value);
      }
    });
  };

  const Show = () => {
    show == "hidden" ? setShow("flex") : setShow("hidden");
  };
  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-500 items-center justify-start p-5">
      <input
        className="w-full bg-transparent border-b-2 border-gray-600 p-3 rounded-md my-2 font-hex placeholder:text-gray-700 text-center text-xl"
        type="text"
        onChange={(e) => {
          setFormTittle(e.target.value);
        }}
        name=""
        id=""
        placeholder="Titulo del Formulario"
      />
      <input
        className="w-full bg-transparent border-b-2 border-gray-600 p-3 rounded-md my-2 font-hex placeholder:text-gray-700 text-center text-xl"
        type="text"
        onChange={(e) => {
          setFormDescription(e.target.value);
        }}
        name=""
        id=""
        placeholder="Descripcion Breve"
      />

      <ul className="bg-gray-300 w-full p-5 rounded-lg text-xl m-3">
        <h3
          className="flex items-center justify-between"
          onClick={() => Show()}
        >
          Sugerencias de preguntas
          <BarsArrowDownIcon/>
        </h3>
        <li
          className={`${show} justify-between pt-7 pb-3 border-b-2 border-gray-400`}
          onClick={(e) => {
            cambio(e.target.textContent);
          }}
        >
          como salirse de la carrera?{" "}
          <CheckCircleIcon/>
        </li>
        <li
          className={`${show} justify-between pt-7 pb-3 border-b-2 border-gray-400`}
          onClick={(e) => {
            cambio(e.target.textContent);
          }}
        >
          como salirse de la carrera?{" "}
          <CheckCircleIcon/>
        </li>
      </ul>

      <form
        className="w-full flex flex-col p-3"
        onSubmit={(e) => {
          envio(e);
        }}
      >
        <div className="flex flex-col" id="lista">
          <input
            className="bg-gray-400 placeholder:text-gray-800 p-3 text-lg rounded-sm my-2"
            type="text"
            name=""
            id=""
            placeholder="Escriba su pregunta aquí"
          />
        </div>
        <p
          className="w-1/2 bg-gray-700 flex items-center justify-center font-exe font-bold p-3 text-lg rounded-lg"
          onClick={() => {
            cambio();
          }}
        >
          Agregar pregunta
          <PlusIconu/>
        </p>

        <button
          className="p-3 text-xl bg-gray-900 text-white my-5 rounded-lg"
          type="submit"
        >
          Completado
        </button>
      </form>
    </div>
  );
}
