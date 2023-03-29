import React, { useState } from "react";
export default function Creacion() {
  const [show, setShow] = useState("hidden");
  const [formTittle, setFormTittle] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [preguntas, setPreguntas] = useState([]);
  console.log(preguntas);

  let nose = document.querySelectorAll("#nose");
  console.log(nose);

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
    console.log(preguntas);
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
            />
          </svg>
        </h3>
        <li
          id="nose"
          className={`${show} justify-between pt-7 pb-3 border-b-2 border-gray-400`}
          onClick={(e) => {
            cambio(e.target.textContent);
          }}
        >
          como salirse de la carrera?{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </li>
        <li
          id="nose"
          className={`${show} justify-between pt-7 pb-3 border-b-2 border-gray-400`}
          onClick={(e) => {
            cambio(e.target.textContent);
          }}
        >
          como salirse de la carrera?{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
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
