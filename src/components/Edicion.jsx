import Card from './Cards'
export default function Edicion() {
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
							<p className="font-semibold text-gray-900 text-center py-2">Judith Black</p>
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
			<Card />
		</>
	);
}
