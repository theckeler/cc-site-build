import ToggleView from "./Icons/ToggleView";

export default function Maintenance() {
	return (
		<>
			<div className="border-y">
				<ul className="flex items-center px-5 py-3">
					<li>Maintenance</li>
					<li className="ml-auto">
						<ToggleView />
					</li>
				</ul>
			</div>
		</>
	);
}
