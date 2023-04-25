import Link from "next/link";

export default function Index() {
	return (
		<div
			className="max-w-screen-2xl mx-auto p-10"
			style={{ minHeight: "50vh" }}>
			<h1 className="text-5xl uppercase border-b pb-4 mb-4">Product Lineup</h1>
			<ul className="grid grid-cols-3 gap-2">
				<li className="">
					<div className="bg-gray-200">
						<Link href="/lawn-mowers" className="block p-2">
							Lawn Mowers
						</Link>
					</div>
				</li>
				<li>
					<div className="bg-gray-200">
						<div href="#top" className="block p-2">
							Snow Blowers
						</div>
					</div>
				</li>
				<li>
					<div className="bg-gray-200">
						<div href="#top" className="block p-2">
							UTVs
						</div>
					</div>
				</li>
				<li>
					<div className="bg-gray-200">
						<div href="#top" className="block p-2">
							Electric Mowers & Tools
						</div>
					</div>
				</li>
				<li>
					<div className="bg-gray-200">
						<div href="#top" className="block p-2">
							Commercial Equipment
						</div>
					</div>
				</li>
				<li>
					<div className="bg-gray-200">
						<div href="#top" className="block p-2">
							Accessories
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
}
