import ToggleView from "./Icons/ToggleView";
import Image from "next/image";

export default function RelatedProducts() {
	return (
		<>
			<div className="border-y">
				<ul className="flex items-center px-5 py-3">
					<li>Related Products</li>
					<li className="ml-auto">
						<ToggleView addClass="rotate-180" />
					</li>
				</ul>
				<ul className="min-w-full min-h-full p-5">
					<li>
						<div className="relative" style={{ paddingTop: "100%" }}>
							<Image
								src="https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd229f953/products/19A70063OEM_1.jpg?sw=138&sh=138&sm=fit"
								alt=""
								fill
							/>
						</div>
						<div class="" itemprop="name">
							<a class="" href="#top" itemprop="url">
								Double Bagger for 50- and 54-inch Decks
							</a>
						</div>
						<div class="product-number">
							Item#:
							<span class="product-id" itemprop="productID">
								19B70055100
							</span>
						</div>
						<div
							class="price"
							itemprop="offers"
							itemscope=""
							itemtype="http://schema.org/Offer">
							<span>
								<meta itemprop="priceCurrency" content="USD" />

								<span class="sales">
									<span class="value" itemprop="price" content="599.99"></span>
									<span class="msrp-text d-none">From</span>
									<span class="formatted-price">$599.99</span>
									<span class="msrp-text d-none">MSRP</span>
								</span>
							</span>
						</div>
					</li>
					<li>
						<div className="relative" style={{ paddingTop: "100%" }}>
							<Image
								src="https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw1f426d26/products/Attachments_Accessories/19B40026100.jpg?sw=138&sh=138&sm=fit"
								alt=""
								fill
							/>
						</div>
						<div class="" itemprop="name">
							<a class="" href="#top" itemprop="url">
								Cub Cadet Hauler
							</a>
						</div>
						<div class="product-number">
							Item#:
							<span class="product-id" itemprop="productID">
								19B70055100
							</span>
						</div>
						<div
							class="price"
							itemprop="offers"
							itemscope=""
							itemtype="http://schema.org/Offer">
							<span>
								<meta itemprop="priceCurrency" content="USD" />

								<span class="sales">
									<span class="value" itemprop="price" content="599.99"></span>
									<span class="msrp-text d-none">From</span>
									<span class="formatted-price">$399.99</span>
									<span class="msrp-text d-none">MSRP</span>
								</span>
							</span>
						</div>
					</li>
				</ul>
			</div>
		</>
	);
}
