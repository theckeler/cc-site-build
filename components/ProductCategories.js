import CategoryCard from "@/cards/Category";

export default function ProductCategories({ categories }) {
	return (
		<ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4">
			{categories.map(function (category, i) {
				return (
					<li className="" key={i}>
						<CategoryCard
							src={category.src}
							h2={category.h2}
							h3={category.h3}
							p={category.p}
							href={category.href}
							className="h-full"
						/>
					</li>
				);
			})}
		</ul>
	);
}
