import Image from "next/image";

import Stars from "@/components/Stars";

export default function DealerSelect({
	dealer,
	miles,
	street,
	cityState,
	phone,
	selected = false,
	id,
	reviewNum,
	className = null,
	showAddress = false,
	activeColor = "bg-amber-100",
	inactiveColor = "bg-white",
}) {
	return (
		<div
			className={`dealer-select flex relative p-2 ${
				!!selected && activeColor
			} ${className}`}
			onChange={(e) => {
				if (!showAddress) {
					document.querySelectorAll(".dealer-select-address").forEach((e) => {
						e.classList.add("hidden");
					});
					e.currentTarget
						.querySelector(".dealer-select-address")
						.classList.remove("hidden");
				}
				document.querySelectorAll(".dealer-select").forEach((e) => {
					e.classList.remove(activeColor);
				});
				e.currentTarget.classList.add(activeColor);
			}}>
			<ul className="z-0 h-full w-full flex">
				<li>
					<input
						type="radio"
						name="inventory"
						id={id}
						className="appearance-none mr-2 checked:bg-gray-800 ring-gray-600 ring-offset-2 ring-1 rounded-full p-1"
						defaultChecked={selected}
					/>
				</li>
				<li className="w-full">
					<ul
						className={`flex flex-col ${
							!!showAddress && "xl:items-center xl:flex-row"
						}`}>
						<li className="font-bold">{dealer}</li>
						<li
							className={`flex items-center text-xs mt-1 ${
								!!!!showAddress && "xl:mt-0 xl:ml-2"
							}`}>
							<span className="md:hidden">Dealer Review:</span>{" "}
							<Stars className="" starSize={12} /> ({reviewNum})
						</li>
					</ul>

					{/* <div className="flex items-center text-xs pl-4">
						Dealer Review: <Stars className="" starSize={12} /> ({reviewNum})
					</div> */}

					<div
						className={`dealer-select-address text-xs mt-1 ${
							!selected && !showAddress && "hidden"
						}`}>
						{street}
						<br />
						{cityState}
						<br />
						{phone}
					</div>
				</li>
				<li className="ml-auto">{miles}mi</li>
			</ul>
			<label
				htmlFor={id}
				className="block absolute top-0 left-0 w-full h-full opacity-0 z-10 cursor-pointer"
			/>
		</div>
	);
}
