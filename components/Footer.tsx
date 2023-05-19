import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r to-ani-red from-ani-yellow">
            <div className="max-w-screen-xl mx-auto mt-12 py-6 text-center text-white flex justify-center items-center flex-col gap-4 md:flex-row md:justify-around md:items-baseline">
                <a className="rounded-full px-4 py-2 text-xs md:text-base bg-white text-ani-indigo flex gap-4 items-center w-fit" href="/resume/ani-mihaylova-resume.pdf" download><span>Resume</span><Image width={"20"} height={"20"} src="/icons/download.svg" alt="download icon" /></a>
                <div>
                    <h3>Designed by</h3>
                    <h3>Ani Mihaylova</h3>
                </div>
                <div className="flex gap-4 items-center justify-center">
                    <a target="_blank" href="https://www.linkedin.com/in/anivm01/"><Image src="/icons/linkedIn.svg" alt="linked in icon" width={"40"} height={"40"} /></a>
                    <a target="_blank" href="https://github.com/anivm01"><Image src="/icons/github-white.svg" alt="github icon" width={"40"} height={"40"} /></a>
                    <a target="_blank" href="mailto:anivm.webdev@gmail.com"><Image src="/icons/email.svg" alt="email in icon" width={"40"} height={"40"} /></a>
                </div>
            </div>
        </footer>
    )
}
export default Footer;