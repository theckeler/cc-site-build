import Link from "next/link";

import CategoryCard from "@/components/CategoryCard";
import BreadCrumbs from "@/components/BreadCrumbs";
import H1 from "@/components/H1";

export default function Index() {
	return (
		<ul className="">
			<li className="max-w-screen-2xl mx-auto p-3">
				<BreadCrumbs
					crumbs={[{ title: "Home", url: "/" }, { title: "Lawn Mowers" }]}
					cta={{ title: "Buy Stuff", url: "#products" }}
				/>
			</li>
			<li className="max-w-screen-2xl mx-auto p-3">
				<H1 title="Explore Lawn Mowers" srOnly="Cub Cadet" />
				<ul className="grid grid-cols-3 gap-2 mt-8">
					<li className="">
						<div className="bg-gray-200">
							<CategoryCard
								h2="Riding Lawn Mowers"
								h3="Incredible strength. Incredibly comfortable."
								p="Our quality lineup of riding lawn mowers, such as our zero-turn riders and lawn tractors, offers unparalleled strength and comfort so you can get the most out of your lawn."
								href="/lawn-mowers/riding-lawn-mowers"
							/>
						</div>
					</li>
					<li>
						<div className="bg-gray-200">
							<div href="#top" className="block p-2">
								<CategoryCard
									h2="Walk-Behind Mowers"
									h3="A power walk."
									p="From the Signature Cut™ series lawn mowers to the wide area mowers, every walk-behind mower features incredible control and maneuverability to match your mowing needs."
									href="#top"
								/>
							</div>
						</div>
					</li>
					<li>
						<div className="bg-gray-200">
							<div href="#top" className="block p-2">
								<CategoryCard
									h2="Robotic Mowers"
									h3="Cutting-edge results. Zero effort."
									p="With the XR3 robotic mower, we combined Cub Cadet power with innovative technology like the Smart Mode feature. With the touch of a button, you get a just-mowed look so you can focus on getting the most out of your yard."
									href="#top"
								/>
							</div>
						</div>
					</li>
				</ul>
			</li>
		</ul>
	);
}
