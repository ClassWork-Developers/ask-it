export default function Formulario(form) {
	return (
		<div className="group relative">
			<div className="relative w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1">
				<div className={form.form.colores[0] + ' h-20'}> </div>
				<div className={form.form.colores[1] + ' h-20'}> </div>
				<div className={form.form.colores[2] + ' h-20'}> </div>
			</div>
			<p className="mt-6 text-lg text-bold">{form.name}</p>
		</div>
	);
}
