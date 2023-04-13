import Image from "next/image";

export default function Home() {
	return (
		<ul className="min-w-full min-h-full">
			<li>
				<div className="relative" style={{ paddingTop: "56.6%" }}>
					<embed
						src="https://www.youtube.com/embed/mrqqpGpPYCM"
						wmode="transparent"
						type="video/mp4"
						width="100%"
						height="100%"
						className="absolute top-0 left-0"
						allow="autoplay; encrypted-media; picture-in-picture"
						allowfullscreen
						title=""></embed>
				</div>
			</li>
			<li>
				<div className="relative" style={{ paddingTop: "100%" }}>
					<Image
						src="https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw44c750be/products/Equipment/Cub-Cadet_ZT154_5.jpg"
						alt=""
						fill
					/>
				</div>
			</li>
			<li>
				<div className="relative" style={{ paddingTop: "100%" }}>
					<Image
						src="https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw700797e6/products/Equipment/Cub-Cadet_ZT154_6.jpg?sw=1000&sh=1000&sm=fit"
						alt=""
						fill
					/>
				</div>
			</li>
			<li>
				<div className="relative" style={{ paddingTop: "100%" }}>
					<Image
						src="https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwe4350abd/products/Equipment/Cub-Cadet_ZT154_3.jpg?sw=1000&sh=1000&sm=fit"
						alt=""
						fill
					/>
				</div>
			</li>
			<li className="hidden">
				<div className="relative" style={{ paddingTop: "100%" }}>
					<Image
						src="https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwdd14887d/products/Equipment/Cub-Cadet_ZT154_4.jpg?sw=1000&sh=1000&sm=fit"
						alt=""
						fill
					/>
				</div>
			</li>
			<li className="hidden">
				<div className="relative" style={{ paddingTop: "100%" }}>
					<Image
						src="https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwa9c39c10/products/Equipment/Cub-Cadet_ZT154_9.jpg?sw=1000&sh=1000&sm=fit"
						alt=""
						fill
					/>
				</div>
			</li>
			<li className="hidden">
				<div className="relative" style={{ paddingTop: "100%" }}>
					<Image
						src="https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw543c20be/products/Cub_Cadet_ZT1_54_Accessories.jpg?sw=1000&sh=1000&sm=fit"
						alt=""
						fill
					/>
				</div>
			</li>
			<li className="hidden">
				<div className="relative" style={{ paddingTop: "100%" }}>
					<Image
						src="https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw70676fb6/products/Cub_Cadet_ZT1_54_Parts.jpg?sw=1000&sh=1000&sm=fit"
						alt=""
						fill
					/>
				</div>
			</li>
		</ul>
	);
}
