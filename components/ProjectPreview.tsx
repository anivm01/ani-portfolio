import Image from "next/image";
import Link from "next/link";
import { ProjectMetadata } from './ProjectMetadata'

const ProjectPreview = (props: ProjectMetadata) => {
    return (
        <div
            className="p-4 rounded-lg bg-white flex flex-col justify-around gap-8 items-center text-center"
        >
            <Link href={`/projects/${props.slug}`}>
                <h2 className=" text-ani-indigo hover:underline text-lg mb-4">{props.title}</h2>
            </Link>
            <Image width={500} height={500} src={`${props.image}`} alt={`${props.title}`} />
            <div className="flex justify-around text-center gap-6">
                <Link className="flex flex-col items-center" href={"/"}>
                    <Image src="/icons/demo.svg" alt="demo icon" width={"40"} height={"40"} />
                    <span className="text-base">Demo</span>
                </Link>
                <Link className="flex flex-col items-center" href={`/projects/${props.slug}`}>
                    <Image src="/icons/details.svg" alt="details icon" width={"40"} height={"40"} />
                    <span className="text-base">Details</span>
                </Link>
                <Link className="flex flex-col items-center" href={"/"}>
                    <Image src="/icons/source-code.svg" alt="github icon" width={"40"} height={"40"} />
                    <span className="text-base">Code</span>
                </Link>
            </div>

        </div>
    );
};

export default ProjectPreview;