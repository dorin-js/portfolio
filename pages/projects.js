import Head from "next/head";
import React, { useState } from "react";
import Layout from "../components/Layout";
import Preview from "../components/Preview";

function Projects() {
  const projects = [
    {
      title: "Snippets app",
      previewVid: "snipp.mp4",
      links: {
        git: "https://github.com/dorin-js/mycode-snippets",
        live: "https://mcsa.vercel.app/",
      },
      stack: "Next.js, Typescript, MySQL database, Prisma ORM",
      description:
        "An application born thru the need of having a single place to store mostly used and necessary code snippets.",
      functionality: [
        "Staticaly Generated pages with Incremental Static Regeneration",
        "Role based login",
        "Create, Read, Delete records (role based)",
        "Data saved in Markdown syntax",
        "Syntax highlighting",
        "Copy code button",
      ],
    },
    {
      title: "Ecommerce shop",
      previewVid: "gmail-speed.mp4",
      links: {
        git: "https://github.com/dorin-js/react-ecommerce",
        live: "https://react-ecom-eight.vercel.app/",
      },
      stack: "React, Redux, Styled Components",
      description: "",
      functionality: [
        "API products data fetching",
        "Shopping cart",
        "Products filtering",
        "Multiple pages",
      ],
    },
    {
      title: "Gmail clone",
      previewVid: "gmail-speed.mp4",
      links: {
        git: "https://github.com/dorin-js/gmail-clone",
        live: "https://clone-42297.web.app/",
      },
      stack: "React, Redux, Firebase database, Material UI",
      description:
        "A gmail-like app, simulate email sending, with data storage in real time database.",
      functionality: ["Create", "Read", "Delete", "Google Log In"],
    },
  ];
  // const [projects] = useState(projects)
  return (
    <>
      <Head>
        <title>Projects - Dorin Ilușca</title>
        <meta name="description" content="Som of projects I have built" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="main">
          <Preview projects={projects} />
        </div>
      </Layout>
    </>
  );
}

export default Projects;
