import ToggleView from "./Icons/ToggleView";

export default function Specs() {
	return (
		<>
			<div className="border-y">
				<ul className="flex items-center px-5 py-3">
					<li>Specs</li>
					<li className="ml-auto">
						<ToggleView />
					</li>
				</ul>
			</div>
		</>
	);
}
