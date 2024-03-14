import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div>
          <div className="logo">
            {/* Replace 'logo.svg' with your actual logo */}
            <ScrollLink to="home" smooth={true} duration={500}>
              <h6>Safwan.</h6>
            </ScrollLink>
          </div>
          <div className="thanks-text">
            <p>Thanks for stopping by ッ</p>
          </div>
        </div>
        <div className="all-links">
          <div className="links">
            <h2 className="heading">Links</h2>
            <ul>
              <li>
                <ScrollLink to="home" smooth={true} duration={500}>
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="about" smooth={true} duration={500}>
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="selected-work" smooth={true} duration={500}>
                  Work
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="tech-stack" smooth={true} duration={500}>
                  Tech Stack
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="contact" smooth={true} duration={500}>
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>
          <div className="external-links">
            <h2 className="heading">Elsewhere</h2>
            <ul>
              {/* Add your actual links */}
              <li>
                <a href="mailto:msafwan@sabanciuniv.edu">Mail</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/safwanyasin">LinkedIn</a>
              </li>
              <li>
                <a href="https://www.github.com/safwanyasin">GitHub</a>
              </li>
              <li>
                <a href="https://discord.com/users/733394310715801730">
                  Discord
                </a>
              </li>
              <li>
                <a href="https://www.behance.net/safwanyasin">Behance</a>
              </li>
              <li>
                <a href="https://www.upwork.com/freelancers/~010406e4270587a14a">
                  Upwork
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Safwan</p>
      </div>
    </footer>
  );
};

export default Footer;
