import { ActiveDudes } from "./branches/ActiveDudes";
import { DudeButtons, DudeButtons2 } from "./branches/DudeButtons";
import { Dummies } from "./branches/Dummies";

export function Dudes() {

	console.log('dudes rerenders')

	return (
		<div className="h-min w-min px-3 pt-3 pb-2 flex flex-col bg-cyan-900 rounded shadow">
			<ActiveDudes/>
			<DudeButtons/>
			<Dummies/>
		</div>
	);
}

export function Dudes2() {

	console.log('dudes rerenders')

	return (
		<div className="h-min w-min px-3 pt-3 pb-2 flex flex-col bg-cyan-900 rounded shadow">
			<ActiveDudes/>
			<div className="flex  mt-2 border border-amber-500 rounded">
				<DudeButtons2/>
			</div>
			<Dummies/>
		</div>
	);
}