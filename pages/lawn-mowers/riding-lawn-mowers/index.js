import Link from "next/link";

import BreadCrumbs from "@/components/BreadCrumbs";
import CategoryCard from "@/components/CategoryCard";
import H1 from "@/components/H1";
import SEOGreek from "@/components/SEOGreek";
import SEOLinks from "@/components/SEOLinks";
import ProductFinder from "@/components/ProductFinder";

export default function Index() {
	return (
		<ul className="pb-20">
			<li className="max-w-screen-2xl mx-auto p-3">
				<BreadCrumbs
					crumbs={[
						{ title: "Home", url: "/" },
						{ title: "Lawn Mowers", url: "/lawn-mowers" },
						{ title: "Riding Lawn Mowers" },
					]}
					cta={{ title: "Buy Stuff", url: "#products" }}
				/>
			</li>
			<li className="max-w-screen-2xl mx-auto p-3">
				<H1
					title="Explore Riding Lawn Mowers"
					srOnly="Cub Cadet"
					className=""
				/>
				<p className="text-sm my-8 max-w-6xl leading-6">
					A complete lineup of zero-turn mowers, lawn and garden tractors, and
					electric mowers, all featuring the strength and durability that bring
					your lawn to life.
				</p>

				<ul className="lg:grid lg:grid-cols-3 lg:gap-4">
					<li className="">
						<CategoryCard
							h2="Zero Turn Mowers"
							h3="A Strong Experience at Every Turn"
							p="Designed with strength, comfort and the ability to get the job done 50% faster than riding tractors, each Cub Cadet zero-turn riding mower is engineered to handle a range of terrain and cover up to 5 acres, with steering wheel options that increase ease."
							href="/lawn-mowers/riding-lawn-mowers/zero-turn-mowers"
						/>
					</li>
					<li className="mt-4 lg:mt-0">
						<CategoryCard
							h2="Lawn & Garden Tractors"
							h3="Power & Precision for the Bigger Challenges"
							p="Built in America since ‘61 and backed by the industry’s
									strongest warranty, Cub Cadet® lawn and garden tractors all
									come standard with the strongest cutting systems for mowing
									performance, refined ergonomics designed around you and an
									array of attachments and accessories for year-round
									versatility and utility."
							href="#top"
						/>
					</li>
					<li className="mt-4 lg:mt-0">
						<CategoryCard
							h2="Electric Riding Mowers"
							h3="Zero Gasoline, Zero Emissions"
							p="We took the proven strength and performance of our gas-powered
									machines and combined them with a powerful and convenient
									lithium-ion battery to create electric lawn mowers with no
									power fade and reduced noise for a more enjoyable ride."
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
