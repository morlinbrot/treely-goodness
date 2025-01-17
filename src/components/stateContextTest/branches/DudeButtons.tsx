import { memo, useCallback, useContext } from "react";
import { useRecoilValue } from "recoil";
import { DudesContext } from "../state/DudeState.context";
import { DudeButton } from "../leafs/DudeButton";

export function DudeButtons() {
	const dudesStateContext = useContext(DudesContext);
	const allDudes = useRecoilValue(dudesStateContext.allDudes);

	return (			
		<>
			<div className="flex  mt-2 border border-amber-500 rounded">
				{allDudes.map((dudeName) => 
					<DudeButton
						key={dudeName}
						dudeName={dudeName} />	
				)}
			</div>
		</>
		
	)
	 
}

export function DudeButtons2() {

	const dudesStateContext = useContext(DudesContext);
	const allDudes = useRecoilValue(dudesStateContext.allDudes);

	return (			
		<>
			
				{allDudes.map((dudeName) => 
					<DudeButton
						key={dudeName}
						dudeName={dudeName} />	
				)}
			
		</>
		
	)
}


export function DudeButtons3() {
	const dudesStateContext = useContext(DudesContext);
	const allDudes = useRecoilValue(dudesStateContext.allDudes);

		const DudeButtonMemo = memo(DudeButton)
		const DudesButtons = useCallback(() => allDudes.map((dudeName) => 
			<DudeButtonMemo
				key={dudeName}
				dudeName={dudeName} />	
		), [allDudes, DudeButtonMemo])

	return (			
		<div className="flex  mt-2 border border-amber-500 rounded">
			<DudesButtons/>
		</div>
	)
	 
}