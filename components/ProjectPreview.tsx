"use client"
import Image from "next/image";
import Link from "next/link";
import { ProjectMetadata } from './ProjectMetadata'
import { Modal } from "./Modal";
import Video from "./Video";
import { useState } from "react";


const ProjectPreview = (props: ProjectMetadata) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div
            className="p-4 rounded-lg bg-white flex flex-col justify-around gap-8 items-center text-center"
        >
            {isOpen && <Modal
                onClose={() => {
                    setIsOpen(false);
                }}
            >
                <Video video_id={props.video_id} />
            </Modal>}
            <Link href={`/projects/${props.slug}`}>
                <h2 className=" text-ani-indigo hover:underline text-lg mb-4">{props.title}</h2>
            </Link>
            <Image width={800} height={450} src={`${props.featured_image}`} alt={`${props.title}`} />
            <div className="flex justify-around text-center gap-6 text-sm md:text-base">
                <button onClick={() => setIsOpen(true)} className="flex flex-col items-center">
                    <Image src="/icons/demo.svg" alt="demo icon" width={"40"} height={"40"} />
                    <span>Demo</span>
                </button>
                <Link className="flex flex-col items-center" href={`/projects/${props.slug}`}>
                    <Image src="/icons/details.svg" alt="details icon" width={"40"} height={"40"} />
                    <span>Details</span>
                </Link>
                <a target="_blank" href={props.code_url} className="flex flex-col items-center" >
                    <Image src="/icons/source-code.svg" alt="github icon" width={"40"} height={"40"} />
                    <span>Code</span>
                </a>
            </div>

        </div>
    );
};

export default ProjectPreview;