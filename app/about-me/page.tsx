import Image from "next/image";
import { Nunito } from '@next/font/google'
const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' })

export default function AboutMe() {
    return (
        <section className="max-w-screen-xl mx-auto p-8">
            <h2 className="w-full text-xl cursor-default">About Me</h2>
            <div className={`flex gap-8 flex-col-reverse md:flex-row items-center ${nunito.variable} font-sans`}>
                <div className="md:w-1/2">
                    <p className="my-4">Hi, I'm Ani, a creative software developer with a passion for problem-solving. As a former ESL teacher in Japan, I bring a unique perspective to the world of software development.</p>
                    <p className="my-4">My past experiences as an ESL teacher have greatly influenced my approach to software development and problem-solving. Living in Japan taught me the value of self-reliance and the importance of adapting to new and unfamiliar environments. Working with people with limited English proficiency taught me the significance of clear and frequent communication in order to achieve mutual understanding and successful outcomes. Being a part of the ex-pat community in Japan gave me a deep appreciation for diversity and the importance of understanding and navigating cultural differences in order to achieve common goals. These experiences have helped me to develop a strong sense of empathy, flexibility, and adaptability that I bring to my work as a software developer.</p>
                </div>
                <div className="grow-1 md:w-1/4 bg-gradient-to-r to-ani-red from-ani-yellow mx-auto my-4">
                    <Image src="/images/ani-mihaylova.jpg" width={"200"} height={"200"} alt="Ani Mihaylova" className="mx-auto object-contain md:w-full mix-blend-overlay md:grow" />
                </div>
            </div>
            <div className={`flex gap-8 flex-col md:flex-row items-center ${nunito.variable} font-sans`}>
                <div className="md:w-1/2">
                    <p className="my-4">While in Japan I explored different hobbies and that's how I discovered my love for coding. I experimented with HTML, CSS, and WordPress to create basic websites and ecommerce stores. I also developed my design skills with Figma, Adobe Illustrator, and Photoshop. But what truly captivated me was the ability to develop a fully functioning application from scratch with JavaScript.</p>
                    <p className="my-4">After returning to Canada, I enrolled in a coding bootcamp to further develop my skills. I'm well-versed in JavaScript, HTML, CSS, React.js, Node.js, and MySQL, as well as various other frameworks and libraries. </p>
                    <p className="my-4">Upon completing my bootcamp I was chosen to be a TA for the next cohort. I got the chance to solidify my technical skills and acquired some new ones. One of the most valuable skills I acquired through that experience was the ability to read and understand code I had not written myself. </p>
                </div>
                <div className="md:w-1/2">
                    <p className="my-4">As a software developer I've worked on some very exciting projects which helped me to develop my skills even further. Currently, I am working on adding new features to some of my existing projects and starting a new project: an organizational tool for tabletop RPG game masters, modeled after tools like FigJam and Miro. Through these projects, I am challenging myself to think creatively, solve complex problems, and improve my skills in programming languages and frameworks.</p>
                    <p className="my-4">I'm excited to continue growing my skills and taking on challenging projects that have a positive impact and help people. My passion for software development, combined with my love for learning, makes for an endless journey of discovery and growth and I love it!</p>
                </div>
            </div>
        </section>
    )
}