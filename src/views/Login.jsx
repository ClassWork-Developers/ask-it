import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useAuth0 } from "@auth0/auth0-react";
const user = [{ rol: "Estudiante" }, { rol: "Profesor" }];

function Login() {
  const [selected, setSelected] = useState(user[0]);
  const { loginWithRedirect } = useAuth0();
  let classButton = "w-full p-3  shadow-lg text-lg";
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <form className="rounded-lg w-full  shadow-xl m-3 p-5 flex flex-col items-center justify-center gap-7   ">
        <h1 className="font-hindi text-2xl">Inicio de Sesión</h1>
        <div className="w-3/4">
          <Listbox value={selected} onChange={setSelected}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">{selected.rol}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {user.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active
                            ? "bg-amber-100 text-amber-900"
                            : "text-gray-900"
                        }`
                      }
                      value={person}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {person.rol}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
        {selected.rol == "Estudiante" ? (
          <button
            className="p-3 shadow-lg rounded-lg font-exo"
            onClick={() => loginWithRedirect()}
          >
            Presiona para iniciar Sesión o registrarte!
          </button>
        ) : (
          <div className="w-full flex flex-col gap-2">
            <input
              className={classButton}
              type="email"
              name=""
              id=""
              placeholder="Correo electronico"
            />
            <input
              className={classButton}
              type="password"
              name=""
              placeholder="Contraseña"
              id=""
            />
            <button
              className={`${classButton} bg-gray-700 rounded-lg text-white font-hindi text-xl`}
              type="submit"
            >
              Enviar
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Login;
