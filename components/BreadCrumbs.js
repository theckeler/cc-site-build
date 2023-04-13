export default function BreadCrumbs() {
	return (
		<ul className="flex flex-wrap w-full">
			<li>
				<ul className="flex items-center text-xs">
					<li className="">
						<a href="#top" className="underline p-2">
							Lawn Mowers
						</a>
					</li>
					<li>/</li>
					<li className="">
						<a href="#top" className="underline p-2">
							Riding Lawn Mowers
						</a>
					</li>
					<li>/</li>
					<li>
						<a href="#top" className="underline p-2">
							Zero-Turn Mowers
						</a>
					</li>
				</ul>
			</li>
			<li className="ml-auto">
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
			</li>
		</ul>
	);
}
