import BreadCrumbs from "../components/BreadCrumbs";
import PDPImages from "../components/PDPImages";
import AddCart from "../components/AddCart";
import Reviews from "../components/Reviews";
import Description from "../components/Description";
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
		<main className="p-5">
			<ul className="md:flex flex-wrap container mx-auto">
				<li className="flex flex-wrap basis-full">
					<BreadCrumbs />
				</li>
				<li className="md:w-8/12 py-4">
					<div className="md:hidden">
						<H1 />
						<H2 />
						<Price />
					</div>
					<div>
						<PDPImages />
						<div className="md:hidden">
							<AddCart />
						</div>
						<Reviews />
						<Description />
						<Specs />
						<Maintenance />
						<DocumentsGuides />
						<FindParts />
						<RelatedProducts />
					</div>
				</li>
				<li className="hidden md:block md:w-4/12 sticky top-0 h-full">
					<div className="md:px-6 py-4">
						<div className="">
							<H1 />
							<H2 />
							<Price />
						</div>
						<AddCart />
						<ul className="list-disc px-8 text-xs leading-6">
							<li className="mt-5">
								A 24HP/725cc Kohler 7000 Series V-Twin OHV Engine, OHV engine
								delivers high-performance power and exceptionally smooth, quiet
								operation
							</li>

							<li className="mt-1">
								Dual hydrostatic transmissions allow for quick and effortless 7
								MPH forward (3.5 MPH reverse) ground speeds that leaves your
								lawn with a professional-quality finish
							</li>

							<li className="mt-1">
								54-in. AeroForce fabricated deck that delivers a signature cut
								with fewer clumps and stragglers, finer clippings and increased
								evenness
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</main>
	);
}
