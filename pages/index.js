import Image from "next/image";

import ProductCategories from "@/components/ProductCategories";
import H1 from "@/components/H1";
import SEOGreek from "@/components/SEOGreek";
import SEOLinks from "@/components/SEOLinks";
import ProductFinder from "@/components/ProductFinder";
import Button from "@/buttons/Main";
import CTABlock from "@/components/CTABlock";

import cats from "@/data/home.json";

export default function Index() {
	return (
		<ul className="pb-20">
			<li className="max-w-screen-2xl mx-auto p-3">
				<ul className="xl:flex">
					<li className="xl:basis-8/12">
						<div className="relative min-h-[34em]">
							<Image
								src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/dw65a0ad0d/images/product-line-browse/Main-Carousel/47RTCAB7010_ZTXS554_Env_01-1015x630.jpg"
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								alt=""
								className="object-cover"
							/>
						</div>
					</li>
					<li className="xl:basis-4/12 bg-amber-400 p-10">
						<ul>
							<li className="text-3xl font-bold">
								Up to $300 off select Ultima Series™ Zero-Turns
							</li>
							<li className="mt-2">
								Save up to $300 off on select Ultima Series Zero-Turns now
								through April 30th.
							</li>
							<li className="mt-2 text-xs pl-6">
								*Restrictions apply. Click here to learn more for complete
								details.
							</li>
							<li className="mt-8">
								<Button
									title="Shop Ultima Series™ Zero-Turns"
									className="block bg-black text-white px-10 py-2 rounded-2xl w-full text-center"
									noIcon
									href="/lawn-mowers/riding-lawn-mowers/zero-turn-mowers"
								/>
							</li>
						</ul>
					</li>
				</ul>
			</li>

			<li className="max-w-screen-2xl mx-auto p-3 my-10">
				<H1
					title="Product Lineup"
					srOnly="Cub Cadet"
					className="text-4xl mb-8 text-center"
				/>

				<ProductCategories title="Product Lineup" cats={cats} />
			</li>

			<li className="mt-4">
				<div className="bg-gray-400 p-8">
					<ProductFinder />
				</div>
			</li>

			<li className="bg-gray-200 p-8">
				<ul className="xl:grid grid-cols-3 gap-4 max-w-screen-2xl mx-auto">
					<li className="bg-white p-10">
						<CTABlock
							src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/dw4fcbb82e/images/product-line-browse/Main-Carousel/CC_Family-UltimaFull-env2023-desktop.jpg"
							title="Find The Right Zero-Turn"
							copy="The Cub Cadet® product finder can help you find the right zero-turn for your yard. Get started here."
							buttonText="Get Started"
							href="#top"
						/>
					</li>
					<li className="bg-white p-10">
						<CTABlock
							src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/dweda7b4bb/images/product-line-browse/Main-Carousel/53RZ3CSB050_ProX_636_Env_02_v1-1015x630.jpg"
							title="Stand Up To Any Job"
							copy="The PRO X Series™ helps you make the most of every job, with the zero-turn flexibility you need to mow a wider range of properties."
							buttonText="Shop PRO X Series™"
							href="#top"
						/>
					</li>
					<li className="bg-amber-400 p-10">
						<CTABlock
							src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/dw76d5a715/images/product-line-browse/Main-Carousel/33ABA7ES710_XT1_Enduro_LT42E_Env_02-1015x630.jpg"
							title="Premium Results, Minimal Maintenance"
							copy="Fully electric with the latest lithium-ion battery technology,
								the Cub Cadet® LT42E delivers the same premium cut as its gas
								counterpart with less maintenance."
							buttonText="Learn More About the Cub Cadet® LT42E"
							href="#top"
						/>
					</li>
				</ul>
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
