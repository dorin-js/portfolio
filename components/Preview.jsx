import React from "react";
import Link from "next/link";
import { ActionIcon } from "@mantine/core";
import { Tooltip } from "@mantine/core";
import { FiExternalLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";

const Preview = ({ projects }) => {
  return (
    <>
      {projects.map((pr) => (
        <div className="preview" key={pr.title}>
          <div className="flex" style={{ marginBottom: "1.5rem" }}>
            <h2>{pr.title}</h2>
            <div className="flex" style={{ marginLeft: "auto" }}>
              <span style={{ marginRight: "1rem" }}>
                <Tooltip label="Live Demo">
                  <ActionIcon
                    component="a"
                    variant="subtle"
                    color="dark"
                    href={`${pr.links.live}`}
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
                    href={`${pr.links.git}`}
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
          <h3 style={{ margin: "1.2rem 0 0.8rem 0" }}>
            Built with: {pr.stack}
          </h3>
          <p>{pr?.description}</p>
          <span>Functionality:</span>
          <ul>
            {pr.functionality.map((func) => (
              <li>{func}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Preview;
