"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    return (
        <header className="max-w-screen-xl mx-auto">
            <nav className="flex justify-between items-center p-4">
                <Link href="/"><Image width={100} height={50} src="/icons/logo.svg" alt="site logo" /></Link>
                <button className="md:hidden" type="button" onClick={() => setMenuIsOpen(current => !current)}>
                    <Image src="/icons/hamburger.svg" alt="hamburger menu icon" height={30} width={30} />
                </button>
                <ul className=
                    // "hidden md:flex gap-x-4 justify-end p-4 items-baseline"
                    {`${menuIsOpen ? "absolute top-12 right-0 flex flex-col gap-4 bg-almost-white" : "hidden"} md:flex gap-x-4 justify-end p-4 items-baseline`}
                    onClick={() => setMenuIsOpen(false)}
                >
                    <li>
                        <Link className="p-4 text-ani-indigo" href="/">Home</Link>
                    </li>
                    {/* <li>
                        <Link className="p-4 text-ani-indigo" href="/projects">Projects</Link>
                    </li> */}
                    <li>
                        <Link className="p-4 text-ani-indigo" href="/about-me">About Me</Link>
                    </li>
                    {/* <li>
                        <Link className="p-4 text-ani-indigo" href="/blog">Blog</Link>
                    </li> */}
                    <li>
                        <a className="p-4 text-ani-indigo flex gap-4 items-baseline" href="/resume/ani-mihaylova-resume.pdf" download><span>Resume</span><Image width={"20"} height={"20"} src="/icons/download.svg" alt="download icon" /></a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;