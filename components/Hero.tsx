import Image from "next/image";
// import { useRouter } from "next/router";

const Hero = () => {
    // const router = useRouter()
    return (
        <section className="bg-gradient-to-r to-ani-red from-ani-yellow">
            <div className="flex max-w-screen-xl mx-auto justify-center gap-x-64">
                <div>
                    <Image src="/images/ani-mihaylova.jpg" width={"400"} height={"400"} alt="Ani Mihaylova" className="object-cover mix-blend-overlay rounded-full" />
                </div>
                <div className="text-white flex flex-col gap-8 justify-center">
                    <div className="flex flex-col gap-1">
                        <h1 className="w-full text-4xl">Hi, I'm Ani</h1>
                        <h2 className="w-full text-xl">Creative Software Developer </h2>
                        <h2 className="w-full text-xl">with a Global Perspective</h2>
                    </div>
                    <button className="rounded-full bg-white text-ani-indigo px-4 py-2 flex gap-4 w-fit"><span>Resume</span><Image width={"20"} height={"20"} src="/icons/download.svg" alt="download icon" /></button>
                    <div className="flex gap-8 self-end">
                        <a target="_blank" href="https://www.linkedin.com/in/anivm01/"><Image src="/icons/linkedIn.svg" alt="linked in icon" width={"40"} height={"40"} /></a>
                        <a target="_blank" href="https://github.com/anivm01"><Image src="/icons/github.svg" alt="github icon" width={"40"} height={"40"} /></a>
                        {/* <button type="button" onClick={() => router.push('mailto:anivm.webdev@gmail.com')}>
                            <Image src="/icons/email.svg" alt="email in icon" width={"40"} height={"40"} />
                        </button> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero;
