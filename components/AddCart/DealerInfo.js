import Image from "next/image";
import ButtonEdit from "../Buttons/Edit";
import Button from "../Buttons/Main";

export default function DealerInfo() {
	return (
		<div>
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
								addClass="flex items-center justify-center p-3 text-sm font-bold bg-amber-400 rounded-r-lg"
							/>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
