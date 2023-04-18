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
import H1 from "../components/H1";
import H2 from "../components/H2";
import Price from "../components/Price";
import Desc from "../components/Desc";

export default function Index() {
	return (
		<>
			<div className="bg-gray-400" style={{ minHeight: "160px" }}></div>
			<main className="p-3">
				<ul className="max-w-screen-2xl grid grid-cols-12 gap-3 mx-auto">
					<li className="col-span-12">
						<BreadCrumbs />
					</li>
					<li className="col-span-12 lg:col-span-7 xl:col-span-8">
						<Gallery />
					</li>
					<li className="col-span-12 lg:col-span-5 xl:col-span-4 lg:sticky lg:top-0 self-start row-span-2">
						<div className="md:px-6 py-4">
							<H1 />
							<H2 />
							<Price />
							<AddCart />
							<Desc />
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
				</ul>
			</main>
			<div className="bg-gray-400" style={{ minHeight: "600px" }}></div>
		</>
	);
}
