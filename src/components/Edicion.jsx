import { useState } from "react";
import Card from "./Cards";;
export default function Edicion() {
  const [show, setShow] = useState("hidden");
  const [cards, setCards] = useState([<Card/>]);
  const Agregar = (text) => {
	text ? setCards([...cards, <Card text={text}/>]):setCards([...cards, <Card/>]);
  };
  const Show = () => {
    show == "hidden" ? setShow("flex") : setShow("hidden");
  };
  return (
    <>
      <section className="relative isolate overflow-hidden bg-zinc-200 py-6 px-6 lg:px-8 rounded-md">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <figure>
            <figcaption>
              <img
                className="mx-auto h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <p className="font-semibold text-gray-900 text-center py-2">
                Judith Black
              </p>
            </figcaption>
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full p-3 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                  defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis."
                />
              </div>
            </blockquote>
          </figure>
        </div>
      </section>
      <ul className="bg-gray-300 w-full p-5 rounded-lg text-xl m-3 cursor-pointer">
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
          className={`${show} justify-between pt-7 pb-3 border-b-2 border-gray-400`}
          onClick={(e) => {
            Agregar(e.target.textContent);
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
          className={`${show} justify-between pt-7 pb-3 border-b-2 border-gray-400`}
          onClick={(e) => {
            Agregar(e.target.textContent);
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
      <div>{cards.map((pregunta) => pregunta)}</div>
      <p
        className="w-1/4 m-4 bg-gray-700 flex items-center justify-center font-exe font-bold p-3 cursor-pointer text-lg rounded-lg"
        onClick={() => {
          Agregar();
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
			<div>
				<button className="p-3 my-5 rounded-lg">Agregar pregunta</button>
				<button className="p-3 my-5  bg-gray-900 text-white rounded-lg">
					Guardar Formulario
				</button>
			</div>
    </>
  );
}
