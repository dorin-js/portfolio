import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";

function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Dorin Ilușca</title>
        <meta name="description" content="List of projects built" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="main"></div>
      </Layout>
    </>
  );
}

export default Projects;
