export default function AppliedFilter({
	title,
	className,
	addStyle,
	addClick,
	onClick = null,
}) {
	return (
		<button
			className={`p-3 rounded flex items-center justify-center bg-gray-200 text-xs ${className}`}
			onClick={onClick}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 96 960 960"
				className="w-6 mr-2">
				<path d="m330 768 150-150 150 150 42-42-150-150 150-150-42-42-150 150-150-150-42 42 150 150-150 150 42 42Zm150 208q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-156t86-127Q252 239 325 207.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 82-31.5 155T763 858.5q-54 54.5-127 86T480 976Z" />
			</svg>
			{title}
		</button>
	);
}
