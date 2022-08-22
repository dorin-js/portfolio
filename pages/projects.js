import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";
import Preview from "../components/Preview";

function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Dorin Ilușca</title>
        <meta name="description" content="Som of projects I have built" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="main">
          <Preview />
        </div>
      </Layout>
    </>
  );
}

export default Projects;
