import ComoFunciona from "../components/ComoFunciona";
import Testimonios from "../components/Testimonios";
import ContactoSeccion from "../components/ContactoSeccion";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <div className="flex flex-col min-h-screen">
      <section id="inicio" className="flex-1">
        <header className="max-h-screen flex flex-col md:flex-row md:gap-10">
          <div className="md:w-1/2 flex flex-col justify-center gap-8 p-10">
            <h1 className="font-exo font-bold text-4xl md:text-7xl">
              Crea tus formularios con nosotros!
            </h1>
            <div>
              <p className="text-lg font-hindi font-bold">
                Crea, edita y elimina formularios como administrador...
              </p>
              <p className="text-lg font-hindi font-bold">
                Responde y ve todos los formularios en los que haz participado
                como cliente.
              </p>
            </div>
            <Link to={"/registro"}>
              <button className="w-1/2 md:w-1/3 bg-gray-800 p-4 rounded-lg text-white font-hindi font-bold  hover:border-black hover:border-2">
                Registrate aquí
              </button>
            </Link>
          </div>
          <div className="md:w-1/2 flex items-center justify-center p-6">
            <img
              className="w-full h-full object-cover object-center rounded-lg shadow-lg"
              src="https://i.pinimg.com/564x/9e/d0/4e/9ed04e320533cd9e9b270ec24547ecf0.jpg"
              alt="Page of init Ask it"
            />
          </div>
        </header>
      </section>
      <section id="nosotros" className="flex-1">
        <Testimonios />
      </section>
      <section id="uso" className="flex-1">
        <ComoFunciona />
      </section>
      <section id="contacto" className="flex-1">
        <ContactoSeccion />
      </section>
      <section id="" className="flex-none">
        <Footer />
      </section>
    </div>
  );
}
