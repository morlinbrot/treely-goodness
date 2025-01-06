import { data } from "../../assets/data";
import { MenuTreeRoot } from "../../components/tree-menu/tree.types";
import { MenuTree } from "../../components/tree-menu/TreeMenu";
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