import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getProjectMetadata from "../../../components/getProjectMetadata";
import { Nunito } from '@next/font/google'
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
    return (
        <div>
            <div className="my-12 text-center">
                <h1 className="text-2xl text-slate-600 ">{project.data.title}</h1>
            </div>
            <article className="prose">
                <Markdown className={`${nunito.variable} font-sans`}>{project.content}</Markdown>
            </article>
        </div>
    );
};

export default ProjectPage;