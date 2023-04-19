export default function Formulario(form) {
	return (
		<div className="group relative">
			<div className="relative w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1">
				<div className={'bg-'+form.form+'-600' + ' h-20'}> </div>
				<div className={'bg-'+form.form+'-50' + ' h-20 flex justify-center items-center'}>
					<p className=" text-center text-lg font-bold">{form.name}</p>{' '}
				</div>
				<div className={'bg-'+form.form+'-900' + ' h-20'}> </div>
			</div>
		</div>
	);
}
