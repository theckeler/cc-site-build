import ToggleView from "./Icons/ToggleView";

export default function Maintenance() {
	return (
		<div className="border-y">
			<button
				className="w-full"
				onClick={(e) => {
					document.querySelector("#maintance-text").classList.toggle("hidden");
					document
						.querySelector("#toggle-maintance")
						.classList.toggle("rotate-180");
				}}>
				<ul className="flex items-center px-5 py-3">
					<li>Maintenance</li>
					<li className="ml-auto">
						<ToggleView id="toggle-maintance" />
					</li>
				</ul>
			</button>

			<div className="hidden" id="maintance-text">
				<div
					className="px-5 py-3 bg-gray-300 flex justify-center items-center"
					style={{ minHeight: "600px" }}>
					maintance
				</div>
			</div>
		</div>
	);
}
