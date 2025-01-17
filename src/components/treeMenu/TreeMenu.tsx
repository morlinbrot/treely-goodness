import { HTMLAttributes } from "react"
import { BranchNode, LeafNode, MenuTreeRoot, TreeNode } from "./Treetypes"
import classnames from 'classnames'

export type MenuTreeProps = {
	tree: MenuTreeRoot
} & HTMLAttributes<HTMLUListElement>
export function MenuTree({ tree, className }: MenuTreeProps) {
	className = classnames('menu bg-base-200 rounded-box w-60', className)
	return (
		<ul className={className}>
			<Items nodes={tree.nodes}/>
		</ul>
	)

}


function Items( { nodes }: {nodes: TreeNode[]}) {
	return (
		<>
			{nodes.map((node: TreeNode) => (
					node.leaf ? <LeafItem key={node.id} {...node} /> : <BranchItem key={node.id} {...node} />
			))}
		</>
	)
}

function BranchItem({id , renderer, children }: BranchNode) {
	return (
		<li className="max-w-full">
			<details className="max-w-full" open>
				<summary className="truncate">{renderer(id, false)}</summary>
		
				<ul>
					<Items nodes={children}/>
				</ul>
			</details>
		</li>
	)
}

function LeafItem({id , renderer }: LeafNode) {
	return (
		<li className="max-w-full truncate">{renderer(id, true)}</li>
	)
}
