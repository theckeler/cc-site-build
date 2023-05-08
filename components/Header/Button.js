import Account from "@/icons/Account";
import Help from "@/icons/Help";
import Location from "@/icons/Location";

export default function Buttons({
	title,
	buttonIcon = "location",
	className,
	fillColor,
}) {
	const Icons = {
		account: Account,
		help: Help,
		location: Location,
	};

	const Icon = Icons[buttonIcon];

	return (
		<a href="#top" className={`p-3 min-h-default flex ${className}`}>
			<Icon className="h-full" fillColor="fill-white" />
			{title}
		</a>
	);
}
