import Image from "next/image";

import CTABlock from "@/cta/Block";

export default function CTAHero({ block, reverse = false, className = null }) {
	{
		return (
			<ul
				className={`flex flex-col xl:flex-row ${
					!!reverse && "xl:flex-row-reverse"
				} ${className}`}>
				<li className="xl:basis-8/12">
					<div className="relative min-h-[18em] lg:min-h-[34em]">
						<Image
							src={block.src}
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							alt=""
							className="object-cover"
						/>
					</div>
				</li>
				<li className="xl:basis-4/12 bg-amber-400 p-10">
					<CTABlock
						title={block.title}
						copy={block.copy}
						xsCopy={block.xsCopy}
						buttonText={block.buttonText}
						href={block.href}
					/>
				</li>
			</ul>
		);
	}
}
