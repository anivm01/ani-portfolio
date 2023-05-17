import fs from "fs";
import skills from "../../../data/skills.json"
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getProjectMetadata from "../../../components/getProjectMetadata";
import { Nunito } from 'next/font/google'
import Image from "next/image";
const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' })

//this function uses the fs library to read the contents of the project file based on it's name ("slug")
//it also uses the gray-matter library to return the content of those files 
//in a way that's readable by the Markdown component
const getProjectContent = (slug: string) => {
    const folder = "projects/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
};

//this function ensures that next.js will generate a static page for each project at build time
//rather than generating it dynamically when someone is using the site (just makes the site faster)
export const generateStaticParams = async () => {
    const projects = getProjectMetadata();
    return projects.map((project) => ({
        slug: project.slug,
    }));
};

//this is the actual page component
const ProjectPage = (props: any) => {
    //here we use the "slug" from the url to find the particular project we want to display
    const slug = props.params.slug;
    //and get its content using the function we wrote earlier in this file
    const project = getProjectContent(slug);

    //this is where we use the tech stack described in the metadata of the project 
    //and filter through the skills.json in the data folder to display only the skills relevant to this project
    const techStack = skills.filter(skill => {
        return project.data.tech_stack.includes(skill.skill)
    })

    return (
        <div className="max-w-screen-xl mx-auto p-8">
            <div className="my-12 text-center">
                <h1 className="text-2xl text-slate-600 ">{project.data.title}</h1>
                <h3 className="my-4">{project.data.subtitle}</h3>
                <Image className="mx-auto" width={800} height={450} src={`${project.data.featured_image}`} alt={`${project.data.title}`} />
                <h2 className="my-4">Tech stack</h2>
                <div className="my-8 flex flex-wrap gap-8 justify-evenly">
                    {techStack.map((skill, index) => {
                        return (
                            <div className="max-w-[4rem] flex flex-col items-center text-center gap-2" key={index}>
                                <Image width={70} height={70} src={skill.src} alt={`${skill.skill} icon`} />
                                <h3 className="text-xs md:text-sm">{skill.skill}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
            <article className="prose mx-auto w-full">
                <Markdown className={`${nunito.variable} font-sans w-full`}>{project.content}</Markdown>
            </article>
        </div>
    );
};

export default ProjectPage;