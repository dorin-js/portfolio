import React from "react";
import Link from "next/link";
import { ActionIcon } from "@mantine/core";
import { Tooltip } from "@mantine/core";
import { FiExternalLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";

const Preview = () => {
  return (
    <div className="preview">
      <div className="flex">
        <h2 style={{ marginBottom: "1.5rem" }}>Gmail clone</h2>
        <div className="flex" style={{ marginLeft: "auto" }}>
          <span style={{ marginRight: "1rem" }}>
            <Tooltip label="Live Demo">
              <ActionIcon
                component="a"
                variant="subtle"
                color="dark"
                href="https://clone-42297.web.app/"
                target="_blank"
              >
                <FiExternalLink />
              </ActionIcon>
            </Tooltip>
          </span>
          <span>
            <Tooltip label="Source code">
              <ActionIcon
                component="a"
                variant="subtle"
                color="dark"
                href="https://github.com/dorin-js/gmail-clone"
                target="_blank"
              >
                <BsGithub />
              </ActionIcon>
            </Tooltip>
          </span>
        </div>
      </div>
      <video width="800" autoPlay muted loop>
        <source src="gmail-speed.mp4" type="video/mp4" />
      </video>
      <h3 style={{ marginTop: "1rem" }}>
        Built with React, Redux, Firebase, Material UI
      </h3>
      <p>
        A gmail-like app, simulate email sending, with data storage in real time
        database.
      </p>
      <span>Functionality:</span>
      <ul>
        <li>Create </li>
        <li>Read</li>
        <li>Delete</li>
        <li>Google Log In</li>
      </ul>
    </div>
  );
};

export default Preview;
