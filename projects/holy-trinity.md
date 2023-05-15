---
title: "Holy Trinity Macedono-Bulgarian Church Website"
subtitle: "Modernized church webiste with custom CMS"
tech_stack: "JavaScript, React.js, Node.js, HTML, CSS, Sass, Express, MySql, Knex.js, JWT, Digital Ocean"
featured_image: "/images/holy-trinity-preview.jpg"
code_url: "https://github.com/anivm01?tab=repositories&q=holy-trinity&type=&language=&sort="
video_id: "qkCV3iR7g1w"
---

### Description

See the live site: [here](https://orca-app-gl9f4.ondigitalocean.app/)!
(official domain name coming soon!)

I was asked to create a modernized version of the Holy Trinity Macedono-Bulgarian Church website. Their website hadn't been updated since 2011 and few people ever opened it. Post-COVID the community had become more disconnected and they wanted a way to bring the community back together. Also during COVID, the priest started broadcasting the services online and wanted a way to do that through the website in a more worship-friendly environment than YouTube (where he was currently streaming them).

To achieve these goals, I built a new website using modern design principles and the latest web technologies. The new website features a clean and simple design that is easy to navigate, with clear calls to action that encourage visitors to explore the site and engage with the church community. It featured dynamic content types including live broadcasts, weekly announcements, events, community news and obituaries as well as static infomational content such as donations and hall rental information.

Overall, the new website has helped to revitalize the Holy Trinity Macedono-Bulgarian Church's online presence and bring the community closer together, both in-person and online. Through this project, I gained valuable experience in designing and building websites that meet the unique needs of a religious community. I am proud to have contributed to the church's mission and to have helped them reach a wider audience through the power of technology.

### Design Process:

![images/ht-design](/images/ht-design.jpg)

I had three goals in mind when designing the website: to modernize the existing site and make it responsive and mobile-friendly, to showcase the live broadcasts in a worship-friendly environment, and to help increase community involvement. To achieve these goals, I created a clean mobile-first design and changed the color palette to warmer tones to evoke the atmosphere within the church building. I kept the original logo, which was hand-made by one of the members of the church, and used images from inside and outside the church.

To showcase the live broadcasts, I built a feature that incorporated UI elements that evoked a more somber atmosphere, and provided ways to access readings, prayers, and chants relevant to each service as it was being broadcast. I also implemented a weekly announcement feature and an events feature with the goal of giving community members a reason to check in regularly to see what's new and stay connected. Additionally, I added a community news feature where members of the community could share stories and updates, which helped to improve community engagement.

Another feature that I added was the ability to post obituaries in a style reminiscent of a Bulgarian tradition of posting obituaries on a bulletin board in the neighborhood. This was done with the goal of evoking that nostalgic feeling and again helping to keep the community engaged.

### Development Process:

![images/ht-development](/images/ht-development.jpg)

To achieve the goals set during the design process, I chose to create two frontend applications, one for the public and one for the administrators. The admin application is essentially a content management system where the priest and the board of trustees can upload new content. The public site is accessible by anyone and displays information based on time of request, always showing the most up-to-date, published content.

To deliver the content, I had to build an API and a database to store it. I used modern web technologies to create a responsive and mobile-friendly site that could be accessed from any device. I also implemented a broadcast feature that allowed the church to stream its services online in a more worship-friendly environment than YouTube, where they were previously streaming them.

The content management system allowed the church to easily update the website with new content, such as weekly announcements, events, and community news. Additionally, the system allowed for the posting of obituaries in a style that evoked a traditional Bulgarian bulletin board.

Overall, the development process involved creating a modern and user-friendly website that met the needs of the church community. Through the use of modern web technologies, I was able to create a responsive and mobile-friendly site that showcased the church's live broadcasts and helped to increase community involvement.

### Challenges Faced:

During the development process, I faced a few challenges that I had to overcome. One of the primary challenges was making the website bilingual. The community is split between English and Bulgarian speakers and the site had to be able to accomodate both. This meant that all the different post types had to be be able to be stored in two languages in the database, which required careful planning and organization. At the same time not every post type was going to have both languages so I had to incorporate conditional rendering based on whether one or both languages were used.

Another challenge I faced was incorporating an optional image gallery for the community news articles. It also needed to be conditionally rendered in both languages as some images only applied to one language or the other. This required additional coding to ensure that the image gallery was displaying correctly.

Additionally, both the public and the admin sites had to be extremely easy to use and navigate. This was a significant challenge, as many of the people who would be using the website were older and not as comfortable with modern technologies. To address this challenge, I focused on creating a clean and simple design, with intuitive navigation and clear labeling, that would be easy for everyone to use.

### Impact

The modernization of the Holy Trinity Macedono-Bulgarian Church website had a significant impact on the community. The website now provides a central hub for information about the church and its activities, making it easier for members of the community to stay connected and informed. The addition of the live broadcast feature has made it possible for people who are unable to attend services in person to still participate and feel connected to their church community. The weekly announcement and events features have given community members a reason to check in regularly and stay up to date on what's happening. Finally, the community news feature and obituaries feature have provided new opportunities for community members to share stories and updates, creating a greater sense of belonging and engagement. Overall, the new website has helped to bring the community closer together and has strengthened their connection to their church and to each other.
