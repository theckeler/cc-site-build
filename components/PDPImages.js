import Image from "next/image";

export default function Home() {
	const imgs = [
		{
			src: "https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw44c750be/products/Equipment/Cub-Cadet_ZT154_5.jpg",
			hidden: false,
		},
		{
			src: "https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw700797e6/products/Equipment/Cub-Cadet_ZT154_6.jpg?sw=1000&sh=1000&sm=fit",
			hidden: false,
		},
		{
			src: "https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwe4350abd/products/Equipment/Cub-Cadet_ZT154_3.jpg?sw=1000&sh=1000&sm=fit",
			hidden: true,
		},
		{
			src: "https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwdd14887d/products/Equipment/Cub-Cadet_ZT154_4.jpg?sw=1000&sh=1000&sm=fit",
			hidden: true,
		},
		{
			src: "https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwa9c39c10/products/Equipment/Cub-Cadet_ZT154_9.jpg?sw=1000&sh=1000&sm=fit",
			hidden: true,
		},
		{
			src: "https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw543c20be/products/Cub_Cadet_ZT1_54_Accessories.jpg?sw=1000&sh=1000&sm=fit",
			hidden: true,
		},
		{
			src: "https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw70676fb6/products/Cub_Cadet_ZT1_54_Parts.jpg?sw=1000&sh=1000&sm=fit",
			hidden: true,
		},
	];

	return (
		<ul className="md:flex flex-wrap mb-6">
			<li className="basis-full">
				<div
					className="relative min-w-full min-h-full"
					style={{ paddingTop: "56.6%" }}>
					<embed
						src="https://www.youtube.com/embed/mrqqpGpPYCM"
						wmode="transparent"
						type="video/mp4"
						width="100%"
						height="100%"
						className="absolute top-0 left-0 w-full"
						allow="autoplay; encrypted-media; picture-in-picture"
						allowfullscreen
						title=""
					/>
				</div>
			</li>
			{imgs.map(function (img, i) {
				return (
					<li className={`basis-6/12 ${!!img.hidden && "hidden"}`} key={i}>
						<div
							className="relative min-w-full min-h-full"
							style={{ paddingTop: "100%" }}>
							<Image src={img.src} alt="" fill />
						</div>
					</li>
				);
			})}
			<li className="basis-full flex justify-center">
				<button className="px-8 py-4 bg-gray-300 border rounded flex items-center ">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="26"
						height="26"
						viewBox="0 96 960 960"
						className="mr-2">
						<path d="m480 705 173-173-43-42-130 130-130-130-43 42 173 173Zm0 271q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-156t86-127Q252 239 325 207.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 82-31.5 155T763 858.5q-54 54.5-127 86T480 976Zm0-60q142 0 241-99.5T820 576q0-142-99-241t-241-99q-141 0-240.5 99T140 576q0 141 99.5 240.5T480 916Zm0-340Z" />
					</svg>
					View More
				</button>
			</li>
		</ul>
	);
}
