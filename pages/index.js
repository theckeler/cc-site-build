import Link from "next/link";

export default function Index() {
	return (
		<div
			className="max-w-screen-2xl mx-auto p-10"
			style={{ minHeight: "50vh" }}>
			<h1 className="text-5xl uppercase border-b pb-4 mb-4">
				Cub Cadet: Site Redesign:
			</h1>
			<ul>
				<li>
					<Link href="/category">Category Page</Link>
				</li>
				<li>
					<Link href="/pdp">PDP Page</Link>
				</li>
			</ul>
		</div>
	);
}
