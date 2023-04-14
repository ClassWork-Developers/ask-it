import Formulario from './Formulario';

export default function Buscar() {
	return (
		<>
			<div className="bg-gray-100 dark:bg-gray-600 dark:rounded-lg p-3">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<h2 className="p-5 text-2xl font-bold text-gray-900 dark:text-gray-300">Descubre formularios</h2>
					<div className="mt-5 max-w-xl grid grid-cols-2 gap-x-6 gap-y-8">
						<div className="col-span-1">
							<label
								htmlFor="username"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Titulo del formulario
							</label>
							<div className="mt-2">
								<input
									type="text"
									name="username"
									id="username"
									className="block w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
									placeholder="Prueba de matemática"
								/>
							</div>
						</div>
						<div className="col-span-1">
							<label
								htmlFor="username"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Autor
							</label>
							<div className="mt-2">
								<input
									type="text"
									name="username"
									id="username"
									className="block w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
									placeholder="janesmith"
								/>
							</div>
						</div>
					</div>
					{/* <Formulario form={} /> */}
				</div>
			</div>
		</>
	);
}
