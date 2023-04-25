import Link from "next/link";

export default function Index() {
	return (
		<div
			className="max-w-screen-2xl mx-auto p-10"
			style={{ minHeight: "50vh" }}>
			<h1 className="text-5xl uppercase border-b pb-4 mb-4">Cub Cadet Home</h1>
			<ul>
				<li>
					<Link href="/lawn-mowers">Lawn Mowers</Link>
				</li>
			</ul>
		</div>
	);
}
