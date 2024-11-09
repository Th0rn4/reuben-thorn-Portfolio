import React from "react";
import "./Extra.css";

const Extras = () => {
  return (
    <div className="extras">
      <div className="left-side">
        <p>
          Reuben Thorn is a South-African Software Developer from Johannesburg,
          Gauteng.
          <br />
          Reuben develops software with a focus on interactive media and digital
          tooling.
          <br />
          <br /> {/* Extra line break */}
          He is currently pursuing a Bachelor's degree in Information Technology
          at North-West University, set to be completed by the end of 2024.
          <br />
          <br />
          An all-rounder with a passion for learning, Reuben loves to experiment
          with new technologies and is always up for a challenge.
        </p>
      </div>
      <div className="right-side">
        <p>
          “I aspire to be a living example that, no matter your background or
          circumstances, you can achieve anything you set your mind to.
          <br />
          <br />
          With a ton of heart, it can work.”
        </p>
      </div>
    </div>
  );
};

export default Extras;
