import React, { useState } from "react";
import "./header.scss";
import { images } from "../../images";
const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };
  return (
    <header>
      <nav className="navbar container">
        <div className="logo">
          <img src={images.logo} alt="" />
        </div>
        <ul className={open ? `nav-items active` : `nav-items`}>
          <li>About</li>
          <li>Contact</li>
          <li>Portfolio</li>
          <li className="btn btn--nav-btn">View Plans</li>
        </ul>
        <div className="hamburger">
          <img src={images.hamburger} onClick={handleClick} alt="" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
