import ToggleView from "./Icons/ToggleView";
import specsJson from "../Data/specs.json";

export default function Specs() {
	//console.log(specsJson);

	return (
		<div className="border-b">
			<button
				className="w-full"
				onClick={(e) => {
					document.querySelector("#specs-text").classList.toggle("hidden");
					document
						.querySelector("#toggle-specs")
						.classList.toggle("rotate-180");
				}}>
				<ul className="flex items-center px-5 py-3">
					<li>Specs</li>
					<li className="ml-auto">
						<ToggleView id="toggle-specs" />
					</li>
				</ul>
			</button>

			<div className="hidden" id="specs-text">
				<div className="p-7 bg-gray-200">
					{specsJson.map(function (spec, i) {
						return (
							<ul key={i} className="mb-6">
								<li className="font-bold text-xl uppercase border-y border-gray-400 py-2 mb-5">
									{spec.title}
								</li>
								{spec.blocks.map(function (spec, i) {
									return (
										<li
											key={i}
											className="attribute-values text-sm mb-2"
											tabIndex="0">
											<ul className="flex">
												<li className="basis-3/12 font-bold text-right mr-3">
													{spec.span}:
												</li>
												<li className="basis-fill">{spec.title}</li>
											</ul>
										</li>
									);
								})}
							</ul>
						);
					})}

					<ul class="mb-6">
						<li class="font-bold text-xl uppercase">Disclaimers</li>
						<li class="attribute-values mb-2 text-xs" tabindex="0">
							Specifications subject to change without notice and without
							incurring obligation. Products depicted on website and other
							advertisements are for demonstration purposes only. Actual
							products offered for sale may vary in design, required
							attachments, safety features and non-functional appearance from.
							See other general disclaimers at the bottom of our website.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
