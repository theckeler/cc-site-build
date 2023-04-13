import ToggleView from "./Icons/ToggleView";

export default function Reviews() {
	return (
		<>
			<div className="border-y">
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
						<ToggleView />
					</li>
				</ul>
			</div>
		</>
	);
}
