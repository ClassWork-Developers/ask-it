const plantillas = [
	{
		name: 'Formulario en blanco',
		colores: ['bg-slate-600', 'bg-slate-50', 'bg-slate-900'],
	},
	{
		name: 'Paleta Rosa',
		colores: ['bg-rose-600', 'bg-rose-50', 'bg-rose-900'],
	},
	{
		name: 'Paleta Azul',
		colores: ['bg-blue-600', 'bg-blue-50', 'bg-blue-900'],
	},
];
const testimoniosData = [
	{
		id: 1,
		name: 'Mario Casas',
		email: 'mariocss@example.com',
		comment: 'La aplicación es excelente, me ha ayudado mucho como reclutador',
		image: 'https://picsum.photos/800/400?random=1',
	},
	{
		id: 2,
		name: 'Leid Smith',
		email: 'leissmith@example.com',
		comment: 'Ask it es la mejor herramienta para hacer formularios',
		image: 'https://picsum.photos/800/400?random=2',
	},
	{
		id: 3,
		name: 'Danner Loms',
		email: 'nnerloson@example.com',
		comment: 'He mejorado mi conocimiento gracias a la comunidad de Ask it',
		image: 'https://picsum.photos/800/400?random=3',
	},
];
const navigation = [
	{
		name: 'Inicio',
		href: 'inicio',
		viewPort: 'inicioViewPort'
	},
	{
		name: 'Sobre Nosotros',
		href: 'nosotros',
		viewPort: 'nosotrosViewPort'
	},
	{
		name: '¿Cómo usar?',
		href: 'uso',
		viewPort: 'usoViewPort'
	},
];
const userNavigation = [
	{ name: 'Tu perfil', href: '#' },
	{ name: 'Configuración', href: '#' },
];
const navigationSesion = [
	{ name: 'Crear', href: '/sesion', current: true },
	{ name: 'Formularios', href: '/sesion/Formularios', current: false },
	{ name: 'Buscar', href: '/sesion/Buscar', current: false },
];
const steps = [
	{
		id: 1,
		title: 'Registrate',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus vitae velit lacinia gravida.',
	},
	{
		id: 2,
		title: 'Inicia sesión',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus vitae velit lacinia gravida.',
	},
	{
		id: 3,
		title: 'Genera tus preguntas',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus vitae velit lacinia gravida.',
	},
	{
		id: 4,
		title: 'Comparte tu formulario',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus vitae velit lacinia gravida.',
	},
	{
		id: 5,
		title: '¡Listo!',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus vitae velit lacinia gravida.',
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
