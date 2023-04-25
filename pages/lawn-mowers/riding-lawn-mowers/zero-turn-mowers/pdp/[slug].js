import BreadCrumbs from "@/components/BreadCrumbs";
import Gallery from "@/components/Gallery";
import AddCart from "@/components/AddCart/AddCart";
import Reviews from "@/components/Reviews";
import Features from "@/components/Features/Features";
import Specs from "@/components/Specs";
import Maintenance from "@/components/Maintenance";
import DocumentsGuides from "@/components/DocumentsGuides";
import FindParts from "@/components/FindParts";
import RelatedProducts from "@/components/RelatedProducts";
import H1 from "@/components/H1";
import H2 from "@/components/H2";
import Price from "@/components/Price";
import Desc from "@/components/Desc";

import productsJSON from "../../../../../Data/products.json";

const IndexID = (id) => {
	const product = productsJSON[Number(id.slug - 1)];

	return (
		<ul className="max-w-screen-2xl grid grid-cols-12 gap-3 mx-auto p-3">
			<li className="col-span-12">
				<BreadCrumbs
					crumbs={[
						{ title: "Home", url: "/" },
						{ title: "Lawn Mowers", url: "/lawn-mowers" },
						{
							title: "Riding Lawn Mowers",
							url: "/lawn-mowers/riding-lawn-mowers",
						},
						{
							title: "Zero-Turn Mowers",
							url: "/lawn-mowers/riding-lawn-mowers/zero-turn-mowers",
						},
						{ title: product.title },
					]}
					stars={true}
					starNum={product.reviews}
				/>
			</li>
			<li className="col-span-12 lg:col-span-7 xl:col-span-8">
				<Gallery gallery={product.gallery} />
			</li>
			<li className="col-span-12 lg:col-span-5 xl:col-span-4 lg:sticky lg:top-0 self-start row-span-2">
				<div className="md:px-6 py-4">
					<H1 title={product.title} srOnly="Cub Cadet Zero-Turn Mower" />
					<H2 title={product.series} />
					<Price price={product.price} msrp={product.msrp} />
					<AddCart />
					<Desc blocks={product.desc} />
				</div>
			</li>
			<li className="col-span-12 lg:col-span-7 xl:col-span-8">
				<Reviews starNum={product.reviews} />
				<Features />
				<Specs />
				<Maintenance />
				<DocumentsGuides />
				<FindParts />
				<RelatedProducts />
			</li>
		</ul>
	);
};

export async function getStaticProps({ params }) {
	return {
		props: params,
	};
}

export async function getStaticPaths() {
	return {
		paths: productsJSON.map((product, i) => {
			return {
				params: {
					slug: product.slug,
				},
			};
		}),
		fallback: false,
	};
}

export default IndexID;
