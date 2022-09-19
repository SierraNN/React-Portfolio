import React from "react";
import '../assets/style.css';

export default function About() {
  return (
    <div>
      <div className="columns font-effect-neon">
      <div className="column level-item has-text-centered is-size-2" />
        <div className="column level-item has-text-centered is-size-2">
          <a className="link is-info" target="_blank" href="https://github.com/SierraNN">Repositories</a>    
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
          <p>
            A highly motivated, results-driven MERN full stack developer with a passion
            for front end web development. A solid background in HTML, CSS, Node,
            JavaScript, jQuery, SQL, MongoDB, and React. Completed and launched a
            React portfolio showcasing fully functional, deployed applications that utilize
            industry-leading technologies.
          </p>
        </div>
        <div className="column">       
        </div>
      </div>
    </div>
    
  );
}
