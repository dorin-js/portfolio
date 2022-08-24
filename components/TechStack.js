import React, { forwardRef } from "react";
import { SiReact } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { RiCss3Line } from "react-icons/ri";
import { FaSass } from "react-icons/fa";
import { Tooltip } from "@mantine/core";
import Boop from "./Boop";

const MyComponent = forwardRef((props, ref) => (
  <div ref={ref} {...props}>
    {props.children}
  </div>
));
MyComponent.displayName = "MyComponent";

function TechStack() {
  return (
    <section className="tech-st">
      <span>I've been working with:</span>
      <div className="tech-wrap">
        <Tooltip
          label="HTML"
          position="bottom"
          events={{ hover: true, focus: true, touch: true }}
        >
          <MyComponent tabIndex={0}>
            <Boop rotation={0} timing={200} y={-5}>
              <AiOutlineHtml5 className="tech-icon" />
            </Boop>
          </MyComponent>
        </Tooltip>
        <Tooltip
          label="CSS"
          position="bottom"
          events={{ hover: true, focus: true, touch: true }}
        >
          <MyComponent tabIndex={0}>
            <Boop rotation={0} timing={200} y={-5}>
              <RiCss3Line className="tech-icon" />
            </Boop>
          </MyComponent>
        </Tooltip>
        <Tooltip
          label="Sass/Scss"
          position="bottom"
          events={{ hover: true, focus: true, touch: true }}
        >
          <MyComponent tabIndex={0}>
            <Boop rotation={0} timing={200} y={-5}>
              <FaSass className="tech-icon" />
            </Boop>
          </MyComponent>
        </Tooltip>
        <Tooltip
          label="Javascript"
          position="bottom"
          events={{ hover: true, focus: true, touch: true }}
        >
          <MyComponent tabIndex={0}>
            <Boop rotation={0} timing={200} y={-5}>
              <SiJavascript className="tech-icon" />
            </Boop>
          </MyComponent>
        </Tooltip>
        <Tooltip
          label="React"
          position="bottom"
          events={{ hover: true, focus: true, touch: true }}
        >
          <MyComponent tabIndex={0}>
            <Boop rotation={0} timing={200} y={-5}>
              <SiReact className="tech-icon" />
            </Boop>
          </MyComponent>
        </Tooltip>
        <Tooltip
          label="Redux"
          position="bottom"
          events={{ hover: true, focus: true, touch: true }}
        >
          <MyComponent tabIndex={0}>
            <Boop rotation={0} timing={200} y={-5}>
              <SiRedux className="tech-icon" />
            </Boop>
          </MyComponent>
        </Tooltip>
        <Tooltip
          label="Typescript"
          position="bottom"
          events={{ hover: true, focus: true, touch: true }}
        >
          <MyComponent tabIndex={0}>
            <Boop rotation={0} timing={200} y={-5}>
              <SiTypescript className="tech-icon" />
            </Boop>
          </MyComponent>
        </Tooltip>
        <Tooltip
          label="Next.js"
          position="bottom"
          events={{ hover: true, focus: true, touch: true }}
        >
          <MyComponent tabIndex={0}>
            <Boop rotation={0} timing={200} y={-5}>
              <SiNextdotjs className="tech-icon" />
            </Boop>
          </MyComponent>
        </Tooltip>
      </div>
    </section>
  );
}

export default TechStack;
