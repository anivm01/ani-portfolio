import { Nunito } from 'next/font/google'
import Link from 'next/link';
const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' })

const ResumePage = () => {
    return (
        <main className="max-w-screen-xl mx-auto">
            <div className='md:flex justify-between items-center p-4 w-full md:w-2/3'>
                <h2 className='bg-gradient-to-r to-ani-red from-ani-yellow text-transparent bg-clip-text text-2xl mb-4 lg:mb-0'>Resume</h2>
                <a className="p-2 lg:p-4 text-white bg-gradient-to-r to-ani-red from-ani-yellow lg:w-fit" href="/resume/ani-mihaylova-resume.pdf" download>Download PDF</a>
            </div>
            <section className='p-4 w-full md:w-2/3'>
                <h1 className='m-0 text-2xl md:text-3xl lg:text-4xl'>Ani Mihaylova</h1>
                <h4>
                    <Link href="mailto:anivm.webdev@gmail.com">Email</Link>
                    <span> | </span>
                    <Link href="https://www.linkedin.com/in/anivm01/">LinkedIn</Link>
                    <span> | </span>
                    <Link href="https://github.com/anivm01">GitHub</Link>
                </h4>
                <p className={`${nunito.variable} font-sans py-4`}>Passionate software developer and coding bootcamp graduate with a background in ESL teaching. Skilled in creating customized
                    solutions, designing visually stunning user interfaces, and developing scalable microservices. Adept at researching and implementing
                    emerging technologies and staying up-to-date with industry trends and best practices. Proven ability to collaborate closely with clients,
                    colleagues, and people from diverse backgrounds, and adapt communication styles to meet their unique needs. Strong commitment to
                    ongoing learning, professional development and mentorship. Excited to contribute to a dynamic team and help create digital solutions
                    that solve real world problems and have a meaningful impact on people's daily lives.</p>
            </section>
            <section className='p-4 w-full md:w-2/3'>
                <h2 className="w-full text-xl cursor-default">Skills</h2>
                <ul className={`list-disc grid grid-cols-1 lg:grid-cols-3 gap-1 pl-4 mt-4 ${nunito.variable} font-sans`}>
                    <li>JavaScript, React, Node,</li>
                    <li>HTML, CSS, SCSS,</li>
                    <li>Express, MySQL, Knex.js,</li>
                    <li>NGINX, Digital Ocean, Ubuntu,</li>
                    <li>Git, GitHub, GitLab,</li>
                    <li>TypeScript, Next.js, Tailwind.css,</li>
                    <li>Photoshop, Figma, Illustrator,</li>
                    <li>JSON, npm, JWT</li>
                </ul>
            </section>
            <section className='p-4 w-full md:w-2/3 flex flex-col gap-4' >
                <h2 className="w-full text-xl cursor-default">Experience</h2>
                <div>
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
                <div>
                    <h3 className="text-lg">Web Development Bootcamp Teacher's Assistant</h3>
                    <h4 className={`text-base italic ${nunito.variable} font-sans`}>BrainStation, Toronto, ON</h4>
                    <h4 className={`text-base italic pb-2 ${nunito.variable} font-sans`}>September 2022 - December 2022</h4>
                    <ul className={`list-disc px-8 ${nunito.variable} font-sans`}>
                        <li>Collaborated closely with lead instructors to deliver highly effective workshops, leveraging my strong knowledge of development topics to provide students with the most up-to-date and relevant information, resulting in improved learning outcomes and student satisfaction</li>
                        <li>Reviewed and debugged student projects, providing detailed feedback and support to improve coding skills and deepen their understanding of programming concepts, resulting in significant improvements in their proficiency and confidence</li>
                        <li>Assisted students during office hours, offering expert guidance and support to overcome technical challenges and improve the quality of their code, resulting in enhanced learning outcomes and greater student success rates</li>
                        <li>Facilitated group projects and whiteboarding sessions, creating an engaging and supportive environment that fostered student enthusiasm for learning, resulting in increased student retention and success rates</li>
                        <li>Demonstrated exceptional communication and interpersonal skills, building trust and rapport with students from diverse backgrounds and skill levels, and collaborating effectively with colleagues to create a cohesive and dynamic learning experience</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg">ESL Teacher/Instructor</h3>
                    <h4 className={`text-base italic ${nunito.variable} font-sans`}>Overseas Training Center & YMCA, Osaka</h4>
                    <h4 className={`text-base italic pb-2 ${nunito.variable} font-sans`}>April 2018 - March 2022</h4>
                    <ul className={`list-disc px-8 ${nunito.variable} font-sans`}>
                        <li>Collaborated closely with lead instructors to deliver highly effective workshops, leveraging my strong knowledge of development topics to provide students with the most up-to-date and relevant information, resulting in improved learning outcomes and student satisfaction</li>
                        <li>Reviewed and debugged student projects, providing detailed feedback and support to improve coding skills and deepen their understanding of programming concepts, resulting in significant improvements in their proficiency and confidence</li>
                        <li>Assisted students during office hours, offering expert guidance and support to overcome technical challenges and improve the quality of their code, resulting in enhanced learning outcomes and greater student success rates</li>
                        <li>Facilitated group projects and whiteboarding sessions, creating an engaging and supportive environment that fostered student enthusiasm for learning, resulting in increased student retention and success rates</li>
                        <li>Demonstrated exceptional communication and interpersonal skills, building trust and rapport with students from diverse backgrounds and skill levels, and collaborating effectively with colleagues to create a cohesive and dynamic learning experience</li>
                    </ul>
                </div>
            </section>
            <section className='md:flex p-4 w-full md:w-2/3 justify-between'>
                <div>
                    <h3 className="text-lg">Diploma - Web Development</h3>
                    <h4 className={`text-base italic ${nunito.variable} font-sans`}>BrainStation, Toronto, ON</h4>
                    <h4 className={`text-base italic pb-2 ${nunito.variable} font-sans`}>July 2022 - September 2022</h4>
                </div>
                <div>
                    <h3 className="text-lg">Bachelor of Arts (B.A.) - Psychology</h3>
                    <h4 className={`text-base italic ${nunito.variable} font-sans`}>York University, Toronto, ON</h4>
                    <h4 className={`text-base italic pb-2 ${nunito.variable} font-sans`}>September 2007 - June 2012</h4>
                </div>
            </section>
        </main>
    )
}

export default ResumePage;