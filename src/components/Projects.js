import React from "react";

export default function Project() {
  return (
    <div>
      <div className="column has-text-centered is-size-1 has-text-black font-effect-neon">Completed Projects</div>
      <div className="columns flex px-3">
        <div className="column is-align-items-center">
          <figure className="image is-256" height="200px" width="100px">
            <a href=""><img className="is-rounded is-flex-direction-row" src="" /></a>
          </figure>
        </div>
        <div className="column is-align-items-center">
          <figure className="image is-256 " height="100px" width="100px">
            <a href=""><img className="is-rounded" src="" /></a>
          </figure>
        </div>
        <div className="column is-align-items-center"> 
          <figure className="image is-256" height="100px" width="100px">
            <a href=""><img className="is-rounded" src=""/></a>
          </figure>
        </div>
        <div className="column is-align-items-center"> 
          <figure className="image is-256" height="100px" width="100px">
              <a href=""><img className="is-rounded" src="" /></a>
            </figure>
        </div>
      </div>
    </div>
  );
}