import ToggleView from "./Icons/ToggleView";

export default function DocumentsGuides() {
	return (
		<div className="border-b">
			<button
				className="w-full lg:hover:bg-amber-200"
				onClick={(e) => {
					document.querySelector("#docs-text").classList.toggle("hidden");
					document.querySelector("#toggle-docs").classList.toggle("rotate-180");
				}}>
				<ul className="flex items-center px-5 py-3">
					<li className="font-bold">Documents and Guides</li>
					<li className="ml-auto">
						<ToggleView id="toggle-docs" />
					</li>
				</ul>
			</button>

			<div className="hidden" id="docs-text">
				<div className="p-7 bg-gray-200">
					<ul className="mb-6">
						<li className="font-bold text-xl uppercase border-y border-gray-400 py-2 mb-5">
							Assembly Instructions
						</li>
						<li className="attribute-values text-sm mb-2" tabIndex="0">
							<ul className="flex">
								<li className="font-bold text-right mr-3">
									<a href="#top">769-25609b-rzt-assembly [pdf]</a>
								</li>
							</ul>
						</li>
					</ul>

					<div className="font-bold text-xl uppercase border-y border-gray-400 py-2 mb-5">
						Manuals
					</div>
					<ul className="grid grid-cols-4 w-full text-sm">
						<li className="basis-3/12 p-3 font-bold border-b border-gray-300">
							Model
						</li>
						<li className="basis-3/12 p-3 font-bold border-b border-gray-300">
							Manual
						</li>
						<li className="basis-3/12 p-3 font-bold border-b border-gray-300">
							Form Number
						</li>
						<li className="basis-3/12 p-3 font-bold border-b border-gray-300"></li>

						<li className="basis-3/12 p-3">17AREACM010</li>
						<li className="basis-3/12 p-3">MANL:OPER:TRILING:RZ19:DIGEST</li>
						<li className="basis-3/12 p-3"></li>
						<li className="basis-3/12 p-3"></li>

						<li className="basis-3/12 p-3">17AREACM010</li>
						<li className="basis-3/12 p-3">MANL:OPER:TRILING:RZ19:DIGEST</li>
						<li className="basis-3/12 p-3">769-25609A</li>
						<li className="basis-3/12 p-3">
							<a href="#top">Download</a>
						</li>

						<li className="basis-3/12 p-3">17AREACM010</li>
						<li className="basis-3/12 p-3">MANL:OPER:TRILING:RZ19:DIGEST</li>
						<li className="basis-3/12 p-3">769-25609B</li>
						<li className="basis-3/12 p-3">
							<a href="#top">Download</a>
						</li>

						<li className="basis-3/12 p-3">17AREACM010</li>
						<li className="basis-3/12 p-3">MANL:OPER:TRILING:RZ19:DIGEST</li>
						<li className="basis-3/12 p-3">769-25609C</li>
						<li className="basis-3/12 p-3">
							<a href="#top">Download</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
