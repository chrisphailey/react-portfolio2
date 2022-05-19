import React from "react";
import logo from "./Chris-Hailey.png";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

function Nav(props) {
  const { setNavSelection, navSelection } = props;
  return (
    <header className="flex-row px-1">
      <div className="flex-row logo-container flex justify-center">
        <img className="logo" src={logo} />
      </div>
      <div className="icons flex-row flex justify-center">
        <a href="https://www.linkedin.com/in/christopher-hailey-3040016a/">
          <BsLinkedin className="mr-4" size={28} />
        </a>
        <a href="https://github.com/chrisphailey">
          <FaGithub size={28} />
        </a>
      </div>
      <nav>
        <ul className="flex-row nav-container">
          <li className="mx-2">
            <a
              className="nav-links"
              href="#about"
              onClick={() => setNavSelection("about")}
            >
              About
            </a>
          </li>
          <li className="mx-2">
            <a
              className="nav-links"
              href="#projects"
              onClick={() => setNavSelection("projects")}
            >
              Projects
            </a>
          </li>
          <li className="mx-2">
            <a
              className="nav-links"
              href="#contact"
              onClick={() => setNavSelection("contact")}
            >
              Contact
            </a>
          </li>
          <li className="mx-2">
            <a
              className="nav-links"
              href="#resume"
              onClick={() => setNavSelection("resume")}
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
