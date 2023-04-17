import ToggleView from "../Icons/ToggleView";
import Image from "next/image";
import Cards from "./Cards";

export default function DesFeaturescription() {
	const products = [
		{
			title: "Built with Strength",
			img: "https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-cubcadet-Library/default/dwf64ab99b/images/pdp-features/Cub-Cadet-PDP_Ultima_FeatureCard_Frame.jpg?sw=350",
			copy: "A continuous square 2 in. x 2 in. tubular steel frame with fully e-coat lower frame and corrosion defense system, a multi-step process that electronically applies corrosion resistance with meticulous care to help protect against wear and tear",
		},
		{
			title: "Redefining Comfort",
			img: "https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/dwb371fc8d/images/pdp-features/Cub-Cadet-PDP_Ultima_FeatureCard_Seat-NoArms.jpg",
			copy: "Settle into a fully adjustable command center and experience comfort designed to give you speed and control.",
		},
		{
			title: "AeroForce Deck™",
			img: "https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/dw1d357810/images/pdp-features/PDP_Features_ultima-series-aeroforce-deck.jpg",
			copy: "The AeroForce™ fabricated deck is engineered to deliver a premium cut with minimal clumps, fine clips and evenness.",
		},
	];

	return (
		<div className="border-y" id="description">
			<button
				className="w-full"
				id="description-button"
				onClick={(e) => {
					document
						.querySelector("#description-text")
						.classList.toggle("hidden");
				}}>
				<ul className="flex items-center px-5 py-3">
					<li>Features</li>
					<li className="ml-auto">
						<ToggleView />
					</li>
				</ul>
			</button>

			<div className="hidden" id="description-text">
				<div className="px-5 py-3">
					<ul className="flex flex-col md:flex-row flex-wrap">
						{products.map(function (product, i) {
							return (
								<li className="basis-2/6 md:p-1 flex" key={i}>
									<Cards {...{ product }} />
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}
