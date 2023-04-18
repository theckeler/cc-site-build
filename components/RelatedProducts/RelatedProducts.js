import ToggleView from "../Icons/ToggleView";
import Image from "next/image";
import Cards from "./Cards";

const products = [
	{
		title: "Double Bagger for 50- and 54-inch Decks",
		img: "https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd229f953/products/19A70063OEM_1.jpg?sw=400&sh=400&sm=fit",
		itemNum: "19B70055100",
		price: 599,
	},
	{
		title: "Cub Cadet Hauler",
		img: "https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw1f426d26/products/Attachments_Accessories/19B40026100.jpg?sw=400&sh=400&sm=fit",
		itemNum: "19B70055100",
		price: 399,
	},
	{
		title: "Fender Kit",
		img: "https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwf28c8118/products/Attachments_Accessories/19A70062100.jpg?sw=400&sh=400&sm=fit",
		itemNum: "19A70062100",
		price: 120,
	},
	{
		title: "Ultima Hour Meter Kit",
		img: "https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw824b5f96/products/490-900-C075_1.jpg?sw=400&sh=400&sm=fit",
		itemNum: "490-900-C075",
		price: 50,
	},
	{
		title: "Cub Cadet Hauler",
		img: "https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw1f426d26/products/Attachments_Accessories/19B40026100.jpg?sw=400&sh=400&sm=fit",
		itemNum: "19B40026100",
		price: 399,
	},
	{
		title: "Lawn Striping Kit for 50-, 54- and 60-inch Decks",
		img: "https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwa140894d/products/Attachments_Accessories/19A70059OEM.jpg?sw=400&sh=400&sm=fit",
		itemNum: "19A70059OEM",
		price: 150,
	},
	{
		title: "52-inch All-Season Plow Blade Attachment",
		img: "https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd229f953/products/19A70063OEM_1.jpg?sw=400&sh=400&sm=fit",
		itemNum: "19A70063OEM",
		price: 900,
	},
];

export default function RelatedProducts() {
	return (
		<div className="border-y">
			<button
				className="w-full"
				onClick={(e) => {
					const relatedText = document.querySelector("#related-text");
					const toggleRelated = document.querySelector("#toggle-related");

					relatedText.classList.toggle("lg:hidden");
					relatedText.classList.toggle("hidden");

					toggleRelated.classList.toggle("lg:rotate-180");
					toggleRelated.classList.toggle("lg:rotate-0");
					toggleRelated.classList.toggle("rotate-0");
					toggleRelated.classList.toggle("rotate-180");
				}}>
				<ul className="flex items-center px-5 py-3">
					<li>Related Products</li>
					<li className="ml-auto">
						<ToggleView addClass="rotate-0 lg:rotate-180" id="toggle-related" />
					</li>
				</ul>
			</button>

			<div
				className="hidden lg:block mb-6 overflow-scrollbar overflow-x-auto py-2"
				id="related-text">
				<ul className="md:flex">
					{products.map(function (product, i) {
						return (
							<li key={i} className="p-2" style={{ minWidth: "240px" }}>
								<Cards {...{ product }} />
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
