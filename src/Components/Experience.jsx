/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "https://github.com/RayPops/rp-personal-website/blob/main/src/cv.pdf";
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Experience = () => {
  return (
    <section className="light" id="experience">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "2rem",
        }}
      >
        <h2 style={{ margin: "0", paddingBottom: "2rem" }}>Work Experience</h2>
        <button className="button-35" onClick={downloadResume}>
          View Resume
        </button>
      </div>
    </section>
  );
};

export default Experience;
