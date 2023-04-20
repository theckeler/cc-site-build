import Image from "next/image";
import Button from "./Buttons/Main";
import Stars from "./Stars";
import Link from "next/link";

export default function Cards({
	product,
	displayButton = true,
	displayMSRP = true,
	className,
	displayPrice = false,
	displayStars = false,
	addToCart = false,
	displayAvailablity = false,
}) {
	return (
		<div>
			<Link
				href={product.url ? product.url : "#top"}
				className={`p-3 flex flex-col rounded-md h-full ${className}`}>
				<div className="relative" style={{ paddingTop: "100%" }}>
					<Image src={product.img} alt="" fill />
				</div>

				<div className="mt-2 text-lg font-bold" itemProp="name">
					{product.title}
				</div>

				{!!product.itemNum && (
					<div className="mt-2 text-xs">
						Item#:
						{product.itemNum}
					</div>
				)}

				{!!product.series && <div className="text-xs">{product.series}</div>}

				{!!displayPrice && (
					<div className="text-lg font-bold">${product.price}</div>
				)}

				{!!displayStars && (
					<div className="flex text-sm">
						<Stars num={5} /> ({product.reviews})
					</div>
				)}

				{!!displayMSRP && (
					<div className="price">
						<meta itemProp="priceCurrency" content="USD" />
						<span className="sales">
							<span className="value" itemProp="price" content=""></span>
							<span className="text-xs text-gray-500">From</span>
							<span className="ml-1 text-xs font-bold">
								${product.price}.00
							</span>
							<span className="ml-1 text-xs text-gray-500">MSRP</span>
						</span>
					</div>
				)}

				{!!displayButton && (
					<div className="mt-auto pt-2">
						<Button
							title={`View ${product.title}`}
							noIcon={true}
							className="w-full p-2 mt-2 text-sm font-bold bg-gray-200 rounded-lg overflow-hidden truncate"
						/>
					</div>
				)}
			</Link>

			{!!addToCart && (
				<div className="mt-4 p-3 border-t">
					<ul className="flex">
						<li className="flex">
							<button className="bg-amber-400 rounded-full h-12 w-12 p-3">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 96 960 960"
									className="">
									<path d="M457 443V319H332v-73h125V122h73v124h124v73H530v124h-73ZM282.708 986Q250 986 227 962.708t-23-56Q204 874 227.292 851t56-23Q316 828 339 851.292t23 56Q362 940 338.708 963t-56 23Zm415 0Q665 986 642 962.708t-23-56Q619 874 642.292 851t56-23Q731 828 754 851.292t23 56Q777 940 753.708 963t-56 23ZM283 777q-44.742 0-66.871-37.5Q194 702 216 664l60-110-151-320H44v-73h127l175 372h294l160-287 63 35-158 286q-10.362 17.667-27.206 28.333Q660.949 606 638 606H331l-56 98h502v73H283Z" />
								</svg>
							</button>
						</li>
						<li className="flex">
							<button className="bg-gray-300 rounded-full h-12 w-12 p-3 ml-2">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960">
									<path d="m315 907-51-52 116-115H70v-73h310L264 551l51-51 204 203-204 204Zm330-256L441 447l204-203 51 51-115 116h309v73H581l115 115-51 52Z" />
								</svg>
							</button>
						</li>
					</ul>
				</div>
			)}

			{!!displayAvailablity && (
				<div className="mt-2 px-3">
					{!!product.inStock && (
						<ul className="flex items-center">
							<li className="mr-2">
								<span className="block bg-green-500 rounded-full h-4 w-4"></span>
							</li>
							<li className="text-sm">{product.inStock} [change]</li>
						</ul>
					)}
					{!!product.available && (
						<ul className="flex items-center mt-2">
							<li className="mr-2">
								<span className="block bg-green-500 rounded-full h-4 w-4"></span>
							</li>
							<li className="text-sm">{product.available}</li>
						</ul>
					)}
				</div>
			)}
		</div>
	);
}
