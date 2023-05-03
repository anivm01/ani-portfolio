import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="max-w-screen-xl mx-auto">
            <nav>
                <ul className="hidden md:flex gap-x-4 justify-end p-4 items-baseline">
                    <li>
                        <Link className="p-4 text-ani-indigo" href="/">Home</Link>
                    </li>
                    <li>
                        <Link className="p-4 text-ani-indigo" href="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link className="p-4 text-ani-indigo" href="/about-me">About Me</Link>
                    </li>
                    <li>
                        <Link className="p-4 text-ani-indigo" href="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className="p-4 text-ani-indigo flex gap-4 items-baseline" href="/"><span>Resume</span><Image width={"20"} height={"20"} src="/icons/download.svg" alt="download icon" /></Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;