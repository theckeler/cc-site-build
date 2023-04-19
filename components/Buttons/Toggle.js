import ToggleView from "../Icons/ToggleView";
import Stars from "../Stars";
import Link from "../Icons/Link";

export default function ButtonToggle({
	title,
	id,
	className,
	style,
	onClick,
	stars = false,
	opened = false,
	linkOnly = false,
}) {
	const linkCSS = "bg-gray-200";
	return linkOnly ? (
		<a href="#top" className={`block w-full lg:hover:${linkCSS}`}>
			<ul className="flex items-center px-5 py-3">
				<li className="font-bold">{title}</li>
				<li className="ml-auto">
					<Link />
				</li>
			</ul>
		</a>
	) : (
		<button
			className={`w-full lg:hover:${linkCSS}`}
			onClick={(e) => {
				const relatedText = document.querySelector(`#${id}-text`);
				const toggleRelated = document.querySelector(`#toggle-${id}`);

				relatedText.classList.toggle("hidden");
				toggleRelated.classList.toggle("rotate-0");
				toggleRelated.classList.toggle("rotate-180");

				if (opened) {
					relatedText.classList.toggle("lg:hidden");
					toggleRelated.classList.toggle("lg:rotate-180");
					toggleRelated.classList.toggle("lg:rotate-0");
				}
			}}>
			<ul className="flex items-center px-5 py-3">
				<li className="font-bold">{title}</li>
				{!!stars && (
					<li className="flex ml-auto">
						<Stars num={5} />
						<u className="ml-1">203</u>
					</li>
				)}
				<li className={!stars ? `ml-auto` : undefined}>
					<ToggleView id={`toggle-${id}`} />
				</li>
			</ul>
		</button>
	);
}