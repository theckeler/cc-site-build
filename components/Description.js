import ToggleView from "./Icons/ToggleView";

export default function Description() {
	return (
		<>
			<div className="border-y">
				<ul className="flex items-center px-5 py-3">
					<li>Description</li>
					<li className="ml-auto">
						<ToggleView />
					</li>
				</ul>
			</div>
		</>
	);
}
