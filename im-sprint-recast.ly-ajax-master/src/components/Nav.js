import React from "react";
import Search from "./Search";

const Nav = ({ handleButtonClick }) => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <Search handleButtonClick={handleButtonClick} />
    </div>
  </nav>
);

export default Nav;
