import Image from "next/image";

export default function DealerSelect({
	dealer,
	miles,
	street,
	cityState,
	phone,
	selected = false,
	id,
}) {
	return (
		<div
			className={`dealer-select flex relative p-2 ${
				!!selected && "bg-amber-100"
			}`}
			onChange={(e) => {
				document.querySelectorAll(".dealer-select-address").forEach((e) => {
					e.classList.add("hidden");
				});
				document.querySelectorAll(".dealer-select").forEach((e) => {
					e.classList.remove("bg-amber-100");
				});
				e.currentTarget
					.querySelector(".dealer-select-address")
					.classList.remove("hidden");
				e.currentTarget.classList.add("bg-amber-100");
			}}>
			<ul className="z-0 h-full w-full flex">
				<li>
					<input
						type="radio"
						name="inventory"
						id={id}
						className="mr-2"
						defaultChecked={selected}
					/>
					<span className="font-bold">{dealer}</span>
					<div
						className={`dealer-select-address text-xs pl-8 ${
							!selected && "hidden"
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
