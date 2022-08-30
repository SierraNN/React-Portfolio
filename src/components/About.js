import React from "react";
import '../assets/style.css';

export default function About() {
  return (
    <div>
      <div className="columns font-effect-neon">
      <div className="column level-item has-text-centered is-size-2" />
        <div className="column level-item has-text-centered is-size-2">
          <a className="link is-info" href="https://github.com/SierraNN">Repositories</a>    
        </div>
        <div className="column level-item has-text-centered is-size-2">
          <a className="link is-info" href="mailto:sierra.nutt@outlook.com"> Contact</a>
        </div>
        <div className="column level-item has-text-centered is-size-2" />
      </div>
      <div className="columns has-text-black">
        <div className="column">
        </div>
        <div className="column a">
          <p>A highly motivated, results-driven MERN full stack developer with solid experience
          in data analysis and database management. My
          ability to solve complex problems, along with my proven leadership qualities
          have allowed me to develop strategic solutions for every challenge I face.
          </p>
        </div>
        <div className="column">       
        </div>
      </div>
    </div>
    
  );
}
