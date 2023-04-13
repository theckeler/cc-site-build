import ToggleView from "./Icons/ToggleView";

export default function DocumentsGuides() {
	return (
		<>
			<div className="border-y">
				<ul className="flex items-center px-5 py-3">
					<li>Documents and Guides</li>
					<li className="ml-auto">
						<ToggleView />
					</li>
				</ul>
			</div>
		</>
	);
}
