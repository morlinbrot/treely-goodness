import { atom, RecoilState } from "recoil";
import { createContext } from "react";


export type DudeState = {
	activeDudes: RecoilState<string[]>;
	allDudes: RecoilState<string[]>;
}

export function getDudeState(dudesDonmain: string, allDudes: string[], activeDudes: string[] ): DudeState {
	return {
		activeDudes: atom<string[]>({
			key: `${dudesDonmain}:activeDudes`,
			default: activeDudes
		}),
		allDudes: atom<string[]>({
			key: `${dudesDonmain}:allDudes`,
			default: allDudes
		})
	}
}


export const DudesContext = createContext<DudeState>({} as DudeState);
