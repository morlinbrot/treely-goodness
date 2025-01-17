import { Dudes } from "./components/stateContextTest/Dudes";
import { DudeStateProvider } from "./components/stateContextTest/state/DudeState.provider";

const allDudes = ['mario', 'luigi', 'yoshi'];
const initalActiveDudes = ['mario', 'yoshi'];
const dudesDomain = 'heroes';

export function App() {
	console.log('app rerenders')
	return (
		<DudeStateProvider
		dudesDomain={dudesDomain}
		allDudes={allDudes}
		activeDudes={initalActiveDudes}>
		<div className="w-full h-full pt-40 flex flex-wrap justify-center gap-7 bg-teal-600">
			<Dudes/>
		</div>
	</DudeStateProvider>
  )
}
