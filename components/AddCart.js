import Image from "next/image";
import Button from "./Button";

export default function AddCart() {
	return (
		<ul className="min-w-full min-h-full">
			<li>
				<strong>You&rsquo;re shopping available inventory from:</strong>
			</li>
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
			<li className="mt-3">
				<strong>Worcester Sales and Service, Inc.</strong>
				<br />
				34200 LORAIN ROAD
				<br />
				NORTH RIDGEVILLE, OH 44039
				<br />
				<Button
					title="Change Dealer"
					addClass="inline-block py-1 px-3 text-xs"
				/>
			</li>
			<li className="mt-3">
				<strong>Delivering to:</strong> 44107
				<Button title="Change" addClass="ml-3 inline-block py-1 px-3 text-xs" />
			</li>
			<li className="mt-3">
				<strong>Availability:</strong> Pick up in 1-2 days
			</li>
			<li className="mt-3">
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
			<li className="mt-3">
				<Button title="Add to Cart" addClass="w-full p-3 uppercase font-bold" />
			</li>
		</ul>
	);
}
