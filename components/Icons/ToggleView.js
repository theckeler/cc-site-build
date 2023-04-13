export default function ToggleView({ addClass = null }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="28"
			height="28"
			viewBox="0 96 960 960"
			className={addClass}>
			<path d="M480 712 240 472l43-43 197 197 197-197 43 43-240 240Z" />
		</svg>
	);
}
