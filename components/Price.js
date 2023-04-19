import ToolTip from "./ToolTip";

export default function H3({ className = null }) {
	return (
		<h3 className="text-xl font-bold">
			$3,599.00{" "}
			<ToolTip
				copy="Manufacturer’s buy online price. Taxes are additional and vary by
				location. Freight, setup, delivery, PDI, and other dealer specific
				charges are not included in the pricing and vary by dealer. Prices shown
				are in U.S dollars and valid only in the United States."
			/>
			<span className="line-through text-gray-500 ml-3 font-light text-sm">
				$3,799.00
			</span>
		</h3>
	);
}
