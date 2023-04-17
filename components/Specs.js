import ToggleView from "./Icons/ToggleView";

export default function Specs() {
	return (
		<div className="border-y">
			<button
				className="w-full"
				onClick={(e) => {
					document.querySelector("#specs-text").classList.toggle("hidden");
					document
						.querySelector("#toggle-specs")
						.classList.toggle("rotate-180");
				}}>
				<ul className="flex items-center px-5 py-3">
					<li>Specs</li>
					<li className="ml-auto">
						<ToggleView id="toggle-specs" />
					</li>
				</ul>
			</button>

			<div className="hidden" id="specs-text">
				<div
					className="px-5 py-3 bg-gray-300 flex justify-center items-center"
					style={{ minHeight: "600px" }}>
					Specs
				</div>
			</div>
		</div>
	);
}
