import Jeida from "./1.jpg";
import Mario from "./2.jpg";
import Danner from "./3.jpg";

const plantillas = [
  {
    name: "Formulario en blanco",
    theme: 'gray',
  },
  {
    name: "Paleta Rosa",
    theme: 'rose',
  },
  {
    name: "Paleta Azul",
    theme: 'blue',
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

];
const userNavigation = [
  { name: "Tu perfil", href: "#" },
  { name: "Configuración", href: "#" },
];
const navigationSesion = [
  { name: "Crear", href: "/sesion", current: true, icon:'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { name: "Formularios", href: "/sesion/Formularios", current: false, icon:'M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4'},
  { name: "Buscar", href: "/sesion/Buscar", current: false, icon:'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
  {name:'Mis formularios', href:'/sesion/Formularios/user', current:false, icon:'M4 4v2.586a1 1 0 00.293.707l6 6a1 1 0 001.414 0l1.586-1.586a1 1 0 000-1.414l-6-6a1 1 0 00-.707-.293H4zm10.707 3.707a1 1 0 010 1.414L11.414 12l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'}
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
