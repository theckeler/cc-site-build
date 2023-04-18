import Link from "./Icons/Link";

export default function FindParts() {
	return (
		<div className="border-b">
			<a href="#top" className="block w-full lg:hover:bg-amber-200">
				<ul className="flex items-center px-5 py-3">
					<li className="font-bold">Find Parts</li>
					<li className="ml-auto">
						<Link />
					</li>
				</ul>
			</a>
		</div>
	);
}
