import React, { useState } from "react";
import Link from "next/link";
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiFacebookCircleLine } from "react-icons/ri";
import { RiGithubLine } from "react-icons/ri";
import { RiGithubFill } from "react-icons/ri";
import { RiMoonLine } from "react-icons/ri";
import { RiMoonFill } from "react-icons/ri";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();
  return (
    <div className="layout">
      <nav className="navbar">
        <div className="main-menu">
          <Link href="/">
            <a
              className={
                router.pathname == "/" ? "nav-link active-link" : "nav-link"
              }
            >
              Home
            </a>
          </Link>
          <Link href="/projects">
            <a
              className={
                router.pathname == "/projects"
                  ? "nav-link active-link"
                  : "nav-link"
              }
            >
              Projects
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
              setHovered(true);
            }}
            onMouseLeave={() => {
              setHovered(false);
            }}
          >
            {hovered ? <RiMoonFill /> : <RiMoonLine />}
          </button>
        </div>
      </nav>
      {children}
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
    </div>
  );
};

export default Layout;
