export default function Button({ title, addClass, addStyle }) {
	return (
		<button className={`text-center bg-amber-400 rounded-2xl ${addClass}`}>
			{title}
		</button>
	);
}
