import Image from "next/image";

import ProductCategories from "@/components/ProductCategories";
import H1 from "@/components/H1";
import SEOGreek from "@/components/SEOGreek";
import SEOLinks from "@/components/SEOLinks";
import ProductFinder from "@/components/ProductFinder";
import CTABlock from "@/cta/Block";
import CTAHero from "@/cta/Hero";
import ProductBlock from "@/components/ProductBlock";

import homeJSON from "@/data/home.json";

export default function Index() {
	return (
		<ul className="pb-20">
			<li className="max-w-screen-2xl mx-auto p-3">
				<CTAHero block={homeJSON.ctaHero[0]} />
			</li>

			<li className="max-w-screen-2xl mx-auto p-3 my-10">
				<H1
					title="Product Lineup"
					srOnly="Cub Cadet"
					className="text-4xl mb-8 text-center"
				/>
				<ProductCategories categories={homeJSON.categories} />
			</li>

			<li className="mt-4">
				<div className="bg-gray-300 p-3 lg:py-8">
					<ProductFinder className="max-w-screen-2xl mx-auto" />
				</div>
			</li>

			<li className="bg-gray-200 p-4 lg:p-8">
				<ul className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 max-w-screen-2xl mx-auto">
					<li className="bg-white p-4 lg:p-8">
						<CTABlock
							src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/dw4fcbb82e/images/product-line-browse/Main-Carousel/CC_Family-UltimaFull-env2023-desktop.jpg"
							title="Find The Right Zero-Turn"
							copy="The Cub Cadet® product finder can help you find the right zero-turn for your yard. Get started here."
							buttonText="Get Started"
							href="#top"
						/>
					</li>
					<li className="bg-white p-4 lg:p-8">
						<CTABlock
							src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/dweda7b4bb/images/product-line-browse/Main-Carousel/53RZ3CSB050_ProX_636_Env_02_v1-1015x630.jpg"
							title="Stand Up To Any Job"
							copy="The PRO X Series™ helps you make the most of every job, with the zero-turn flexibility you need to mow a wider range of properties."
							buttonText="Shop PRO X Series™"
							href="#top"
						/>
					</li>
					<li className="bg-amber-400 p-4 lg:p-8 md:col-span-2 xl:col-auto">
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

			<li className="max-w-screen-2xl mx-auto p-3">
				<CTAHero block={homeJSON.ctaHero[1]} reverse />
			</li>

			<li className="max-w-screen-2xl mx-auto p-3 mt-20 pt-8">
				<h2 className="text-3xl mb-8 text-center">Recently Viewed</h2>
				<ProductBlock products={homeJSON.recentlyViewed} />
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
