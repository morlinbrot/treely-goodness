
export type TreeNodeRenderer = (id: string | number, isLeaf: boolean) => JSX.Element

export type TreeNodeBase = {
	id: string | number
	leaf: boolean
	renderer: TreeNodeRenderer
}

export type LeafNode = TreeNodeBase & {
	leaf: true
}
export function isLeafNode(node: TreeNode): node is LeafNode {
	return node.leaf === true
}

export type BranchNode = TreeNodeBase & {
	leaf: false
	children: TreeNode[]
}

export function isBranchNode(node: TreeNode): node is BranchNode {
	return node.leaf === false
}

export type TreeNode = LeafNode | BranchNode 

export type MenuTreeRoot = {
	nodes: TreeNode[]
}