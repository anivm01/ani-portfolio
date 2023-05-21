import Image from "next/image";
// import { useRouter } from "next/router";

const Hero = () => {
    // const router = useRouter()
    return (
        <section className="bg-gradient-to-r to-ani-red from-ani-yellow py-4">
            <div className="flex flex-col gap-y-4 md:flex-row max-w-screen-xl mx-auto items-center justify-center gap-x-16 lg:gap-x-64 px-8">
                <div className="flex items-start flex-col md:gap-0">
                    <Image src="/images/ani-mihaylova.jpg" width={"400"} height={"400"} alt="Ani Mihaylova" className="object-contain w-1/3 md:w-full mix-blend-overlay rounded-full md:grow" />

                </div>
                <div className="text-white flex flex-col gap-8 justify-center animate-text-focus-in">
                    <div className="flex flex-col gap-1">
                        <h1 className="w-full text-4xl cursor-default mt-4">Hi, I'm Ani</h1>
                        <h2 className="w-full text-xl cursor-default">Creative Fullstack Developer </h2>
                        <h2 className="w-full text-lg cursor-default">JavaScript | React | Node</h2>
                    </div>
                    <div className="flex my-4 gap-4 md:self-end md:my-0">
                        <a target="_blank" href="https://www.linkedin.com/in/anivm01/"><Image src="/icons/linkedIn.svg" alt="linked in icon" width={"40"} height={"40"} /></a>
                        <a target="_blank" href="https://github.com/anivm01"><Image src="/icons/github-white.svg" alt="github icon" width={"40"} height={"40"} /></a>
                        <a target="_blank" href="mailto:anivm.webdev@gmail.com"><Image src="/icons/email.svg" alt="email in icon" width={"40"} height={"40"} /></a>
                    </div>
                    {/* <a className="rounded-full px-4 py-2 text-xs md:text-base bg-white text-ani-indigo flex gap-4 items-center w-fit" href="/resume/ani-mihaylova-resume.pdf" download><span>Resume</span><Image width={"20"} height={"20"} src="/icons/download.svg" alt="download icon" /></a> */}
                </div>
            </div>
        </section>
    )
}
export default Hero;
