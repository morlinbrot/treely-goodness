import { Experiment, Project, Image } from "./Project.types";

export function renderProject(project: Project) {
	return (<a className="truncate">{project.name}</a>)
}

export function renderExperiment(experiment: Experiment) {
	return (<a className="truncate">{experiment.name}</a>)
}

export function renderImage(image: Image) {
	return (<a className="truncate">{image.image_id}</a>)
}