import Image from "next/image";
import BreadCrumbs from "../../components/BreadCrumbs";
import H1 from "../../components/H1";
import productJSON from "../../Data/products.json";
import ProductCard from "../../components/ProductCard";
import Sort from "../../components/Buttons/Sort";
import ProductFinder from "../../components/ProductFinder";
import Compare from "../../components/Compare";
import ViewMore from "../../components/Buttons/ViewMore";
import IconCompare from "../../components/Icons/Compare";
import Filter from "../../components/Buttons/Filter";

export default function Index() {
	return (
		<>
			<ul className="">
				<li className="max-w-screen-2xl mx-auto p-3">
					<BreadCrumbs
						crumbs={[
							{ title: "Home", url: "/" },
							{ title: "Lawn Mowers", url: "lawn-mowers" },
							{ title: "Riding Lawn Mowers", url: "/riding-lawn-mowers" },
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
					<div className="hidden" id="compare">
						<Compare className="p-2" />
					</div>
					<div className="hidden" id="product-finder">
						<ProductFinder className="p-2" />
					</div>
				</li>
				<li className="px-3 py-10">
					<ul className="md:grid lg:grid-cols-2 xl:grid-cols-4 gap-2 max-w-screen-2xl mx-auto">
						{productJSON.map(function (product, i) {
							return (
								<li key={i} className="p-2" style={{ minWidth: "240px" }}>
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
				<li className="bg-gray-200">
					<ProductFinder className="" />

					<section className="py-5 px-1 max-w-screen-2xl mx-auto">
						<div className="">
							<ul className="flex">
								<li className="basis-4/12">
									<div className="relative" style={{ paddingTop: "100%" }}>
										<Image
											src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/v70fc5788285a154928b80b856144e85813f5051f/ZeroTurnLanding/intro.jpg"
											alt=""
											fill
										/>
									</div>
								</li>
								<li className="basis-8/12">
									<div className="p-3">
										<h2 className="mb-2 display-2">
											Introducing the Ultima Series™ ZTXS
										</h2>
										<h3 className="mb-2 display-3">
											The Ultima Series™ Zero-Turn with <br />
											Commercial-Grade Features
										</h3>
										<p className="mb-2">
											From tight turns to inclined hillsides and stretching
											valleys, the Ultima ZTXS is built to help tackle your
											yard’s unique challenges. The Ultima ZTXS brings Cub
											Cadet’s innovative and proprietary Synchro-Steer ™
											technology to the proven Ultima Series™ platform for
											reliable precision and confident control.
										</p>
										<a
											href="https://www.cubcadet.com/en_US/lp/ztxs--zero-turn-mowers"
											clas="button text-uppercase font-weight-bold text-decoration-none d-inline-block border-0 bg-black">
											Learn more about the Ultima ztxs
										</a>
									</div>
								</li>
							</ul>
						</div>
					</section>
				</li>
			</ul>
		</>
	);
}
