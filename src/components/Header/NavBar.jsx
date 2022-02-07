import { useState } from "react";

import logo from "../../images/logo.svg";
import hamburger from  "../../images/icon-hamburger.svg";
import closeMenu from  "../../images/icon-close-menu.svg";

const NavBar = () => {
  const [isOpen, setisOpen] = useState(false);

  function handleMenu(){
    setisOpen((prevState)=>(!prevState));
  }

  return (
    <nav className="header__navbar flex justify-between mx-auto">
      <div>
        <img src={logo} alt="crowdfunding logo" />
      </div>
      <ul className={`header__navbar_ul ${isOpen && 'active'} flex gap-6`}>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Discover</a>
        </li>
        <li>
          <a href="#">Get Started</a>
        </li>
      </ul>
      <button className="menu-btn" onClick={handleMenu}>
        {isOpen ? (
          <img src={closeMenu} alt="close icon" />
        ) : (
          <img src={hamburger} alt="hamburger icon" />
        )}
      </button>
    </nav>
  );
};

export default NavBar;
