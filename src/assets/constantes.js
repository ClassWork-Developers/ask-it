import Jeida from "./1.jpg";
import Mario from "./2.jpg";
import Danner from "./3.jpg";

const plantillas = [
  {
    name: "Formulario en blanco",
    colores: ["bg-slate-600", "bg-slate-50", "bg-slate-900"],
  },
  {
    name: "Paleta Rosa",
    colores: ["bg-rose-600", "bg-rose-50", "bg-rose-900"],
  },
  {
    name: "Paleta Azul",
    colores: ["bg-blue-600", "bg-blue-50", "bg-blue-900"],
  },
];
const testimoniosData = [
  {
    id: 1,
    name: "Mario Casas",
    email: "mariocss@example.com",
    comment: "La aplicación es excelente, me ha ayudado mucho como reclutador",
    image: Mario,
  },
  {
    id: 2,
    name: "Jeida Smith",
    email: "leissmith@example.com",
    comment: "Ask it es la mejor herramienta para hacer formularios",
    image: Jeida,
  },
  {
    id: 3,
    name: "Danner Loms",
    email: "nnerloson@example.com",
    comment: "He mejorado mi conocimiento gracias a la comunidad de Ask it",
    image: Danner,
  },
];
const navigation = [
  {
    name: "Inicio",
    href: "/",
    viewPort: "inicioViewPort",
  },
  {
    name: "Sobre Nosotros",
    href: "nosotros",
    viewPort: "nosotrosViewPort",
  },
  {
    name: "¿Cómo usar?",
    href: "uso",
    viewPort: "usoViewPort",
  },
  {
    name: "Contacto",
    href: "contacto",
    viewPort: "contactoViewPort",
  },
];
const userNavigation = [
  { name: "Tu perfil", href: "#" },
  { name: "Configuración", href: "#" },
];
const navigationSesion = [
  { name: "Crear", href: "/sesion", current: true },
  { name: "Formularios", href: "/sesion/Formularios", current: false },
  { name: "Buscar", href: "/sesion/Buscar", current: false },
];
const steps = [
  {
    id: 1,
    title: "Registrate",
    description:
      "Regístrate hoy y comienza a crear formularios y encuestas personalizadas en minutos",
  },
  {
    id: 2,
    title: "Inicia sesión",
    description:
      "Inicia sesión para acceder a tus formularios y encuestas creados y responder a aquellos que te hayan sido enviados",
  },
  {
    id: 3,
    title: "Genera tus preguntas",
    description:
      "¿Necesitas recolectar información de tus clientes o empleados? Crea fácilmente formularios y encuestas personalizadas con nosotros",
  },
  {
    id: 4,
    title: "Comparte tu formulario",
    description:
      "¡Haz que tu contenido llegue a más personas y obtén la información que necesitas para tomar decisiones informadas!",
  },
  {
    id: 5,
    title: "¡Listo!",
    description:
      "Ahora puedes empezar a usar Ask It y crear tus propios formularios y encuestas de manera fácil y rápida",
  },
];
export {
  plantillas,
  testimoniosData,
  navigation,
  userNavigation,
  navigationSesion,
  steps,
};
