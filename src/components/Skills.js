import React from "react";

export default function Skills() {
  return (
    <div className="columns skilllist">
      <div className="column column1">
        <ul>
          <li className="box skills">React</li>
          <li className="box skills">HTML</li>
          <li className="box skills">CSS</li>
          <li className="box skills">JavaScript</li>
          <li className="box skills">Node.js</li>
          <li className="box skills">Express</li>
        </ul>
      </div>
      <div className="column column2">
        <ul>
          <li className="box skills">SQL</li>
          <li className="box skills">MongoDB</li>
          <li className="box skills">GIT / GITHub</li>
          <li className="box skills">Heroku</li>
          <li className="box skills">AWS</li>
        </ul>
      </div>
    </div>
  );
}