import ToggleView from "./Icons/ToggleView";

export default function DocumentsGuides() {
	return (
		<div className="border-y">
			<button
				className="w-full"
				onClick={(e) => {
					document.querySelector("#docs-text").classList.toggle("hidden");
					document.querySelector("#toggle-docs").classList.toggle("rotate-180");
				}}>
				<ul className="flex items-center px-5 py-3">
					<li>Documents and Guides</li>
					<li className="ml-auto">
						<ToggleView id="toggle-docs" />
					</li>
				</ul>
			</button>

			<div className="hidden" id="docs-text">
				<div
					className="px-5 py-3 bg-gray-300 flex justify-center items-center"
					style={{ minHeight: "600px" }}>
					docs
				</div>
			</div>
		</div>
	);
}
