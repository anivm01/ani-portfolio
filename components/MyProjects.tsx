import Link from "next/link";
import ProjectPreviews from "./ProjectPreviews";

const MyProjects = () => {

    return (
        <section className="bg-gradient-to-r to-ani-red from-ani-yellow">
            <div className="max-w-screen-xl mx-auto p-8 flex flex-col items-center gap-6">
                <h2 className="w-full text-xl cursor-default text-white text-center">Featured Projects</h2>
                <ProjectPreviews />
                <Link className="rounded-full px-4 py-2 text-xs md:text-lg bg-white text-ani-indigo w-fit hover:bg-ani-indigo hover:text-white" href="/projects">See More Projects</Link>
            </div>
        </section>
    )
}
export default MyProjects