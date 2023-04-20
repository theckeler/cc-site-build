import Image from "next/image";
import BreadCrumbs from "../../components/BreadCrumbs";
import H1 from "../../components/H1";
import productJSON from "../../Data/products.json";
import ProductCard from "../../components/ProductCard";

export default function Index() {
	return (
		<>
			<ul className="">
				<li className="max-w-screen-2xl mx-auto p-3">
					<BreadCrumbs
						crumbs={[
							{ title: "Lawn Mowers" },
							{ title: "Riding Lawn Mowers" },
							{ title: "Zero-Turn Mowers" },
						]}
						//cta={{ title: "Buy Stuff", url: "#products" }}
					/>
				</li>
				<li className="max-w-screen-2xl mx-auto p-3">
					<H1 title="Zero-Turn Mowers" srOnly="Cub Cadet" />
					<p className="text-sm mt-8">
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
							<button className="bg-amber-400 rounded p-3">
								<ul className="flex items-center">
									<li className="h-6 w-6 mr-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 96 960 960">
											<path d="M111 843v-73h255v73H111Zm0-242v-73h497v73H111Zm0-243v-73h739v73H111Z" />
										</svg>
									</li>
									<li className="text-xs uppercase">Sort</li>
								</ul>
							</button>
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
						<li className="ml-auto">
							<button className="bg-amber-400 rounded p-3">
								<ul className="flex items-center">
									<li className="h-6 w-6 mr-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 96 960 960">
											<path d="M425 946V707h73v84h352v73H498v82h-73Zm-315-82v-73h265v73H110Zm192-169v-83H110v-73h192v-84h73v240h-73Zm123-83v-73h425v73H425Zm160-168V205h73v83h192v73H658v83h-73Zm-475-83v-73h425v73H110Z" />
										</svg>
									</li>
									<li className="text-xs uppercase">All Filters</li>
								</ul>
							</button>
						</li>
					</ul>
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
				</li>
				<li className="bg-gray-200">
					<section class="py-5 px-1 max-w-screen-2xl mx-auto">
						<div class="">
							<ul class="flex">
								<li class="basis-4/12">
									<div className="relative" style={{ paddingTop: "100%" }}>
										<Image
											src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/v70fc5788285a154928b80b856144e85813f5051f/ZeroTurnLanding/intro.jpg"
											alt=""
											fill
										/>
									</div>
								</li>
								<li class="basis-8/12">
									<div class="p-3">
										<h2 class="mb-2 display-2">
											Introducing the Ultima Series™ ZTXS
										</h2>
										<h3 class="mb-2 display-3">
											The Ultima Series™ Zero-Turn with <br />
											Commercial-Grade Features
										</h3>
										<p class="mb-2">
											From tight turns to inclined hillsides and stretching
											valleys, the Ultima ZTXS is built to help tackle your
											yard’s unique challenges. The Ultima ZTXS brings Cub
											Cadet’s innovative and proprietary Synchro-Steer ™
											technology to the proven Ultima Series™ platform for
											reliable precision and confident control.
										</p>
										<a
											href="https://www.cubcadet.com/en_US/lp/ztxs--zero-turn-mowers"
											class="button text-uppercase font-weight-bold text-decoration-none d-inline-block border-0 bg-black">
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
