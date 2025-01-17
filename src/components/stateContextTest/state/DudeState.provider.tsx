import {  useMemo} from "react";
import { DudesContext, getDudeState } from "./DudeState.context";

export type DudeStateProviderProps = React.PropsWithChildren<{
	dudesDomain: string
	allDudes: string[]
	activeDudes: string[]
}>
export function DudeStateProvider({ dudesDomain, allDudes, activeDudes, children }: DudeStateProviderProps) {
const dudeState = useMemo(() => getDudeState(dudesDomain, allDudes, activeDudes), [dudesDomain, allDudes, activeDudes]);
  console.log('provider rerenders')
  return (
  		<DudesContext.Provider value={dudeState}>
			{children}
		</DudesContext.Provider>
  )
}