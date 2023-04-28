import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/kenya-background.jpg";

const imageAltText = "a generic safari background";

const Education = () => {
  return (
    <section className="light" id="education">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>Education</h2>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          <h3>Kings College London</h3>
          <h4>September 2022 - Present</h4>
          <p>
            Majoring in Computer Science with specialisation in Artificial Intelligence and Data
            Algorithmization.
          </p>
        </ul>
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          <h3>Sevenoaks School</h3>
          <h4>September 2019 - July 2021</h4>
          <p>
            Achieved 44 of 45 points. Specialized in Mathematics, Physics and Economics.
            Vice-Captain of 1st XI Field Hockey.
          </p>
        </ul>
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          <h3>International School of Kenya</h3>
          <h4>September 2016 - July 2019</h4>
          <p>
            Cultivated a passion for technology through participation in the robotics, digital
            design, and coding clubs.
          </p>
        </ul>
        <hr />
      </div>
    </section>
  );
};

export default Education;
