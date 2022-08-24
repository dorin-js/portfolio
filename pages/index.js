import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";
import { animated } from "react-spring";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import Layout from "../components/Layout";
import ProfilePic from "../assets/profile_promo.jpeg";
import TechStack from "../components/TechStack";
import useBoop from "../hooks/useBoop";

function AnimatedCaretLink(props) {
  const [style, trigger] = useBoop({ x: 7 });
  return (
    <Link href="/projects" className="flex">
      <a className="browse-pr inline-block" onMouseEnter={trigger}>
        <div style={{ width: "100%" }} className="flex">
          <span>Browse some of my projects</span>{" "}
          <animated.span className="inline-block" style={style}>
            <MdOutlineKeyboardArrowRight />
          </animated.span>
        </div>
      </a>
    </Link>
  );
}

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
                I'm a{" "}
                <RoughNotation
                  type="highlight"
                  iterations={1}
                  animationDelay={850}
                  animationDuration={350}
                  color="rgba(10, 10, 10, 0.1)"
                  show={true}
                >
                  Web Developer
                </RoughNotation>{" "}
                specializing in{" "}
                <RoughNotation
                  type="highlight"
                  iterations={1}
                  color="rgba(10, 10, 10, 0.1)"
                  animationDelay={1000}
                  animationDuration={350}
                  show={true}
                >
                  building user interfaces.
                </RoughNotation>
                Currently,{" "}
                <RoughNotation
                  type="highlight"
                  iterations={1}
                  color="rgba(10, 10, 10, 0.1)"
                  animationDelay={1300}
                  animationDuration={350}
                  show={true}
                >
                  looking for a role
                </RoughNotation>{" "}
                in established IT company with the opportunity to work with the{" "}
                <RoughNotation
                  type="highlight"
                  iterations={1}
                  color="rgba(10, 10, 10, 0.1)"
                  animationDelay={1600}
                  animationDuration={350}
                  show={true}
                >
                  latest technologies.
                </RoughNotation>
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

          <AnimatedCaretLink />
        </main>
      </Layout>
    </>
  );
}
