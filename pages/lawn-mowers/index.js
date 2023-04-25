import Link from "next/link";

import BreadCrumbs from "../../components/BreadCrumbs";
import H1 from "../../components/H1";

export default function Index() {
	return (
		<ul className="">
			<li className="max-w-screen-2xl mx-auto p-3">
				<BreadCrumbs
					crumbs={[{ title: "Home", url: "/" }, { title: "Lawn Mowers" }]}
					cta={{ title: "Buy Stuff", url: "#products" }}
				/>
			</li>
			<li className="max-w-screen-2xl mx-auto p-3">
				<H1 title="Explore Lawn Mowers" srOnly="Cub Cadet" />
			</li>

			<li className="max-w-screen-2xl mx-auto px-3 py-10">
				<section>
					<Link href="/lawn-mowers/riding-lawn-mowers">Riding Lawn Mowers</Link>
				</section>
			</li>
		</ul>
	);
}
