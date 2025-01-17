import { useCallback, useContext } from "react";
import { DudesContext } from "../state/DudeState.context";
import { useSetRecoilState } from "recoil";

export function DudeButton({ dudeName }: { dudeName: string }) {
	const dudesStateContext = useContext(DudesContext);
	// const allDudes = useRecoilValue(dudesStateContext.allDudes);
	const setActiveDudes = useSetRecoilState(dudesStateContext.activeDudes);


	const handleClick = useCallback(() => {
		setActiveDudes((prevActiveDudes: string[]) => {
			if (prevActiveDudes.includes(dudeName)) {
				return prevActiveDudes.filter((activeDude) => activeDude !== dudeName);
			} else {
				return [...prevActiveDudes, dudeName];
			}
		})
	}, [setActiveDudes, dudeName])



	return (
	<div
		className="m-2 p-2 rounded shadow-lg cursor-pointer bg-amber-500"
		onClick={handleClick}>
			{dudeName}
	</div>
	)
}