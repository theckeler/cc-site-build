import Button from "./Buttons/Main";

export default function BreadCrumbs({ crumbs, stars = false, cta = null }) {
	return (
		<ul className="flex flex-col lg:flex-row flex-wrap w-full py-2">
			<li className="lg:basis-auto">
				<ul className="flex items-center text-xs w-full min-w-full">
					{crumbs.map(function (crumb, i) {
						const checkNum = i < crumbs.length - 1 ? true : false;
						const LinkElement = checkNum ? "a" : "div";
						const crumbCSS = i === 0 ? "py-1 pr-1" : "p-1";

						return (
							<>
								<li
									className={`${crumbCSS} ${
										checkNum
											? "w-auto truncate md:whitespace-nowrap md:overflow-visible"
											: "basis-full"
									} `}
									key={i}>
									<LinkElement
										href={crumb.url ? crumb.url : "#top"}
										className={checkNum ? "underline" : ""}>
										{crumb.title}
									</LinkElement>
								</li>
								{checkNum && <li>›</li>}
							</>
						);
					})}
				</ul>
			</li>
			{!!stars && (
				<li className="hidden lg:block lg:ml-auto basis-auto">
					<button
						href="#reviews"
						onClick={(e) => {
							document
								.querySelector("#reviews-text")
								.classList.remove("hidden");
							document
								.querySelector("#toggle-reviews")
								.classList.add("rotate-180");

							window.scrollTo({
								behavior: "smooth",
								top:
									document
										.querySelector("#reviews-text")
										.getBoundingClientRect().top - 80,
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
			)}
			{!!cta && (
				<li className="hidden lg:block lg:ml-auto basis-auto">
					<Button
						href={cta.url}
						title={cta.title}
						noIcon={true}
						className="bg-amber-400 px-4 py-2 rounded text-xs uppercase"
					/>
				</li>
			)}
		</ul>
	);
}
