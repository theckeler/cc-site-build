import Image from "next/image";
import Button from "../Button";
import ButtonEdit from "../ButtonEdit";
import DealerInfo from "./DealerInfo";
import ShippingButton from "./ShippingButton";

import IconDelivery from "../Icons/Delivery";
import IconPickUp from "../Icons/PickUp";
import IconShip from "../Icons/Ship";

export default function AddCart() {
	const buyButtonsClick = (e) => {
		e.preventDefault();
		console.log(e.currentTarget.dataset.availability);

		document.querySelectorAll(".buy-button").forEach((block) => {
			block.classList.add("bg-gray-200");
			block.classList.remove("bg-amber-200");
		});

		e.currentTarget.classList.remove("bg-gray-200");
		e.currentTarget.classList.add("bg-amber-200");

		document.querySelector("#availability-update").textContent =
			e.currentTarget.dataset.availability;
		document.querySelector("#availability-type").textContent =
			e.currentTarget.dataset.type;
	};

	const shippingButtons = [
		{
			title: "Dealer Delivery",
			status: "Unavailable",
			disabled: true,
			icon: IconDelivery,
		},
		{
			title: "Dealer Pick-Up",
			status: "FREE",
			disabled: false,
			availability: "Pick up in 1-2 days",
			type: "Delivering",
			active: true,
			icon: IconPickUp,
		},
		{
			title: "Ship to Home",
			status: "FREE",
			disabled: false,
			availability: "Ships in 8-10 days",
			type: "Shipping",
			icon: IconShip,
		},
	];

	return (
		<ul className="min-w-full min-h-full">
			<li className="mt-3 border-b border-t py-4 my-2">
				<DealerInfo />
			</li>
			<li className="mt-3 border-b pb-4 mb-2 text-sm">
				<ul className="flex items-center">
					<li className="basis-11/12 text-sm">
						<strong>
							<span id="availability-type">Delivering</span> to:
						</strong>{" "}
						44107
					</li>
					<li className="basis-1/12">
						<ButtonEdit
							addClick={() => {
								document.querySelectorAll("#zipcodeedit").forEach((block) => {
									block.classList.toggle("hidden");
								});
							}}
						/>
					</li>
				</ul>
				<div className="hidden" id="zipcodeedit">
					<div className="p-4 bg-amber-200 rounded-md mt-4">
						<h3 className="font-bold">Change Delivery Zipcode</h3>
						<p className="text-xs mb-3">
							The zip code you entered may change the shipping method.
						</p>
						<ul className="flex items-center w-full">
							<li className="basis-full">
								<input
									required=""
									type="text"
									className="p-3 text-sm w-full rounded-l-lg"
									id="zipcode-postal-code"
									placeholder="Enter Zipcode"
									name="zipcode"
								/>
							</li>
							<li className="basis-1/4">
								<Button
									title="Next"
									addClass="flex items-center justify-center  p-3 text-sm font-bold bg-amber-400 rounded-r-lg"
								/>
							</li>
						</ul>
					</div>
				</div>
			</li>
			<li className="mt-3 border-b pb-4 mb-2 text-sm">
				<strong>Availability:</strong>{" "}
				<span id="availability-update">Pick up in 1-2 days</span>
			</li>
			<li className="mt-3 border-b pb-4 mb-2">
				<ul className="flex flex-col xl:flex-row justify-center">
					{shippingButtons.map(function (button, i) {
						return (
							<li key={i} className="p-1 basis-1/3">
								<ShippingButton
									{...{ button }}
									buyButtonsClick={buyButtonsClick}
								/>
							</li>
						);
					})}
				</ul>
			</li>
			<li className="mt-3">
				<Button
					title="Add to Cart"
					addClass="flex items-center justify-center w-full p-3 uppercase font-bold bg-amber-400 lg:hover:bg-amber-300 rounded-2xl"
				/>
			</li>
		</ul>
	);
}
