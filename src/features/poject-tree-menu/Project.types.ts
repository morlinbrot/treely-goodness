import { Database } from "../../types.database";

export type Project = Database["public"]["Tables"]["projects"]["Row"];
export type Experiment = Database["public"]["Tables"]["experiments"]["Row"];
export type Image = Database["public"]["Tables"]["images"]["Row"];
// export type AnyItem = Project & Experiment & Image;
// export type AnyItemMap = Record<"projects" | "experiments" | "images", AnyItem[]>;
export type Data = { projects: Project[], experiments: Experiment[], images: Image[] };