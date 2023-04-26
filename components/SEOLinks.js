export default function SEOLinks() {
	return (
		<ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 lg:gap-4">
			{[...Array(18)].map((x, i) => (
				<li key={i}>
					<a href="#top" className="underline">
						Lorem ipsum dolor sit amet
					</a>
				</li>
			))}
		</ul>
	);
}
