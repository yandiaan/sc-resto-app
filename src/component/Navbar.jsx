import React from "react";

function Navbar() {
  return (
    <div className="main">
      <h1 className="logo">Food Live</h1>

      <div>
        <ul className="nav_link">
          <li>Home</li>
          <li>Favorite</li>
          <li>About Us</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;