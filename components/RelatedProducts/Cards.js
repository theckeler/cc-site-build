import Image from "next/image";
import Button from "../Button";

export default function Cards({ product }) {
	return (
		<a href="#top" className="p-3 border flex flex-col rounded-md h-full">
			<div className="relative" style={{ paddingTop: "100%" }}>
				<Image src={product.img} alt="" fill />
			</div>
			<div className="mt-2 text-sm font-bold" itemProp="name">
				{product.title}
			</div>
			<div className="mt-2 text-xs">
				Item#:
				{product.itemNum}
			</div>
			<div className="mt-auto pt-2 price">
				<meta itemProp="priceCurrency" content="USD" />
				<span className="sales">
					<span className="value" itemProp="price" content="599.99"></span>
					<span className="text-xs text-gray-500">From</span>
					<span className="ml-1 text-xs font-bold">${product.price}.00</span>
					<span className="ml-1 text-xs text-gray-500">MSRP</span>
				</span>
			</div>
			<Button
				title="View"
				noIcon={true}
				addClass="px-1 py-2 mt-2 text-sm font-bold bg-gray-200 rounded-lg"
			/>
		</a>
	);
}
