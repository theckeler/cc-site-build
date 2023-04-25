import Link from "./Icons/Link";
import ToggleButton from "./Buttons/Toggle";

import CategoryCard from "@/components/CategoryCard";

export default function ProductCategories({ title, cats }) {
	return (
		<ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4">
			{cats.map(function (cat, i) {
				return (
					<li className="" key={i}>
						<CategoryCard h2={cat.h2} h3={cat.h3} p={cat.p} href={cat.href} />
					</li>
				);
			})}
		</ul>
	);
}
