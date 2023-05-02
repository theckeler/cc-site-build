import Image from "next/image";
import ButtonEdit from "../Buttons/Edit";
import Button from "../Buttons/Main";
import DealerSelect from "./DealerSelect";

export default function DealerInfo() {
	return (
		<div>
			<p className="mb-2 text-xs">
				You&rsquo;re shopping available inventory from:
			</p>
			{/* <Image
				src="https://www.cubcadet.com/on/demandware.static/-/Sites/default/dw0e63aa38/images/stores/dealer-logos/WorcestersInc_BW.png"
				width={423}
				height={52}
				alt=""
				className="mb-4 max-w-xs mx-auto"
			/> */}
			<ul className="flex">
				<li className="basis-11/12 text-sm pr-4">
					<ul className="">
						<li>
							<DealerSelect
								dealer="Worcester Sales and Service, Inc."
								miles="22.1"
								street="34200 LORAIN ROAD"
								cityState="NORTH RIDGEVILLE, OH 44039"
								phone="(330) 554-5434"
								id="Worcester"
								selected
							/>
						</li>
						<li className="mt-2">
							<DealerSelect
								dealer="Northfield Power Equipment"
								miles="25.0"
								street="49 MEADOW LANE"
								cityState="NORTHFIELD, OH 44067"
								phone="(330) 467-0020"
								id="Northfield"
							/>
						</li>
						<li className="mt-2">
							<DealerSelect
								dealer="Marshall Equipment Company"
								miles="28.5"
								street="5151 MAYFIELD ROAD"
								cityState="LYNDHURST, OH 44124"
								phone="(440) 442-1846"
								id="Marshall"
							/>
						</li>
					</ul>
				</li>
				<li className="basis-1/12">
					<ButtonEdit
						addClick={() => {
							// document.querySelector("#dealeredit").classList.toggle("hidden");
							document.querySelectorAll("#dealeredit").forEach((block) => {
								block.classList.toggle("hidden");
							});
						}}
					/>
				</li>
			</ul>
			<div className="hidden" id="dealeredit">
				<div className="p-4 bg-amber-200 rounded-md mt-4">
					<h3 className="font-bold mb-3">Find a Dealer</h3>

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
								className="flex items-center justify-center p-3 text-sm font-bold bg-amber-400 rounded-r-lg"
							/>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
