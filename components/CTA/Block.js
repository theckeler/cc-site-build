import ButtonMain from "@/buttons/Main";
import Image from "next/image";

export default function CTABlock({
	title,
	copy,
	href,
	src,
	buttonText,
	xsCopy,
}) {
	{
		return (
			<ul className="flex flex-col h-full">
				{!!src && (
					<li className="pt-[50%] relative">
						<Image src={src} alt="" fill className="object-cover" />
					</li>
				)}
				<li className="mt-4 text-3xl font-bold">{title}</li>
				<li className="mt-2">{copy}</li>
				{!!xsCopy && <li className="mt-2 pl-4 text-xs">{xsCopy}</li>}
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
