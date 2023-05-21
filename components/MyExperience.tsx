import { Nunito } from 'next/font/google'
import Link from 'next/link';
const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' })

const MyExperience = () => {
    return (
        <section className="max-w-screen-xl mx-auto p-8">
            <h2 className="w-full text-xl cursor-default">My Experience</h2>
            <div className="py-4 w-full md:w-2/3">
                <h3 className="text-lg">Freelance Web Developer</h3>
                <h4 className={`text-base italic pb-2 ${nunito.variable} font-sans`}>December 2022 - present</h4>
                <ul className={`list-disc px-8 ${nunito.variable} font-sans`}>
                    <li>Collaborated closely with clients to develop customized solutions that meet their unique needs and drive success.</li>
                    <li>Designed visually stunning user interfaces using Figma, Photoshop, and Illustrator, resulting in increased user engagement and satisfaction</li>
                    <li>Developed scalable and efficient microservices using modern technologies such as Node.js, React, and MySQL, resulting in improved system performance and reliability
                    </li>
                    <li>Created custom CMS solutions, resulting in streamlined content management and improved user experiences for admins and end users</li>
                    <li>Actively researched emerging technologies and tools to stay up-to-date with industry trends and best practices, resulting in the adoption of new approaches and techniques to improve project outcomes
                    </li>
                    <li>Maintained positive relationships with clients and earned repeat business through exceptional service and results.
                    </li>
                </ul>
            </div>
            <div className="py-4 w-full md:w-2/3">
                <h3 className="text-lg">Web Development Bootcamp Teacher's Assistant</h3>
                <h4 className={`text-base italic pb-2 ${nunito.variable} font-sans`}>September 2022 - December 2022</h4>
                <ul className={`list-disc px-8 ${nunito.variable} font-sans`}>
                    <li>Collaborated closely with lead instructors to deliver highly effective workshops, leveraging my strong knowledge of development topics to provide students with the most up-to-date and relevant information, resulting in improved learning outcomes and student satisfaction</li>
                    <li>Reviewed and debugged student projects, providing detailed feedback and support to improve coding skills and deepen their understanding of programming concepts, resulting in significant improvements in their proficiency and confidence</li>
                    <li>Assisted students during office hours, offering expert guidance and support to overcome technical challenges and improve the quality of their code, resulting in enhanced learning outcomes and greater student success rates</li>
                    <li>Facilitated group projects and whiteboarding sessions, creating an engaging and supportive environment that fostered student enthusiasm for learning, resulting in increased student retention and success rates</li>
                    <li>Demonstrated exceptional communication and interpersonal skills, building trust and rapport with students from diverse backgrounds and skill levels, and collaborating effectively with colleagues to create a cohesive and dynamic learning experience</li>
                </ul>
            </div>
            <Link className="rounded-full px-4 py-2 text-xs md:text-base bg-ani-indigo text-white" href="/resume">Full Resume</Link>
        </section>
    )
}

export default MyExperience;