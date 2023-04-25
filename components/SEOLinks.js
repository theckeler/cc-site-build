export default function SEOLinks() {
	return (
		<ul className="lg:grid lg:grid-cols-6 lg:gap-4">
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
