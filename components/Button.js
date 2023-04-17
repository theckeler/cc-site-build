export default function Button({ title, addClass, addStyle, noIcon = false }) {
	return (
		<button
			className={`flex items-center justify-center text-center ${addClass}`}>
			{title}{" "}
			{!noIcon && (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="1.4em"
					height="1.4em"
					viewBox="0 96 960 960"
					className="ml-1">
					<path d="m480 722 146-146-146-146-42 42 74 74H330v60h182l-74 74 42 42Zm0 254q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-156t86-127Q252 239 325 207.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 82-31.5 155T763 858.5q-54 54.5-127 86T480 976Zm0-60q142 0 241-99.5T820 576q0-142-99-241t-241-99q-141 0-240.5 99T140 576q0 141 99.5 240.5T480 916Zm0-340Z" />
				</svg>
			)}
		</button>
	);
}
