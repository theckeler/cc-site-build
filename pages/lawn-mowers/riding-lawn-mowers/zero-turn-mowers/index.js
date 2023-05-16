import BreadCrumbs from "@/components/BreadCrumbs";
import H1 from "@/components/H1";
import ProductCard from "@/cards/ProductCard";
import Sort from "@/buttons/Sort";
import ProductFinder from "@/product/Finder";
import Compare from "@/components/Compare";
import ViewMore from "@/buttons/ViewMore";
import IconCompare from "@/icons/Compare";
import Filter from "@/buttons/Filter";
import CTAHero from "@/cta/Hero";
import SEOGreek from "@/components/SEOGreek";
import SEOLinks from "@/components/SEOLinks";
import Article from "@/product/Article";
import DealerSelect from "@/addtocart/DealerSelect";
import ButtonEdit from "@/buttons/Edit";

import pdpJSON from "@/data/pdp.json";
import InputButton from "@/components/InputButton";

export default function Index() {
	const articles = [
		{
			title: "How to Change the Air Filter in Zero-Turn Lawn Mower",
			copy: "Changing the air filter in your zero-turn lawn mower is very easy with a little direction. Watch our instructional video that will take you step by step through",
			type: "MAINTENANCE",
			url: "#top",
		},
		{
			title: "How to Change the Deck Belt on a Cub Cadet Zero-Turn Rider",
			copy: "Change the mower deck belt on your Cub Cadet zero-turn mower with these helpful tips. Cub Cadet has the mower deck parts and advice you need to do a mower deck belt replacement on your own. Learn mower about repairing your",
			type: "REPAIRS",
			url: "#top",
		},
		{
			title: "How to Change the Gas on a Cub Cadet Zero-Turn Rider",
			copy: "Changing the air filter in your zero-turn lawn mower is very easy with a little direction. Watch our instructional video that will take you step by step through",
			type: "MAINTENANCE",
			url: "#top",
		},
		{
			title: "How to Change the Oil on a Cub Cadet Zero-Turn Rider",
			copy: "Learn how to change the oil in a riding lawn mower with instructions from Cub Cadet. Our video and tips make changing the lawn mower oil on your zero-turn",
			type: "MAINTENANCE",
			url: "#top",
		},
		{
			title: "Maintenance Schedule and Tips",
			copy: "Learn how to keep your mower running smoothly with Cub Cadet's zero-turn mower maintenance schedule and tips.",
			type: "MAINTENANCE",
			url: "#top",
		},
		{
			title: "Zero-Turn Operation Tips",
			copy: "Find out how to use a zero-turn riding lawn mower with these tips from Cub Cadet. Zero-turn mowers allow you greater control over your lawn, especially",
			type: "TRICKS AND TIPS",
			url: "#top",
		},
	];
	return (
		<>
			<ul className="">
				<li className="max-w-screen-2xl mx-auto p-3">
					<BreadCrumbs
						crumbs={[
							{ title: "Home", url: "/" },
							{ title: "Lawn Mowers", url: "/lawn-mowers" },
							{
								title: "Riding Lawn Mowers",
								url: "/lawn-mowers/riding-lawn-mowers",
							},
							{ title: "Zero-Turn Mowers" },
						]}
						cta={{
							title: "Help me decide",
							url: "#product-finder",
							className: "text-sm",
						}}
					/>
				</li>
				<li className="max-w-screen-2xl mx-auto p-3">
					<H1 title="Zero-Turn Mowers" srOnly="Cub Cadet" />

					<p className="text-sm leading-loose">
						Zero-turn lawn mowers answer the call of challenging yards and
						difficult obstacles. It’s time to explore the full Cub Cadet line-up
						of innovative zero-turns, including lap bar and Cub Cadet exclusive
						steering wheel options as part of the Ultima series. With a
						zero-turn mower, the possibilities are at every turn.
					</p>

					<div className="p-2 lg:p-4 border mt-4">
						<ul className="flex flex-col lg:flex-row">
							<li className="lg:basis-8/12">
								<h2 className="text-2xl">Shop Your Dealer:</h2>
							</li>
							<li className="lg:basis-4/12">
								<InputButton
									id="zipcode-postal-code"
									placeholder="44280"
									name="zipcode"
									className="mt-2 lg:mt-0 lg:ml-4"
									classNameButton="bg-gray-300 text-white"
									padding="p-2"
								/>
							</li>
						</ul>

						<p className="text-xs mt-1">
							Donec arcu orci, porttitor in eros aliquam, ultrices convallis
							magna. Nam finibus molestie dolor. Mauris in varius lorem. Mauris
							nec erat neque. Phasellus ut enim velit.
						</p>

						<ul className="mt-2 lg:mt-4 grid grid-cols-1 lg:grid-cols-3 gap-2 lg:divide-x divide-gray-300">
							<li className="">
								<DealerSelect
									dealer="Worcester Sales and Service, Inc."
									miles="22.1"
									street="34200 LORAIN ROAD"
									cityState="NORTH RIDGEVILLE, OH 44039"
									phone="(330) 554-5434"
									id="Worcester"
									reviewNum={44}
									className="text-xs rounded-lg lg:p-3"
									showAddress
									selected
									activeColor="bg-amber-400"
								/>
							</li>
							<li className="">
								<DealerSelect
									dealer="Northfield Power Equipment"
									miles="25.0"
									street="49 MEADOW LANE"
									cityState="NORTHFIELD, OH 44067"
									phone="(330) 467-0020"
									reviewNum={67}
									className="text-xs rounded-lg lg:p-3 lg:ml-2"
									id="Northfield"
									activeColor="bg-amber-400"
									showAddress
								/>
							</li>
							<li className="">
								<DealerSelect
									dealer="Marshall Equipment Company"
									miles="28.5"
									street="5151 MAYFIELD ROAD"
									cityState="LYNDHURST, OH 44124"
									phone="(440) 442-1846"
									reviewNum={23}
									className="text-xs rounded-lg lg:p-3 lg:ml-2"
									id="Marshall"
									activeColor="bg-amber-400"
									showAddress
								/>
							</li>
						</ul>
					</div>
				</li>
				<li className="sticky top-0 z-50 bg-gray-200" id="products">
					<ul className="flex items-center max-w-screen-2xl mx-auto px-3 py-2 mt-2 xl:mt-6">
						<li>
							<Sort />
						</li>
						<li className="hidden lg:block">
							<ul className="flex items-center text-sm">
								<li>
									<a className="block p-3" href="#top">
										Ultima Series™ ZT
									</a>
								</li>
								<li>
									<a className="block p-3" href="#top">
										Ultima Series™ ZTS
									</a>
								</li>
								<li>
									<a className="block p-3" href="#top">
										Ultima Series™ ZTX
									</a>
								</li>
								<li>
									<a className="block p-3" href="#top">
										Ultima Series™ ZTXS
									</a>
								</li>
							</ul>
						</li>
						<li className="ml-2 ml-auto flex">
							<Filter />

							<button
								className="bg-amber-400 rounded p-3 ml-2"
								onClick={(e) => {
									const productFinder =
										document.querySelector("#product-finder");
									//productFinder.classList.toggle("hidden");
									productFinder.scrollIntoView();
								}}>
								<ul className="flex items-center">
									<li className="h-6 w-6 mr-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 96 960 960">
											<path d="M476 821q18 0 30.5-12.5T519 778q0-18-12.5-30.5T476 735q-18 0-30.5 12.5T433 778q0 18 12.5 30.5T476 821Zm-39-155h69q0-32 9.5-53.5T557 559q29-28 42.5-54.5T613 447q0-57-39-88t-98-31q-57 0-94 28t-54 72l63 26q11-23 31-41t56-18q33 0 50 17t17 41q0 22-12 39.5T499 531q-45 43-53.5 64.5T437 666ZM180 949q-29 0-51-22t-22-51V276q0-29 22-51t51-22h600q29 0 51 22t22 51v600q0 29-22 51t-51 22H180Z" />
										</svg>
									</li>
									<li className="text-xs uppercase">Help Me Decide</li>
								</ul>
							</button>

							<button
								className="hidden bg-red-500 rounded p-3 ml-2"
								id="compare-button"
								onClick={() => {
									document.querySelector("#compare").classList.toggle("hidden");
								}}>
								<ul className="flex items-center">
									<li className="h-6 w-6 mr-2">
										<IconCompare />
									</li>
									<li className="text-xs uppercase">Compare</li>
								</ul>
							</button>
						</li>
					</ul>
					<section className="hidden" id="compare">
						<Compare className="p-2" />
					</section>
					{/* <section className="hidden" id="product-finder">
						<ProductFinder className="p-2" />
					</section> */}
				</li>
				<li className="px-3 py-10">
					<ul className="md:grid lg:grid-cols-2 xl:grid-cols-4 gap-3 max-w-screen-2xl mx-auto">
						{pdpJSON.products.map(function (product, i) {
							return (
								<li key={i} className="" style={{ minWidth: "240px" }}>
									<ProductCard
										{...{ product }}
										displayButton={false}
										displayMSRP={false}
										displayPrice={true}
										displayStars={true}
										displayAvailablity={true}
										addToCart={true}
									/>
								</li>
							);
						})}
					</ul>
					<div className="max-w-screen-2xl mx-auto border-b pb-8 my-10 relative">
						<div className="text-xs text-center">Showing 8 of 32</div>

						<ViewMore
							title="Show More Products"
							className="bg-amber-400 absolute left-2/4 -translate-x-2/4 top-3/4"
						/>
					</div>
				</li>

				<li className="mt-4 bg-gray-300" id="product-finder">
					<div className="p-3 lg:py-8 max-w-screen-2xl mx-auto">
						<ProductFinder />
					</div>
				</li>

				<li className="max-w-screen-2xl mx-auto p-3 lg:py-8">
					<CTAHero block={pdpJSON.ctaHero[0]} />
				</li>

				<li className="max-w-screen-2xl mx-auto p-3 border-t mt-20 pt-8">
					<h2 className="text-3xl mb-8">Related Articles</h2>
					<Article articles={articles} />
				</li>

				<li className="max-w-screen-2xl mx-auto p-3 pt-8">
					<h2 className="text-3xl mb-8">Related Searches</h2>
					<SEOLinks />
				</li>

				<li className="max-w-screen-2xl mx-auto p-3 my-10">
					<SEOGreek />
				</li>
			</ul>
		</>
	);
}
