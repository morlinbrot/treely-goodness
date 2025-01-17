import { BranchNode, LeafNode, MenuTreeRoot } from "../../components/treeMenu/Treetypes";
import { Experiment, Image, Project } from "./Project.types";

export type GetMenuTreePops = {
	data: { projects: Project[], experiments: Experiment[], images: Image[] }
	renderers: {
		project: (project: Project) => JSX.Element,
		experiment: (experiment: Project) => JSX.Element,
		image: (image: Image) => JSX.Element
	}
}
export function getMenuTree({ data, renderers }: GetMenuTreePops): MenuTreeRoot {

	const projectNodes: BranchNode[] = data.projects.map(project => {
		
		const children: BranchNode[] = getProjectChildren(project, { data, renderers })
		
		return { id: project.project_id,
			leaf: false,
			renderer: () => renderers.project(project),
			children }

	})

	return { nodes: projectNodes }	

}

function getExperimentChildren(experiment: Experiment, { data, renderers }: GetMenuTreePops): LeafNode[] {
	return data.images
		.filter(image => image.experiment_id === experiment.experiment_id)
		.map(image => ({
			id: image.image_id,
			leaf: true,
			renderer: () => renderers.image(image)
		}))
}

function getProjectChildren(project: Project, { data, renderers }: GetMenuTreePops): BranchNode[] {
	return data.experiments
		.filter(experiment => experiment.project_id === project.project_id)
		.map(experiment => {

		const children: LeafNode[] = getExperimentChildren(experiment, { data, renderers })
		
		return {
			id: experiment.experiment_id,
			leaf: false,
			renderer: () => renderers.experiment(experiment),
			children
		}
	})
}
