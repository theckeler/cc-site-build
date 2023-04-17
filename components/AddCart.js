import Image from "next/image";
import Button from "./Button";
import ButtonEdit from "./ButtonEdit";

export default function AddCart() {
	return (
		<ul className="min-w-full min-h-full">
			<li className="mt-3 border-b border-t py-4 my-2">
				<p className="mb-3 text-xs text-center">
					You&rsquo;re shopping available inventory from:
				</p>
				<Image
					src="https://www.cubcadet.com/on/demandware.static/-/Sites/default/dw0e63aa38/images/stores/dealer-logos/WorcestersInc_BW.png"
					width={423}
					height={52}
					alt=""
					className="mb-4 max-w-xs mx-auto"
				/>
				<ul className="flex items-center">
					<li className="basis-11/12 text-sm">
						<strong>Worcester Sales and Service, Inc.</strong>
						<br />
						34200 LORAIN ROAD
						<br />
						NORTH RIDGEVILLE, OH 44039
					</li>
					<li className="basis-1/12">
						<ButtonEdit />
					</li>
				</ul>
			</li>
			<li className="mt-3 border-b pb-4 mb-2 text-sm">
				<ul className="flex items-center">
					<li className="basis-11/12 text-sm">
						<strong>Delivering to:</strong> 44107
					</li>
					<li className="basis-1/12">
						<ButtonEdit />
					</li>
				</ul>
			</li>
			<li className="mt-3 border-b pb-4 mb-2 text-sm">
				<strong>Availability:</strong> Pick up in 1-2 days
			</li>
			<li className="mt-3 border-b pb-4 mb-2">
				<ul className="flex flex-col md:flex-row justify-center">
					<li className="p-1 basis-1/3">
						<button className="flex flex-col items-center h-full py-4 px-3 bg-gray-200 rounded-md w-full">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="100%"
								height="3em"
								viewBox="0 96 960 960"
								className="mb-2">
								<path d="M224.118 895Q175 895 140.5 860.583 106 826.167 106 777H40V316q0-24 18-42t42-18h579v167h105l136 181v173h-71q0 49.167-34.382 83.583Q780.235 895 731.118 895 682 895 647.5 860.583 613 826.167 613 777H342q0 49-34.382 83.5-34.383 34.5-83.5 34.5ZM224 835q24 0 41-17t17-41q0-24-17-41t-41-17q-24 0-41 17t-17 41q0 24 17 41t41 17Zm507 0q24 0 41-17t17-41q0-24-17-41t-41-17q-24 0-41 17t-17 41q0 24 17 41t41 17Zm-52-204h186L754 483h-75v148Z" />
							</svg>
							<p className="uppercase text-sm leading-3">
								<strong>Dealer Delivery</strong>
							</p>
							<p className="mt-3 text-xs">Unavailable</p>
						</button>
					</li>
					<li className="p-1 basis-1/3">
						<button className="flex flex-col items-center h-full py-4 px-3 bg-amber-400 rounded-md text-xs w-full">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="100%"
								height="4em"
								viewBox="0 96 960 960"
								className="mb-2">
								<path d="M480 834Q343 731 276.5 636.801q-66.5-94.2-66.5-184.554Q210 384 234.5 332.5T298 246q39-35 86.98-52.5 47.98-17.5 95-17.5T575 193.5q48 17.5 87 52.5t63.5 86.533Q750 384.066 750 452.456 750 543 683.5 637 617 731 480 834Zm.089-318Q509 516 529.5 495.411q20.5-20.588 20.5-49.5Q550 417 529.411 396.5q-20.588-20.5-49.5-20.5Q451 376 430.5 396.589q-20.5 20.588-20.5 49.5Q410 475 430.589 495.5q20.588 20.5 49.5 20.5ZM210 976v-60h540v60H210Z" />
							</svg>
							<p className="uppercase text-sm leading-3">
								<strong>Dealer Pick-Up</strong>
							</p>
							<p className="mt-3 text-xs">Available in 1-2 days</p>
							<p className="mt-3 text-xs">FREE</p>
						</button>
					</li>
					<li className="p-1 basis-1/3">
						<button className="flex flex-col items-center h-full py-4 px-3 bg-gray-200 rounded-md text-xs w-full">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="100%"
								height="4em"
								viewBox="0 96 960 960"
								className="mb-2">
								<path d="M160 936V456l320-240 320 240v480H160Zm320.118-250Q526 686 558 653.882q32-32.117 32-78Q590 530 557.882 498q-32.117-32-78-32Q434 466 402 498.118q-32 32.117-32 78Q370 622 402.118 654q32.117 32 78 32ZM220 876h512q-2-13-2.5-26T718 829q-51-40-112-61.5T479 746q-64.599 0-125.299 21Q293 788 242 828q-11 8-16.5 21t-5.5 27Z" />
							</svg>
							<p className="uppercase text-sm leading-3">
								<strong>Ship to Home</strong>
							</p>
							<p className="mt-3 text-xs">Unavailable</p>
						</button>
					</li>
				</ul>
			</li>
			<li className="mt-3">
				<Button
					title="Add to Cart"
					addClass="w-full p-3 uppercase font-bold bg-amber-400"
				/>
			</li>
		</ul>
	);
}
