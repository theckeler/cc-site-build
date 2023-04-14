import Image from "next/image";

export default function Cards({ product }) {
	return (
		<div className="p-2">
			<div className="relative" style={{ paddingTop: "100%" }}>
				<Image src={product.img} alt="" fill />
			</div>
			<div className="" itemprop="name">
				<a className="" href="#top" itemprop="url">
					{product.title}
				</a>
			</div>
			<div className="product-number">
				Item#:
				<span className="product-id" itemprop="productID">
					{product.itemNum}
				</span>
			</div>
			<div
				className="price"
				itemprop="offers"
				itemscope=""
				itemtype="http://schema.org/Offer">
				<span>
					<meta itemprop="priceCurrency" content="USD" />

					<span className="sales">
						<span className="value" itemprop="price" content="599.99"></span>
						<span className="msrp-text d-none">From</span>
						<span className="formatted-price">${product.price}.00</span>
						<span className="msrp-text d-none">MSRP</span>
					</span>
				</span>
			</div>
		</div>
	);
}
