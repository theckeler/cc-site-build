import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body className="bg-white">
				<div className="bg-gray-400" style={{ minHeight: "160px" }}>
					<Link href="/" className="p-4 block">
						Home
					</Link>
				</div>
				<main className="">
					<Main />
				</main>
				<div className="bg-gray-400" style={{ minHeight: "600px" }}></div>
				<NextScript />
			</body>
		</Html>
	);
}
