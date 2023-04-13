import Image from "next/image";

export default function AddCart() {
	return (
		<ul className="min-w-full min-h-full">
			<li>You&rsquo;re shopping available inventory from:</li>
			<li>
				<ul className="flex flex-col">
					<li className="">
						<Image
							src="https://www.cubcadet.com/on/demandware.static/-/Sites/default/dw0e63aa38/images/stores/dealer-logos/WorcestersInc_BW.png"
							width={423}
							height={52}
							alt=""
						/>
					</li>
				</ul>
			</li>
			<li>
				Worcester Sales and Service, Inc.
				<p>34200 LORAIN ROAD, NORTH RIDGEVILLE, OH 44039</p>
				<p>
					<a href="#top" className="underline">
						Change Dealer
					</a>
				</p>
			</li>
			<li>
				Delivering to: 44107
				<p>
					<a href="#top" className="underline">
						Change
					</a>
				</p>
			</li>
			<li>Availability: Pick up in 1-2 days</li>
			<li>
				<ul className="flex">
					<li>
						<p>Dealer Delivery</p>
						<p>Unavailable</p>
					</li>
					<li>
						<p>Dealer Pick-Up</p>
						<p>Available in 1-2 days</p>
						<p>FREE</p>
					</li>
					<li>
						<p>Ship to Home</p>
						<p>Unavailable</p>
					</li>
				</ul>
			</li>
			<li>
				<button>Add to Cart</button>
			</li>
		</ul>
	);
}
