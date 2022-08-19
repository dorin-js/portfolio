import Head from "next/head";
import Image from "next/image";

import Layout from "../components/Layout";
import ProfilePic from "../assets/profile_promo.jpeg";
import TechStack from "../components/TechStack";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dorin Ilușca - web portfolio</title>
        <meta name="description" content="web dev portolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main className="main">
          <section className="intro">
            <div className="about-intro">
              <h1 className="name">Dorin Ilușca</h1>
              <h4 className="subname">I build things for the web</h4>
              <p className="description">
                I'm a web developer specializing in building user interfaces.
                Currently, looking for a role in established IT company with the
                opportunity to work with the latest technologies.
              </p>
            </div>
            <div className="profile-pic-wrap">
              <Image
                className="profile-pic"
                src={ProfilePic}
                alt="Picture of author"
                width={150}
                height={150}
              />
            </div>
          </section>
          <TechStack />
          <Link href="/projects">
            <a className="browse-pr">Browse my projects </a>
          </Link>
        </main>
      </Layout>
    </>
  );
}
