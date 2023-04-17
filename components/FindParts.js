import Link from "./Icons/Link";

export default function FindParts() {
	return (
		<div className="border-y">
			<a href="#top">
				<ul className="flex items-center px-5 py-3">
					<li>Find Parts</li>
					<li className="ml-auto">
						<Link />
					</li>
				</ul>
			</a>
		</div>
	);
}
