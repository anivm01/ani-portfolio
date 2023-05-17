Download the code from github.

```bash
npm i
#to install all the dependencies

npm run dev
#to run the project
```

## The app directory

You will see the app directory in the root folder, that's where all the routing happens.

### Layout

layout.tsx is for content that's the same across all pages in the app.
I have added the Header and the Footer in there because I want them to be the same across all pages.
the {children} is where all the page components go.

### Page components

/app/page.tsx is the home page. I mostly use it as an index to import all the separate components of the home page

/app/about-me/page.tsx is the about me page, just some text and a picture. Nothing very exciting there. But it is useful for SEO.

/app/projects/page.tsx is currently empty but will be a sort of gallery of all my projects. Currently I only have content for the three featured projects so I didn't bother to also display them on the projects page and there's no specific link to it anywhere on the site.

/app/projects/[slug]/page.tsx is where things get interesting. This is the template for the project details pages.
There are comments in the file explaining how it works.

### Other things in app

- The font folder is where I'm storing the font file for one of the fonts I'm using. I'm importing it in layout.tsx
- I haven't done anything in the api folder. that just gets installed with the latest version of next.js
- globals.css just has the basic tailwind configuration stuff and a border box rule I like to use across all my pages

## The projects directory

This is where I'm storing the md files for each project.
Each md file has a metadata section at the top and the main content underneath
The name of each file is used as a "slug" for routing and navigation

## The components directory

This is where I have all my individual components. The tsx files export actual tsx (or jsx) content.
The ts files are kind of like utility functions.

### getProjectMetadata.ts

This is where I extract the metadata from all the project md files. It returns an array of project objects.

### projectMetadata.ts

A typescript thing and it defines the keys and the types of data each key's value will be.

### Header.tsx and Footer.tsx

Fairly self explanatory

### About.tsx

This includes both the skills and the about section on the home page
Note on the skills: there is an array of skills objects in /data/skills.json
Each object consists of the name of the skill and the path to the image for each skill
The skills section maps through that array to display all the skills

### Hero.tsx

The hero section on the home page (the colorful banner with my face on it)

### MyExperience.tsx

The my experience section on the home page (also fairly straighforward)

### MyProjects.tsx

The Featured Projects section. Probably could have been merged with the projectPreviews component but I like to keep components as dumb as possible so this one focuses only on styling the section itself.

### ProjectPreviews.tsx - handles getting the data

This is a child of MyProjects.tsx and inside it is where I use the array of project metadata from the getProjectMetadata.ts and choose which projects will be featured on the main page

### ProjectPreview - handles displaying the data

It is a separate component because it defines how each the individual projects will look on the home page. It is used three times inside the ProjectsPrevews.tsx using the map method.

### Modal.tsx

I went the easy route and used a library to create the modal. This component is a reusable modal component and it can be wrapped around anything you wish to make into a popup. All it needs is an onClose function.

### Video.tsx

This is where I'm embedding the video iframe. I used the embed code from the share option on youtube and just made the video id dynamic. I store the video ids for each individual project in the metadata.

---

Below you will find the boilerplate next.js readme content in case some of it might be useful

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[http://localhost:3000/api/hello](http://localhost:3000/api/hello) is an endpoint that uses [Route Handlers](https://beta.nextjs.org/docs/routing/route-handlers). This endpoint can be edited in `app/api/hello/route.ts`.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
