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

/**
 * Desk image
 *
 * Below is a sample elephant image . Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/safari-car.jpg";

const imageAltText = "safari car with a view of the savannah";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Twitter But Decentralized 🐦",
    description:
      "A decentralized Twitter clone built with Solidity, React, and IPFS. Includes a smart contract, a front-end, and a backend. I built this project to learn more about the Ethereum blockchain and Solidity. ",
    url: "https://github.com/RayPops/mock-twitter-dapp",
  },
  {
    title: "Cancer Spread Simulation 🦠",
    description:
      "A simulation of how cancer cells spread throughout the body. Built using Java and JavaFX. It also simulates bacteria growth and how antibiotics can kill them. ",
    url: "https://github.com/RayPops/Cancer-Spread-Simulation",
  },
  {
    title: "London COVID-19 Visualization 🦠",
    description:
      "A visualisation of the COVID-19 cases in London. Loads data from a CSV file and displays it on a map. Built using Java and JavaFX. ",
    url: "https://github.com/RayPops/london-data-visualiser",
  },
  {
    title: "My Personal Website 🌐",
    description:
      "This website! Built using React and hosted on GitHub Pages. Built to showcase my projects and skills to potential employers. ",
    url: "",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Github Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideInLeft",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
