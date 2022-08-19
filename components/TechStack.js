import React, { forwardRef } from "react";
import { SiReact } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { Tooltip } from "@mantine/core";

const MyComponent = forwardRef((props, ref) => (
  <div ref={ref} {...props}>
    {props.children}
  </div>
));

function TechStack() {
  return (
    <section className="tech-st">
      <span>I've been working with:</span>
      <div className="tech-wrap">
        <Tooltip label="Javascript" position="bottom">
          <MyComponent>
            <DiJavascript1 className="tech-icon" />
          </MyComponent>
        </Tooltip>
        <Tooltip label="React" position="bottom">
          <MyComponent>
            <SiReact className="tech-icon" />
          </MyComponent>
        </Tooltip>
        <Tooltip label="Redux" position="bottom">
          <MyComponent>
            <SiRedux className="tech-icon" />
          </MyComponent>
        </Tooltip>
        <Tooltip label="Typescript" position="bottom">
          <MyComponent>
            <SiTypescript className="tech-icon" />
          </MyComponent>
        </Tooltip>
        <Tooltip label="Next.js" position="bottom">
          <MyComponent>
            <SiNextdotjs className="tech-icon" />
          </MyComponent>
        </Tooltip>
      </div>
    </section>
  );
}

export default TechStack;
