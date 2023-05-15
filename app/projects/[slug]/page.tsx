import fs from "fs";
import skills from "../../../data/skills.json"
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getProjectMetadata from "../../../components/getProjectMetadata";
import { Nunito } from '@next/font/google'
import Image from "next/image";
const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' })

const getProjectContent = (slug: string) => {
    const folder = "projects/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
};
export const generateStaticParams = async () => {
    const projects = getProjectMetadata();
    return projects.map((project) => ({
        slug: project.slug,
    }));
};

const ProjectPage = (props: any) => {
    const slug = props.params.slug;
    const project = getProjectContent(slug);
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