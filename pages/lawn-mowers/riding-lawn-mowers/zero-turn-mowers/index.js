import Image from "next/image";
import BreadCrumbs from "@/components/BreadCrumbs";
import H1 from "@/components/H1";
import ProductCard from "@/cards/ProductCard";
import Sort from "@/components/Buttons/Sort";
import ProductFinder from "@/product/Finder";
import Compare from "@/components/Compare";
import ViewMore from "@/components/Buttons/ViewMore";
import IconCompare from "@/components/Icons/Compare";
import Filter from "@/components/Buttons/Filter";
import CTAHero from "@/cta/Hero";

import pdpJSON from "@/Data/pdp.json";

export default function Index() {
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
						cta={{ title: "Buy Stuff", url: "#products" }}
					/>
				</li>
				<li className="max-w-screen-2xl mx-auto p-3">
					<H1 title="Zero-Turn Mowers" srOnly="Cub Cadet" />
					<p className="text-sm mt-8 max-w-6xl leading-loose">
						Zero-turn lawn mowers answer the call of challenging yards and
						difficult obstacles. It’s time to explore the full Cub Cadet line-up
						of innovative zero-turns, including lap bar and Cub Cadet exclusive
						steering wheel options as part of the Ultima series. With a
						zero-turn mower, the possibilities are at every turn.
					</p>
				</li>
				<li className="sticky top-0 z-50 bg-gray-200" id="products">
					<ul className="flex items-center max-w-screen-2xl mx-auto px-3 py-2 mt-20">
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
						<li className="ml-2 lg:ml-auto flex">
							<Filter />

							<button
								className="bg-amber-400 rounded p-3 ml-2"
								onClick={(e) => {
									const productFinder =
										document.querySelector("#product-finder");
									productFinder.classList.toggle("hidden");
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
					<section className="hidden" id="product-finder">
						<ProductFinder className="p-2" />
					</section>
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

				<li className="mt-4 bg-gray-300">
					<div className="p-3 lg:py-8 max-w-screen-2xl mx-auto">
						<ProductFinder />
					</div>
				</li>

				<li className="max-w-screen-2xl mx-auto p-3 lg:py-8">
					<CTAHero block={pdpJSON.ctaHero[0]} />
				</li>
			</ul>
		</>
	);
}
