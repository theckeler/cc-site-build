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
//import SEOGreek from "@/components/SEOGreek";
import SEOLinks from "@/components/SEOLinks";
import Article from "@/product/Article";
//import DealerSelect from "@/addtocart/DealerSelect";
//import ButtonEdit from "@/buttons/Edit";
//import ButtonMap from "@/buttons/Map";
import Faqs from "@/components/Faqs";
import ShopYourDealer from "@/components/ShopYourDealer";

import pdpJSON from "@/data/pdp.json";
//import InputButton from "@/components/InputButton";

export default function Index() {
	const faqs = [
		{
			question: "Nulla fermentum quis tellus sed suscipit?",
			answer:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices erat ut justo vulputate, vitae laoreet ligula auctor. Vivamus vel efficitur massa, nec rhoncus velit. Aliquam id efficitur augue, at porta enim. Praesent ut felis at leo dictum elementum eget ac justo. Etiam ultrices euismod tempus. Nunc molestie ultrices luctus. Integer vestibulum tempor tellus sed dignissim. Nam fermentum sit amet ante vitae mollis. Integer at orci nec quam posuere mattis sit amet quis leo. Nulla fermentum quis tellus sed suscipit. Morbi et purus ultricies, laoreet metus posuere, porta leo.",
		},
		{
			question:
				"Sed eleifend volutpat ante at bibendum est sollicitudin sit amet?",
			answer:
				"Morbi rutrum mi quis mauris mollis blandit. Sed porttitor, est quis auctor molestie, purus tellus ultricies tortor, vitae posuere metus massa in turpis. In neque tellus, tempor eget dapibus at, luctus vitae massa. Donec interdum lacus sed dui aliquet, at luctus urna interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam tristique dui ut eros faucibus, nec faucibus tellus interdum. Sed cursus fermentum est, non accumsan lectus rutrum sit amet. Sed eleifend volutpat ante, at bibendum est sollicitudin sit amet. Phasellus blandit lorem id enim mollis tincidunt. Integer varius tellus ligula, dignissim volutpat nulla pellentesque ac. Nam mauris elit, luctus vitae justo sed, convallis consequat lectus. Fusce tristique enim ac dolor gravida condimentum. Ut elementum finibus sem vel ultricies. Suspendisse potenti.",
		},
		{
			question:
				"Etiam dictum sapien tempor laoreet semper diam metus tristique arcu?",
			answer:
				"Duis vestibulum augue interdum massa rutrum auctor. Etiam in mattis magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce vulputate enim vitae dolor accumsan vehicula. Integer laoreet sed lorem sit amet volutpat. Nulla at magna varius, cursus turpis vel, elementum lorem. Donec laoreet feugiat erat id mollis. Cras pulvinar, nunc eu faucibus ultrices, mi metus ornare massa, sed malesuada lacus dolor vitae mi. Vestibulum rhoncus, sapien a pellentesque condimentum, orci mi vehicula nisl, at finibus leo odio dictum libero. Sed varius, lorem et ultrices faucibus, magna magna malesuada nunc, sed placerat magna massa nec nunc. Etiam dictum, sapien tempor laoreet semper, diam metus tristique arcu, vel suscipit urna est sit amet arcu. Quisque id est vitae quam hendrerit aliquet ac vitae tortor.",
		},
		{
			question: "Quisque vestibulum leo odio?",
			answer:
				"Mauris laoreet, dui a eleifend dictum, enim felis vehicula orci, in congue sem dui vel risus. Cras interdum, nunc in vestibulum tristique, est purus viverra eros, sodales pretium diam mi et sapien. Quisque ornare, ipsum vel suscipit venenatis, leo lectus laoreet ligula, in finibus enim tortor eu odio. In tristique consequat elit vel ornare. Mauris accumsan congue metus, in pulvinar lacus rhoncus vel. Nulla laoreet faucibus nisl, quis condimentum quam finibus in. Quisque vestibulum leo odio, ac mollis lectus rutrum eu. Maecenas ac vehicula dui, sed facilisis diam. Praesent id quam facilisis, viverra turpis et, vehicula augue. In quis risus sed diam sollicitudin sollicitudin. Nunc quis neque facilisis, sagittis mi vel, aliquet libero. Integer posuere, felis scelerisque sagittis egestas, erat elit tempor lacus, ac consequat diam ligula sed velit. Mauris condimentum suscipit fermentum. Sed enim eros, pharetra at turpis non, malesuada eleifend ex. Vestibulum pulvinar laoreet imperdiet.",
		},
		{
			question: "In rutrum lectus id blandit iaculis?",
			answer:
				"Aliquam convallis purus quis tristique varius. Etiam vel nibh ultrices, egestas augue vitae, varius nunc. In tristique accumsan mauris, in sollicitudin leo condimentum ut. In finibus dui scelerisque, vulputate tortor non, gravida urna. In rutrum lectus id blandit iaculis. Ut rhoncus, quam sed dictum congue, mi neque bibendum eros, eget sodales erat neque at magna. Nunc nec erat eu est ultrices fringilla eu eget nunc.",
		},
	];

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
				</li>
				<li className="bg-gray-100">
					<div className="max-w-screen-2xl mx-auto">
						<ShopYourDealer />
					</div>
				</li>
				<li className="sticky top-0 z-50 bg-gray-200" id="products">
					<ul className="flex items-center max-w-screen-2xl mx-auto px-3 py-2">
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

				<li className="max-w-screen-2xl mx-auto p-3 border-t mt-20">
					{/* <SEOGreek /> */}
					<h2 className="text-3xl mb-4">Questions & Answers</h2>
					<Faqs faqs={faqs} addID="faqs" className="" />
				</li>

				<li className="max-w-screen-2xl mx-auto p-3">
					<h2 className="text-3xl mb-4">Related Articles</h2>
					<Article articles={articles} />
				</li>

				<li className="max-w-screen-2xl mx-auto p-3">
					<h2 className="text-3xl mb-4">Related Searches</h2>
					<SEOLinks />
				</li>
			</ul>
		</>
	);
}
