import "../style/navbar.css";

import { useState } from "react";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar-contenedor">
      <img
        src="https://picsum.photos/200/300"
        alt=""
        className={`navbar-logo ${menuOpen ? "navbar-links--open" : ""}`}
      />
      <nav className={`navbar-links ${menuOpen ? "navbar-links--open" : ""}`}>
        <a href="" className="link-Home">
          Home
        </a>
        <a href="" className="link-About us">
          About us
        </a>
        <a href="" className="link-Community">
          Community
        </a>
        <a href="" className="link-Projects">
          Projects
        </a>
      </nav>
      <div className="navbar-sesion">
        <button className="navbar-login">Log in</button>
        <a href="" className="navbar-signup">
          Sign up
        </a>
      </div>
      <button
        className={`navbar-hamburguesa ${
          menuOpen ? "navbar-hamburguesa--open" : ""
        }`}
        onClick={handleMenuClick}
      >
        {menuOpen ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="30"
              viewBox="0 0 24 24"
            >
              <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z" />
            </svg>
          </>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="30"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
            </svg>
          </>
        )}
      </button>
    </header>
  );
};
