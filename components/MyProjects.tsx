import ProjectPreviews from "./ProjectPreviews";

const MyProjects = () => {

    return (
        <section className="bg-gradient-to-r to-ani-red from-ani-yellow">
            <div className="max-w-screen-xl mx-auto p-8">
                <h2 className="w-full text-xl cursor-default text-white text-center mb-6">My Projects</h2>
                <ProjectPreviews />
            </div>
        </section>
    )
}
export default MyProjects