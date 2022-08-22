import React, { useState } from "react";
import Link from "next/link";
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiFacebookCircleLine } from "react-icons/ri";
import { RiGithubLine } from "react-icons/ri";
import { RiGithubFill } from "react-icons/ri";
import { RiMoonLine } from "react-icons/ri";
import { RiMoonFill } from "react-icons/ri";
import { useRouter } from "next/router";
import { RoughNotation } from "react-rough-notation";

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
        <Link href="/CV-3.pdf">
          <a className="nav-link" target="_blank">
            CV
          </a>
        </Link>
      </div>
      <div className="additional-menu">
        <button
          className="nav-socials"
          onMouseEnter={() => {
            props.setHovered(true);
          }}
          onMouseLeave={() => {
            props.setHovered(false);
          }}
        >
          {props.hovered ? <RiMoonFill /> : <RiMoonLine />}
        </button>
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
        <RiFacebookCircleLine />
      </a>
      <a
        href="https://github.com/dorin-js"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiGithubLine />
      </a>
      <a className="email" href="mailto: dorin.ilusca@hotmail.com">
        Send Email
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
