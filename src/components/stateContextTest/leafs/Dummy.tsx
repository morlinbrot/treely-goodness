export function Dummy({ name }: { name: string }) {

	return (
		<div
			className="m-2 p-2 rounded shadow-lg cursor-pointer border border-amber-500 text-amber-500">
				{name}
		</div>
	)
}