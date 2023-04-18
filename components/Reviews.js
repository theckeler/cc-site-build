import ToggleView from "./Icons/ToggleView";

export default function Reviews() {
	return (
		<div className="border-b">
			<a name="reviews" id="reviews" />
			<button
				className="w-full"
				onClick={(e) => {
					document.querySelector("#reviews-text").classList.toggle("hidden");
					document
						.querySelector("#toggle-review")
						.classList.toggle("rotate-180");
				}}>
				<ul className="flex items-center px-5 py-3">
					<li>Reviews</li>
					<li className="flex ml-auto">
						<ul className="flex">
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
						</ul>
						<u>203</u>
					</li>
					<li>
						<ToggleView id="toggle-review" />
					</li>
				</ul>
			</button>

			<div className="hidden" id="reviews-text">
				<div
					className="px-5 py-3 bg-gray-300 flex justify-center items-center"
					style={{ minHeight: "600px" }}>
					Reviews Plugin Info
				</div>
			</div>
		</div>
	);
}
