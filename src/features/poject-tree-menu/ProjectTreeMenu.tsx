import { data } from "../../assets/data";
import { MenuTreeRoot } from "../../components/treeMenu/Treetypes";
import { MenuTree } from "../../components/treeMenu/TreeMenu";
import { getMenuTree } from "./getMenuTree";
import { renderImage, renderProject } from "./renderers";

const renderers = { project: renderProject, experiment: renderProject, image: renderImage }
const menuTree: MenuTreeRoot = getMenuTree({ data, renderers })

export function ProjectTreeMenu() {
  return (
	<>
		<MenuTree tree={menuTree}/>
	</>
  )
}