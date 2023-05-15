import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="max-w-screen-xl mx-auto">
            <nav className="flex justify-between items-center p-4">
                <Link href="/"><Image width={100} height={50} src="/icons/logo.svg" alt="site logo" /></Link>
                <ul className="hidden md:flex gap-x-4 justify-end p-4 items-baseline">
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
                <Image className="md:hidden" src="/icons/hamburger.svg" alt="hamburger menu icon" height={30} width={30} />
            </nav>
        </header>
    );
};

export default Header;