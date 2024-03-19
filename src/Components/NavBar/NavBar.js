import React, { useEffect, useRef } from "react";
import "./NavBar.css";

function NavBar() {
  const navbarRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    const navbar = navbarRef.current;
    if (scrollPosition > 100) {
      navbar.classList.add("scroll");
    } else {
      navbar.classList.remove("scroll");
    }
  };
  return (
    <div className="navbar" ref={navbarRef}>
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <img
        className="avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Netflix Avatar"
      />
    </div>
  );
}

export default NavBar;
