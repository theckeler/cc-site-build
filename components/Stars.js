export default function Stars({ num }) {
	return (
		<ul className="flex">
			{[...Array(num)].map((x, i) => (
				<li key={i}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 96 960 960">
						<path d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
					</svg>
				</li>
			))}
		</ul>
	);
}
