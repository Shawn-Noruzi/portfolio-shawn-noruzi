import React from "react";
import "./section.css";

const Section = React.forwardRef(
  ({ children, wrapper = true, backgroundColor = "#FFFFFF" }, ref) => {
    return (
      <section ref={ref} className="section" style={{ backgroundColor }}>
        {wrapper ? <div className="section-wrapper">{children}</div> : children}
      </section>
    );
  }
);

export default Section;