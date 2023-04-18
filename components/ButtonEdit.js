export default function ButtonEdit({ title, addClass, addStyle, addClick }) {
	return (
		<button
			className="text-center rounded-sm inline-block p-2 text-xs h-full uppercase font-bold bg-gray-200"
			onClick={addClick}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="2em"
				height="2em"
				viewBox="0 96 960 960">
				<path d="M180 1044q-24 0-42-18t-18-42V384q0-24 18-42t42-18h405L300 610v254h254l286-288v408q0 24-18 42t-42 18H180Zm180-240V634l302-302 171 168-303 304H360Zm516-347L705 289l57-57q17-17 42.5-17t42.5 18l84 85q17 18 17 42.5T930 402l-54 55Z" />
			</svg>
		</button>
	);
}