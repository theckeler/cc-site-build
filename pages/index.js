import Link from "next/link";

import CategoryCard from "@/components/CategoryCard";

export default function Index() {
	return (
		<div
			className="max-w-screen-2xl mx-auto p-10"
			style={{ minHeight: "50vh" }}>
			<h1 className="text-4xl border-b pb-4 mb-4">Product Lineup</h1>
			<ul className="grid grid-cols-3 gap-4">
				<li className="">
					<CategoryCard
						h2="Lawn Mowers"
						p="Innovative zero-turn mowers, riding lawn mowers and push mowers, all designed to give you unmatched strength and durability."
						href="/lawn-mowers"
					/>
				</li>
				<li>
					<CategoryCard
						h2="Snow Blowers"
						p="Three tiers of snow-clearing power engineered so winter never stands in your way."
						href="#top"
					/>
				</li>
				<li>
					<CategoryCard
						h2="UTVs"
						p="Setting a new standard with industry-leading features for utility vehicles that can handle it all."
						href="#top"
					/>
				</li>
				<li>
					<CategoryCard
						h2="Electric Mowers & Tools"
						p="Introducing the all fully electric lineup from Cub Cadet. 100% electric. 0% Compromise. Explore Now."
						href="#top"
					/>
				</li>
				<li>
					<CategoryCard
						h2="Commercial Equipment"
						p="We started from scratch by designing every element of our commercial line with the professional in mind."
						href="#top"
					/>
				</li>
				<li>
					<CategoryCard
						h2="Accessories"
						p="Optimize your equipment with a full line of accessories and attachments such as baggers, snow blades and mulch kits."
						href="#top"
					/>
				</li>
			</ul>
		</div>
	);
}
