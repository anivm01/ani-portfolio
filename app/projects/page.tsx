import ProjectPreview from "@/components/ProjectPreview";
import getProjectMetadata from "@/components/getProjectMetadata";

const ProjectsPage = () => {
    //get the array of project objects using the getProjectMetadata function
    const projectMetadata = getProjectMetadata();

    //pick out the featured projects and store them in a separate array
    const projects = projectMetadata.sort((a, b) => {
        return b.order - a.order
    })

    //feed the data from the featuredProjectsMetadata array into the ProjectPreview component
    //using map to do it for each project in the array.
    //this returns three separate Project Preview components stored in the projectPreviews variable
    const projectPreviews = projects.map((project) => (
        <ProjectPreview key={project.slug} {...project} />
    ));

    //render the three project previews onto the page
    return (
        <main className="w-full">
            <div className="bg-gradient-to-r to-ani-red from-ani-yellow p-8 mb-8">
                <h2 className="w-full text-xl cursor-default text-center text-white">My Projects</h2>
            </div>
            <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">{projectPreviews}</div>
        </main>
    )
}

export default ProjectsPage;