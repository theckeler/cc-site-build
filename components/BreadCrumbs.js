export default function BreadCrumbs() {
	return (
		<ul className="flex flex-col lg:flex-row flex-wrap w-full py-2">
			<li className="lg:basis-auto">
				<ul
					className="flex items-center text-xs w-full min-w-full"
					// style={{minWidth: "800px"}}
				>
					<li className="truncate">
						<a href="#top" className="underline ">
							Lawn Mowers
						</a>
					</li>
					<li>/</li>
					<li className="w-auto truncate">
						<a href="#top" className="underline">
							Riding Lawn Mowers
						</a>
					</li>
					<li>/</li>
					<li className="basis-full">
						<a href="#top" className="underline">
							Zero-Turn Mowers
						</a>
					</li>
				</ul>
			</li>
			<li className="hidden lg:block lg:ml-auto basis-auto">
				<button
					href="#reviews"
					onClick={(e) => {
						const a = document.querySelector("#toggle-review");
						document.querySelector("#reviews-text").classList.remove("hidden");
						a.classList.add("rotate-180");
						a.scrollIntoView({
							block: "start",
							behavior: "smooth",
							inline: "start",
						});
					}}>
					<ul className="flex items-center text-xs">
						{[...Array(5)].map((x, i) => (
							<li key={i}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 96 960 960">
									<path d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
								</svg>
							</li>
						))}
						<li>
							<u>203</u>
						</li>
					</ul>
				</button>
			</li>
		</ul>
	);
}
