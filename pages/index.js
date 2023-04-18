import BreadCrumbs from "../components/BreadCrumbs";
import Gallery from "../components/Gallery";
import AddCart from "../components/AddCart/AddCart";
import Reviews from "../components/Reviews";
import Features from "../components/Features/Features";
import Specs from "../components/Specs";
import Maintenance from "../components/Maintenance";
import DocumentsGuides from "../components/DocumentsGuides";
import FindParts from "../components/FindParts";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts";
import H1 from "../components/PDP/H1";
import H2 from "../components/PDP/H2";
import Price from "../components/PDP/Price";

export default function Index() {
	return (
		<>
			<div className="bg-gray-400" style={{ minHeight: "160px" }}></div>
			<main className="p-5">
				<ul className="max-w-screen-2xl grid grid-cols-12 gap-3 mx-auto">
					<li className="col-span-12">
						<BreadCrumbs />
					</li>
					<li className="col-span-12 lg:col-span-7 xl:col-span-8">
						<Gallery />
					</li>
					<li className="col-span-12 lg:col-span-5 xl:col-span-4 lg:sticky lg:top-0 self-start">
						<div className="md:px-6 py-4">
							<H1 />
							<H2 />
							<Price />
							<AddCart />
							<ul className="list-disc px-8 text-xs leading-6">
								<li className="mt-5">
									A 24HP/725cc Kohler 7000 Series V-Twin OHV Engine, OHV engine
									delivers high-performance power and exceptionally smooth,
									quiet operation
								</li>

								<li className="mt-1">
									Dual hydrostatic transmissions allow for quick and effortless
									7 MPH forward (3.5 MPH reverse) ground speeds that leaves your
									lawn with a professional-quality finish
								</li>

								<li className="mt-1">
									54-in. AeroForce fabricated deck that delivers a signature cut
									with fewer clumps and stragglers, finer clippings and
									increased evenness
								</li>
							</ul>
						</div>
					</li>
					<li className="col-span-12 lg:col-span-7 xl:col-span-8">
						<Reviews />
						<Features />
						<Specs />
						<Maintenance />
						<DocumentsGuides />
						<FindParts />
						<RelatedProducts />
					</li>
					{/* <li className="hidden md:block lg:w-5/12 xl:w-4/12 sticky top-0 h-full"> */}
				</ul>
			</main>
			<div className="bg-gray-400" style={{ minHeight: "600px" }}></div>
		</>
	);
}
