import React from "react";
import portfolio from "../../utils/portfolio.png";
import { Typography } from "@material-ui/core";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <React.Fragment>
      <Typography
        variant="h2"
        display="block"
        align="center"
        style={{
          margin: "1rem",
          fontSize: "1.6rem",
          textTransform: "uppercase"
        }}
      >
        {/*  <Element name="about-me" id="about-me">
                About Me
            </Element> */}
      </Typography>
      <div className="name">
        <img src={portfolio} alt="profile_photo" className="img" />
        <h1>Dikshant Gupta</h1>
        <div className="subtitle">
          <h3>Computer Science Student. University of Florida</h3>
          <p>
          Passionate about coding and proficient in various technical skills like python, Java, SQL. Developed projects on  
            
          different domains like distributed systems, database project for trend and analysis and using advanced data structures.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutMe;
