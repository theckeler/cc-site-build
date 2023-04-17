export default function Button({ title, addClass, addStyle, icon }) {
	return (
		<button className={`text-center rounded-2xl ${addClass}`}>{title}</button>
	);
}
