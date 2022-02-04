import logo from "../../images/logo.svg";

const NavBar = () => {
  return (
    <nav className="header__navbar flex justify-between mx-auto">
      <div>
        <img src={logo} alt="crowdfunding logo" />
      </div>
      <ul className="header__navbar_ul flex gap-6">
          <li><a href="#">About</a></li>
          <li><a href="#">Discover</a></li>
          <li><a href="#">Get Started</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
