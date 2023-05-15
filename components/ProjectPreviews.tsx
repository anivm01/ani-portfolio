import getProjectMetadata from "./getProjectMetadata";
import ProjectPreview from "./ProjectPreview";

const ProjectPreviews = () => {
    const projectMetadata = getProjectMetadata();
    const featuredProjectsMetadata = [projectMetadata[1], projectMetadata[3], projectMetadata[2]]
    const projectPreviews = featuredProjectsMetadata.map((project) => (
        <ProjectPreview key={project.slug} {...project} />
    ));
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">{projectPreviews}</div>
        </div>
    )
}
export default ProjectPreviews;