import React from "react";
import '../assets/style.css';

export default function Navbar() {
  return (
    <header>
      <div className="container text-center">
        <div className="row align-items-end">
          <div className="col">
            <>About</>
          </div>
          <div className="col">
            <>Resume</>
          </div>
          <div className="col">
            <>Contact</>
          </div>
        </div>
      </div>
    </header>

  );
}

