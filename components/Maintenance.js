import ToggleButton from "./Buttons/Toggle";
//import Cards from "./RelatedProducts/Card";
import Button from "./Buttons/Main";
import ScrollButton from "./Buttons/Scroll";

const articles = [
	{
		title: "How to Change the Air Filter in Zero-Turn Lawn Mower",
		copy: "Changing the air filter in your zero-turn lawn mower is very easy with a little direction. Watch our instructional video that will take you step by step through",
		type: "MAINTENANCE",
		url: "#top",
	},
	{
		title: "How to Change the Deck Belt on a Cub Cadet Zero-Turn Rider",
		copy: "Change the mower deck belt on your Cub Cadet zero-turn mower with these helpful tips. Cub Cadet has the mower deck parts and advice you need to do a mower deck belt replacement on your own. Learn mower about repairing your",
		type: "REPAIRS",
		url: "#top",
	},
	{
		title: "How to Change the Gas on a Cub Cadet Zero-Turn Rider",
		copy: "Changing the air filter in your zero-turn lawn mower is very easy with a little direction. Watch our instructional video that will take you step by step through",
		type: "MAINTENANCE",
		url: "#top",
	},
	{
		title: "How to Change the Oil on a Cub Cadet Zero-Turn Rider",
		copy: "Learn how to change the oil in a riding lawn mower with instructions from Cub Cadet. Our video and tips make changing the lawn mower oil on your zero-turn",
		type: "MAINTENANCE",
		url: "#top",
	},
	{
		title: "Maintenance Schedule and Tips",
		copy: "Learn how to keep your mower running smoothly with Cub Cadet's zero-turn mower maintenance schedule and tips.",
		type: "MAINTENANCE",
		url: "#top",
	},
	{
		title: "Zero-Turn Operation Tips",
		copy: "Find out how to use a zero-turn riding lawn mower with these tips from Cub Cadet. Zero-turn mowers allow you greater control over your lawn, especially",
		type: "TRICKS AND TIPS",
		url: "#top",
	},
];

export default function Maintenance() {
	return (
		<div className="border-b">
			<ToggleButton title="Maintance" id="maintance" />

			<div className="group hidden relative" id="maintance-text">
				<ScrollButton
					buttonType="back"
					rotate={true}
					className="left-0 -translate-x-1/4"
					onClick={(e) => {
						document.querySelector("#maintance-container").scrollTo({
							top: 0,
							left: -document
								.querySelector("#maintance-scroll")
								.getBoundingClientRect().width,
							behavior: "smooth",
						});
					}}
				/>

				<ScrollButton
					buttonType="forward"
					className="right-0 translate-x-1/4"
					onClick={(e) => {
						document.querySelector("#maintance-container").scrollTo({
							top: 0,
							left: document
								.querySelector("#maintance-scroll")
								.getBoundingClientRect().width,
							behavior: "smooth",
						});
					}}
				/>

				<div
					className="mb-6 overflow-scrollbar overflow-x-auto py-2"
					id="maintance-container">
					<ul className="md:flex" id="maintance-scroll">
						{articles.map(function (article, i) {
							return (
								<li key={i} className="p-2 " style={{ minWidth: "240px" }}>
									<a
										href="#top"
										className="flex flex-col mb-4 md:mb-0 px-5 py-7 bg-gray-200 lg:hover:bg-amber-200 rounded-md h-full select-auto">
										<h3 className="text-lg font-bold w-full">
											{article.title}
										</h3>
										<p className="text-xs leading-5 mt-3 mb-3">
											{article.copy}
										</p>
										<Button
											title="Read Article"
											noIcon={false}
											className="flex items-center justify-center  px-1 py-2 mt-auto text-sm font-bold bg-amber-300 rounded-lg w-full"
										/>
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}
