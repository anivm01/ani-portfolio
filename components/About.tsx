import Image from "next/image";
import skills from "../data/skills.json"
import { Nunito } from '@next/font/google'
import Link from "next/link";
const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' })

const About = () => {
    return (
        <section className="max-w-screen-xl mx-auto p-8">
            <h2 className="w-full text-xl cursor-default">Tech Stack</h2>
            <div className="w-full my-8 flex flex-wrap gap-8 justify-evenly">
                {skills.map((skill, index) => {
                    return (
                        <div className="max-w-[4rem] flex flex-col items-center text-center gap-2" key={index}>
                            <Image width={70} height={70} src={skill.src} alt={`${skill.skill} icon`} />
                            <h3 className="text-xs md:text-sm">{skill.skill}</h3>
                        </div>
                    )
                })}
            </div>
            <div className="flex gap-16">
                <div className="w-1/2 flex flex-col gap-8">
                    <h2 className="w-full text-xl cursor-default">About Me</h2>
                    <p className={`${nunito.variable} font-sans`}>Hey there! I'm a software developer with a passion for crafting beautiful and functional applications. I first discovered my love for coding while living abroad in Japan, where I spent almost a decade as an ESL teacher. In between teaching sessions, I found myself tinkering with code, building websites and apps in my free time. It wasn't long before I realized that I had stumbled upon my true calling - to use my creativity, problem-solving skills, and love of technology to create meaningful solutions. Fast forward to today, and I'm thrilled to be pursuing a career in software development, with a particular focus on developing apps and tools that make people's lives easier and more enjoyable. If you're looking for a collaborator who's passionate about creating amazing things with code, I'm your person!</p>
                    <div className="flex justify-around items-center">
                        <Link className="rounded-full bg-gradient-to-b to-ani-red from-ani-yellow text-white px-4 py-2" href="/">Read More</Link>
                        <button className="rounded-full bg-gradient-to-b to-ani-red from-ani-yellow text-white px-4 py-2 flex gap-4 w-fit"><span>Resume</span><Image width={"20"} height={"20"} src="/icons/download-wh.svg" alt="download icon" /></button>
                    </div>
                </div>
                <div>
                <Image width={500} height={500} src='/images/about-me-placeholder.jpg' alt='dev setup' />
                </div>
            </div>
        </section>
    )
}

export default About;