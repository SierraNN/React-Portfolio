import React from "react";
import Image from '../assets/logo1.png';
import Image1 from '../assets/linkedin-logo-512x512.png';


export default function Navbar() {
  return (
    <div className="nav">
      <div className="navbar-brand">
        <nav className="level px-3 mx-3 is-justify-content-space-evenly">
          <p className="level-item has-text-centered">
            <figure className="image">
              <img className="is-rounded" src={Image} />
            </figure>
          </p>
        </nav>
      </div>
  </div>
  );
}

