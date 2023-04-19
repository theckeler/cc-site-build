import ToggleButton from "./Buttons/Toggle";

export default function Reviews() {
	return (
		<div className="border-b">
			<a name="reviews" id="reviews-scroll-to" />
			<ToggleButton title="Reviews" id="reviews" stars={true} />

			<div className="hidden" id="reviews-text">
				<div
					className="px-5 py-3 bg-gray-300 flex justify-center items-center"
					style={{ minHeight: "600px" }}>
					Reviews Plugin Info
				</div>
			</div>
		</div>
	);
}
