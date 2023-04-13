import Image from "next/image";

export default function Cards({ product }) {
	return (
		<div className="p-2">
			<div className="relative" style={{ paddingTop: "100%" }}>
				<Image src={product.img} alt="" fill />
			</div>
			<div class="" itemprop="name">
				<a class="" href="#top" itemprop="url">
					{product.title}
				</a>
			</div>
			<div class="product-number">
				Item#:
				<span class="product-id" itemprop="productID">
					{product.itemNum}
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
						<span class="formatted-price">${product.price}.00</span>
						<span class="msrp-text d-none">MSRP</span>
					</span>
				</span>
			</div>
		</div>
	);
}
