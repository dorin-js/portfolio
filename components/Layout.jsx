import React, { useState } from "react";
import Link from "next/link";
import { RiFacebookBoxFill } from "react-icons/ri";
import { RiFacebookBoxLine } from "react-icons/ri";
import { RiGithubLine } from "react-icons/ri";
import { RiGithubFill } from "react-icons/ri";
import { RiMoonLine } from "react-icons/ri";
import { RiMoonFill } from "react-icons/ri";

const Layout = ({ children }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="layout">
      <nav className="navbar">
        <div className="main-menu">
          <Link href="/">
            <a className="nav-link active-link">Home</a>
          </Link>
          <Link href="/projects">
            <a className="nav-link">Projects</a>
          </Link>
          <Link href="/cv">
            <a className="nav-link">CV</a>
          </Link>
        </div>
        <div className="additional-menu">
          <Link href="https://facebook.com/dorin.ilusca">
            <a className="nav-socials" target="_blank">
              <RiFacebookBoxLine />
            </a>
          </Link>
          <Link href="https://github.com/dorin-js">
            <a className="nav-socials" target="_blank">
              <RiGithubLine />
            </a>
          </Link>
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
    </div>
  );
};

export default Layout;
