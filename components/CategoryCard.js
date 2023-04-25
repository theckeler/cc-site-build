import Link from "next/link";

import ButtonMain from "@/buttons/Main";

export default function CategoryCard({ h2, h3, p, href }) {
	const Selector = href !== "#top" ? Link : "div";

	{
		return (
			<Selector href={href} className="block p-4 rounded-lg bg-gray-200">
				<h2 className="text-2xl font-bold">{h2}</h2>
				<h3 className="text-lg mt-2">{h3}</h3>
				<p>{p}</p>
				<ButtonMain
					title={`Shop ${h2}`}
					className="w-full mt-4 p-2 flex justify-center bg-amber-400 rounded-2xl"
					noButton
				/>
			</Selector>
		);
	}
}
