export default function Button({
	title,
	className,
	addStyle,
	noIcon = false,
	href = null,
	noButton = false,
}) {
	const Type = noButton ? "div" : href ? "a" : "button";

	return (
		<Type className={`${className} text-sm lg:text-base py-3`} href={href}>
			{title}
		</Type>
	);
}
