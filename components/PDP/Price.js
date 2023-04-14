import ToolTip from "../ToolTip";

export default function H3({ addClass = null }) {
	return (
		<h3 className="">
			$3,599.00{" "}
			<ToolTip
				copy="Manufacturer’s buy online price. Taxes are additional and vary by
				location. Freight, setup, delivery, PDI, and other dealer specific
				charges are not included in the pricing and vary by dealer. Prices shown
				are in U.S dollars and valid only in the United States."
			/>
			<span className="line-through">$3,799.00</span>
		</h3>
	);
}
