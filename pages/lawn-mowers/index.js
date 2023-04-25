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
				<ul className="grid grid-cols-3 gap-2">
					<li className="">
						<div className="bg-gray-200">
							<Link
								href="/lawn-mowers/riding-lawn-mowers"
								className="block p-2">
								Riding Lawn Mowers
							</Link>
						</div>
					</li>
					<li>
						<div className="bg-gray-200">
							<div href="#top" className="block p-2">
								Walk-Behind Mowers
							</div>
						</div>
					</li>
					<li>
						<div className="bg-gray-200">
							<div href="#top" className="block p-2">
								Robotic Mowers
							</div>
						</div>
					</li>
				</ul>
			</li>
		</ul>
	);
}
