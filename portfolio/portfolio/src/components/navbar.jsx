import { NavLink } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Mahi Gupta</h2>

      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/skills">Skills</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/resume">Resume</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>

      <div className="socials">
        <a href="https://github.com/" target="_blank"><Github size={18} /></a>
        <a href="https://www.linkedin.com/in/mahi-gupta0305/" target="_blank">
          <Linkedin size={18} />
        </a>
      </div>
    </nav>
  );
}