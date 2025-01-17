import { useContext } from "react";
import { useRecoilValue } from "recoil";
import { DudesContext } from "../state/DudeState.context";


export function ActiveDudes() {
	const dudesStateContext = useContext(DudesContext);
	const activeDudes = useRecoilValue(dudesStateContext.activeDudes);
	return (

		<div className="relative h-8 border border-amber-500 p-1 text-amber-500 rounded flex gap-1">
			<span className="absolute -top-2.5 left-2 text-xs bg-cyan-900 pl-0.5 pr-1">active</span> {activeDudes.map((dudeName, index) => <span key={dudeName}>{dudeName}{index < activeDudes.length - 1? ',' : null}</span> ) }
		</div>
		
		
	);
}