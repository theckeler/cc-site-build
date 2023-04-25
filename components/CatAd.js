import Button from "./Buttons/Main";
import Image from "next/image";

export default function CatAd() {
	return (
		<div className="bg-gray-200 p-4 rounded h-full">
			<div className="relative h-40 overflow-hidden rounded">
				<Image
					src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/v70fc5788285a154928b80b856144e85813f5051f/ZeroTurnLanding/intro.jpg"
					alt=""
					fill
					className="object-cover"
				/>
			</div>
			<h2 className="mt-4 text-2xl font-bold">
				Introducing the Ultima Series™ ZTXS
			</h2>
			<h3 className="mt-4 text-lg">
				The Ultima Series™ Zero-Turn with Commercial-Grade Features
			</h3>
			<p className="mt-2 text-xs leading-6">
				From tight turns to inclined hillsides and stretching valleys, the
				Ultima ZTXS is built to help tackle your yard’s unique challenges. The
				Ultima ZTXS brings Cub Cadet’s innovative and proprietary Synchro-Steer™
				technology to the proven Ultima Series™ platform for reliable precision
				and confident control.
			</p>
			<Button
				title="LEARN MORE ABOUT THE ULTIMA ZTXS"
				className="bg-gray-600 rounded p-2 mt-2 text-white text-sm w-full"
				noIcon={true}
			/>
		</div>
	);
}
