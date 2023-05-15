import fs from "fs";
import matter from "gray-matter";
import { ProjectMetadata } from "../components/ProjectMetadata";

const getProjectMetadata = (): ProjectMetadata[] => {
  const folder = "projects/";
  const files = fs.readdirSync(folder);
  const markdownProjects = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const projects = markdownProjects.map((fileName) => {
    const fileContents = fs.readFileSync(`projects/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      tech_stack: matterResult.data.tech_stack,
      subtitle: matterResult.data.subtitle,
      featured_image: matterResult.data.featured_image,
      code_url: matterResult.data.code_url,
      slug: fileName.replace(".md", ""),
      video_id: matterResult.data.video_id
    };
  });

  return projects;
};

export default getProjectMetadata;
