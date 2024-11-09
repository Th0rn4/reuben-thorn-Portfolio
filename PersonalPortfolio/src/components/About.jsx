import React from "react";
import Navbar from "./Navbar";
import InfiniteScrollGallery from "./InfinitScrollGallery";
import "./About.css";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about-container">
        <h1 className="about-title">What's Up?</h1>
        <p className="about-description">
          I recently completed my Bachelor’s degree in Information Technology at
          the North-West University (NWU), graduating end of 2024. I am
          currently exploring career opportunities in the tech industry. Outside
          of my professional pursuits, I am passionate about staying active
          whether it’s hitting the gym or playing padel with friends. I also
          enjoy embarking on adventures and discovering new experiences.
          Recently, I’ve taken up learning the guitar, and I’m excited to
          improve my skills day by day. I’m eager to continue growing both
          personally and professionally as I step into the next phase of my
          career.
        </p>
        <InfiniteScrollGallery />
      </div>
    </div>
  );
};

export default About;
