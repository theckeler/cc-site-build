import ToggleView from "../Icons/ToggleView";
import Stars from "../Stars";

export default function ButtonToggle({
	title,
	id,
	className,
	style,
	onClick,
	stars,
	opened,
}) {
	return (
		<button
			className="w-full lg:hover:bg-amber-100"
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
				<li className={!stars && `ml-auto`}>
					<ToggleView id={`toggle-${id}`} />
				</li>
			</ul>
		</button>
	);
}
