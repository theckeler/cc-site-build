import Link from "./Icons/Link";
import ToggleButton from "./Buttons/Toggle";

export default function FindParts() {
	return (
		<div className="border-b">
			<ToggleButton title="Find Parts" id="parts" linkOnly={true} />
		</div>
	);
}
