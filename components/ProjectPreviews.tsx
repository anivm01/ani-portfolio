import getProjectMetadata from "./getProjectMetadata";
import ProjectPreview from "./ProjectPreview";

const ProjectPreviews = () => {
    //get the array of project objects using the getProjectMetadata function
    const projectMetadata = getProjectMetadata();

    //pick out the featured projects and store them in a separate array
    const featuredProjectsMetadata = [projectMetadata[1], projectMetadata[3], projectMetadata[2]]

    //feed the data from the featuredProjectsMetadata array into the ProjectPreview component
    //using map to do it for each project in the array.
    //this returns three separate Project Preview components stored in the projectPreviews variable
    const projectPreviews = featuredProjectsMetadata.map((project) => (
        <ProjectPreview key={project.slug} {...project} />
    ));

    //render the three project previews onto the page
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">{projectPreviews}</div>
        </div>
    )
}
export default ProjectPreviews;