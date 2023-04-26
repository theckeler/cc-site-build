import Card from "./Cards/ProductCard";
import ScrollButton from "@/buttons/Scroll";

export default function ProductBlock({ products }) {
	return (
		<div className="group/buttons hidden lg:block relative" id="related-text">
			<ScrollButton
				buttonType="back"
				rotate={true}
				className="left-0 -translate-x-1/4"
				onClick={(e) => {
					document.querySelector("#related-container").scrollTo({
						top: 0,
						left: -document
							.querySelector("#related-scroll")
							.getBoundingClientRect().width,
						behavior: "smooth",
					});
				}}
			/>

			<ScrollButton
				buttonType="forward"
				className="right-0 translate-x-1/4"
				onClick={(e) => {
					document.querySelector("#related-container").scrollTo({
						top: 0,
						left: document
							.querySelector("#related-scroll")
							.getBoundingClientRect().width,
						behavior: "smooth",
					});
				}}
			/>

			<div
				className="mb-6 overflow-scrollbar overflow-x-auto py-2"
				id="related-container">
				<ul className="md:flex" id="related-scroll">
					{products.map(function (product, i) {
						return (
							<li key={i} className="p-2" style={{ minWidth: "240px" }}>
								<Card
									{...{ product }}
									className="border lg:hover:bg-gray-300 h-full"
								/>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}