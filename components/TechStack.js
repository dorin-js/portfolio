import React, { forwardRef } from "react";
import { SiReact } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import Tippy from "@tippyjs/react/headless";

const ThisWillWork = forwardRef((props, ref) => {
  return <button ref={ref}>Reference</button>;
});

function TechStack() {
  return (
    <section className="teck-stack">
      <h3>I've been working with:</h3>
      <div className="tech-wrap">
        <Tippy content="Tooltip">
          <ThisWillWork />
        </Tippy>
        <DiJavascript1 />
        <SiReact />
        <SiRedux />
        <SiTypescript />
        <SiNextdotjs />
        <SiStyledcomponents />
      </div>
    </section>
  );
}

export default TechStack;
