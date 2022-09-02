import React, { useState } from "react";
import Link from "next/link";
import { RiFacebookCircleFill } from "react-icons/ri";
import { SiMinutemailer } from "react-icons/si";
import { RiGithubFill } from "react-icons/ri";
import { useRouter } from "next/router";
import { RoughNotation } from "react-rough-notation";
import Boop from "./Boop";

function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="main-menu">
        <Link href="/">
          <a
            className={
              props.router.pathname == "/" ? "nav-link active-link" : "nav-link"
            }
          >
            <RoughNotation type="underline" show={props.router.pathname == "/"}>
              Home
            </RoughNotation>
          </a>
        </Link>
        <Link href="/projects">
          <a
            className={
              props.router.pathname == "/projects"
                ? "nav-link active-link"
                : "nav-link"
            }
          >
            <RoughNotation
              type="underline"
              show={props.router.pathname == "/projects"}
            >
              Projects
            </RoughNotation>
          </a>
        </Link>
        <Link href="/CV.pdf">
          <a className="nav-link" target="_blank">
            CV
          </a>
        </Link>
      </div>
      <div className="additional-menu">
        {/* <button className="nav-add-color">
          <AiOutlineBgColors />
        </button> */}
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <a
        href="https://facebook.com/dorin.ilusca"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Boop rotation={0} timing={200} scale={1.35}>
          <RiFacebookCircleFill />
        </Boop>
      </a>
      <a
        href="https://github.com/dorin-js"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Boop rotation={0} timing={200} scale={1.35}>
          <RiGithubFill />
        </Boop>
      </a>

      <a className="email" href="mailto: dorin.ilusca@hotmail.com">
        <Boop rotation={0} timing={200} scale={1.35}>
          <SiMinutemailer />
        </Boop>
      </a>
    </footer>
  );
}

const Layout = ({ children }) => {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();
  return (
    <div className="layout">
      <Navbar
        hovered={hovered}
        setHovered={setHovered}
        router={router}
      ></Navbar>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
