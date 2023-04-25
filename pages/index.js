import Link from "next/link";

import CategoryCard from "@/components/CategoryCard";
import SEOGreek from "@/components/SEOGreek";
import SEOLinks from "@/components/SEOLinks";
import ProductFinder from "@/components/ProductFinder";

export default function Index() {
	return (
		<ul className="pb-20">
			<li className="max-w-screen-2xl mx-auto p-3">
				<h1 className="text-4xl mb-4">Product Lineup</h1>
				<ul className="lg:grid lg:grid-cols-3 lg:gap-4">
					<li className="">
						<CategoryCard
							h2="Lawn Mowers"
							p="Innovative zero-turn mowers, riding lawn mowers and push mowers, all designed to give you unmatched strength and durability."
							href="/lawn-mowers"
						/>
					</li>
					<li className="mt-4 lg:mt-0">
						<CategoryCard
							h2="Snow Blowers"
							p="Three tiers of snow-clearing power engineered so winter never stands in your way."
							href="#top"
						/>
					</li>
					<li className="mt-4 lg:mt-0">
						<CategoryCard
							h2="UTVs"
							p="Setting a new standard with industry-leading features for utility vehicles that can handle it all."
							href="#top"
						/>
					</li>
					<li className="mt-4 lg:mt-0">
						<CategoryCard
							h2="Electric Mowers & Tools"
							p="Introducing the all fully electric lineup from Cub Cadet. 100% electric. 0% Compromise. Explore Now."
							href="#top"
						/>
					</li>
					<li className="mt-4 lg:mt-0">
						<CategoryCard
							h2="Commercial Equipment"
							p="We started from scratch by designing every element of our commercial line with the professional in mind."
							href="#top"
						/>
					</li>
					<li className="mt-4 lg:mt-0">
						<CategoryCard
							h2="Accessories"
							p="Optimize your equipment with a full line of accessories and attachments such as baggers, snow blades and mulch kits."
							href="#top"
						/>
					</li>
				</ul>
			</li>
			<li className="mt-4">
				<ProductFinder />
			</li>
			<li className="max-w-screen-2xl mx-auto p-3 border-t mt-20 pt-8">
				<SEOLinks />
			</li>
			<li className="max-w-screen-2xl mx-auto p-3 mt-10">
				<SEOGreek />
			</li>
		</ul>
	);
}
