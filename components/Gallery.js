import Image from "next/image";
import ViewMore from "../components/Buttons/ViewMore";

export default function Gallery() {
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
		<ul className="flex flex-col lg:flex-row lg:flex-wrap mb-6">
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
						className="absolute top-0 left-0 w-full hidden lg:block"
						allow="autoplay; encrypted-media; picture-in-picture"
						allowFullScreen
						title=""
					/>
					<iframe
						width="100%"
						height="100%"
						className="absolute top-0 left-0 w-full block lg:hidden"
						src="https://www.youtube.com/embed/mrqqpGpPYCM"
						title="YouTube video player hidden lg:block"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen></iframe>
				</div>
			</li>
			{imgs.map(function (img, i) {
				return (
					<li
						className={`gallery-hidden basis-6/12 ${!!img.hidden && "hidden"}`}
						key={i}>
						<div
							className="relative min-w-full min-h-full"
							style={{ paddingTop: "100%" }}>
							<Image src={img.src} alt="" fill />
						</div>
					</li>
				);
			})}
			<li
				id="gallery-button"
				className="basis-full flex justify-center relative pb-8 border-t">
				<ViewMore
					title="View More Images"
					onClick={(e) => {
						document.querySelector("#gallery-button").classList.add("hidden");
						document.querySelectorAll(".gallery-hidden").forEach((block) => {
							block.classList.remove("hidden");
						});
					}}
					className="bg-amber-200 absolute -top-7"
				/>
			</li>
		</ul>
	);
}
