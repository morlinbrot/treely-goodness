import { memo, useCallback } from "react"
import { Dummy } from "../leafs/Dummy"

const dummies = ['dummario', 'dummigi', 'duhshy']

export function Dummies() {

	return (
		<div className="flex mt-2 border border-amber-500 rounded">
			{dummies.map((dudeName) => 
				<Dummy
				key={dudeName}
				name={dudeName} />)}
		</div>
	) 
}

export function Dummies2() {

	const DummyMemo = memo(Dummy)
	const DummiesMemo = useCallback(() => dummies.map((dudeName) => 
		<DummyMemo
				key={dudeName}
				name={dudeName} />	
	), [dummies, DummyMemo])

	return (
		<div className="flex mt-2 border border-amber-500 rounded">
			<DummiesMemo/>
		</div>
	) 
}