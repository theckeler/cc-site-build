import ButtonMain from "@/buttons/Main";
import Image from "next/image";

export default function CTABlock({ title, copy, href, src, buttonText }) {
	{
		return (
			<ul className="flex flex-col h-full">
				<li className="pt-[50%] relative">
					<Image src={src} alt="" fill className="object-cover" />
				</li>
				<li className="mt-4 text-3xl font-bold">{title}</li>
				<li className="mt-2">{copy}</li>
				<li className="pt-8 mt-auto">
					<ButtonMain
						title={buttonText}
						className="block bg-black text-white px-10 py-2 rounded-2xl w-full text-center"
						noIcon
						href={href}
					/>
				</li>
			</ul>
		);
	}
}
