import Link from "next/link";

import BreadCrumbs from "../../components/BreadCrumbs";
import H1 from "../../components/H1";

export default function Index() {
	return (
		<ul className="">
			<li className="max-w-screen-2xl mx-auto p-3">
				<BreadCrumbs
					crumbs={[
						{ title: "Home", url: "/" },
						{ title: "Lawn Mowers", url: "lawn-mowers" },
						{ title: "Riding Lawn Mowers" },
					]}
					cta={{ title: "Buy Stuff", url: "#products" }}
				/>
			</li>
			<li className="max-w-screen-2xl mx-auto p-3">
				<H1 title="Explore Riding Lawn Mowers" srOnly="Cub Cadet" />
				<p className="text-sm mt-8 max-w-6xl leading-loose">
					A complete lineup of zero-turn mowers, lawn and garden tractors, and
					electric mowers, all featuring the strength and durability that bring
					your lawn to life.
				</p>
			</li>

			<li className="max-w-screen-2xl mx-auto px-3 py-10">
				<section>
					<Link href="/zero-turn-mowers">Zero Turn Mowers</Link>
				</section>
			</li>
		</ul>
	);
}
