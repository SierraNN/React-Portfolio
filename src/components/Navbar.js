import React from "react";
import Image from '../assets/Sierra.png';
import Image1 from '../assets/linkedin-logo-512x512.png';


export default function Navbar() {
  return (
    <div className="columns">
    <div className=" column navbar-brand">
      <nav className="level px-3 mx-3 is-justify-content-space-evenly">

        <p className="level-item has-text-centered">
          <figure className="image is-256">
            <img className="is-rounded" src={Image} />
          </figure>
        </p>
      </nav>
    </div>
    <div className="column" />
    <div className="column" />
    <div className="column is-justify-content-right mt-6 pt-6 ">
      
      <a className="image is-48x48" href="https://www.linkedin.com/in/sierra-nutt-59418291/"><img src={Image1} /></a> 
    </div>
  </div>
  );
}

