import React from "react";

export default function Navbar() {
  return (
    <div className="navbar-brand">
      <figure className="image is-128x128">
        <img className="is-rounded" src="https://avatars.githubusercontent.com/u/107427250?v=4" />
      </figure>
     
      <nav className="level">
        <p className="level-item has-text-centered">
          <a className="link is-info">Home</a>
        </p>
        <p className="level-item has-text-centered">
          <a className="link is-info">About</a>
        </p>
        <p className="level-item has-text-centered">
          <h1 className="is-size-1 has-text-centered has-text-success"> Sierra N Nutt</h1>
        </p>
        <p className="level-item has-text-centered">
          <a className="link is-info" href="https://github.com/SierraNN">Repositories</a>
        </p>
        <p className="level-item has-text-centered">
          <a className="link is-info" href="mailto:sierra.nutt@outlook.com">Contact</a>
        </p>
      </nav>
    </div>
  );
}

