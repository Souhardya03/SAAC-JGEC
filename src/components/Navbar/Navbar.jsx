import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";
// import { Logo } from "../../assets/Assets";
import HeaderData from "./HeaderData";
import "./Navbar.css";

const Navbar = () => {
  const [isActive, setisActive] = useState(false);
  const [isScroll, setisScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setisScroll(window.scrollY > 100);
    });
  }, []);

  return (
    <>
      <header className={isScroll ? "scrolled" : ""}>
        <nav className="navbar">
          <a className="navbar-brand" href="https://saac.tech/">
            <img src="./svg/logo_bg.svg" alt="Saac Logo" />
          </a>

          <button
            className={isActive ? "menu_btn active" : "menu_btn"}
            onClick={() => {
              setisActive(!isActive);
            }}
          >
            <span className="menu_icon"></span>
          </button>

          <div className={isActive ? "desktop_nav active" : "desktop_nav"}>
            {HeaderData.map((val, ind) => {
              return (
                <NavLink
                  key={ind}
                  to={val.to}
                  exact
                  activeClassName="active"
                  className="nav_link"
                  onClick={() => {
                    setisActive(!isActive);
                  }}
                >
                  {val.value}
                </NavLink>
              );
            })}
            <button
              className="btn logIn"
              id="mlogIn"
              onClick={() => {
                setisActive(!isActive);
              }}
            >
              <BiLogIn />
              <span>Logout</span>
            </button>
          </div>

          <button
            className="btn logIn"
            id="dlogIn"
          >
            <BiLogIn />
            <span>Logout</span>
          </button>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
