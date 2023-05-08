import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";
import Header from "@/header/Header";

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body className="bg-white">
				<Header className="" />
				<main className="">
					<Main />
				</main>
				<div className="bg-gray-200" style={{ minHeight: "600px" }}></div>
				<NextScript />
			</body>
		</Html>
	);
}
