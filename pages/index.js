import Head from "next/head";
import Image from "next/image";

import Layout from "../components/Layout";
import ProfilePic from "../assets/profile_promo.jpeg";
import TechStack from "../components/TechStack";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dorin Ilușca - web portfolio</title>
        <meta name="description" content="web dev portolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Layout>
          <section className="intro">
            <div className="about-intro">
              <h1 className="name">Dorin Ilușca</h1>
              <h4 className="subname">I build things for the web</h4>
              <p>
                I'm a web developer specializing in building user interfaces.
              </p>
            </div>
            <Image
              className="profile-pic"
              src={ProfilePic}
              alt="Picture of author"
              width={150}
              height={150}
            />
          </section>
          <TechStack />
        </Layout>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </>
  );
}
