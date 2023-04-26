import Link from "next/link";
import Image from "next/image";

import ButtonMain from "@/buttons/Main";

export default function CategoryCard({ h2, h3, p, href, src }) {
	const Selector = href !== "#top" ? Link : "div";

	{
		return (
			<Selector
				href={href}
				className="block md:flex md:flex-col p-6 rounded-lg bg-gray-200 md:h-full">
				{!!src && (
					<div className="pt-[55%] relative">
						<Image src={src} alt="" fill className="object-cover" />
					</div>
				)}
				<h2 className="text-xl font-bold mt-3">{h2}</h2>
				{!!h3 && <h3 className="text-lg mt-2">{h3}</h3>}
				<p className="mt-4 text-sm leading-6">{p}</p>
				<div className="mt-auto">
					<ButtonMain
						title={`Shop ${h2}`}
						className="w-full mt-4 p-2 flex justify-center bg-amber-400 rounded-2xl"
						noButton
					/>
				</div>
			</Selector>
		);
	}
}
