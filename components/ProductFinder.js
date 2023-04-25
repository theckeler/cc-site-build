export default function ProductFinder({ className }) {
	return (
		<div className={`bg-gray-400 ${className}`}>
			<div
				className="max-w-screen-2xl mx-auto bg-white rounded-lg flex justify-center items-center w-full"
				style={{ minHeight: "500px" }}>
				Product Finder
			</div>
		</div>
	);
}
