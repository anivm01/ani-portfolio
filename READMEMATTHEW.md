Download the code from github.
run npm i to install all the dependencies

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
