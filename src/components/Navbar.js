import React, { Component } from 'react';
class Navbar extends Component {
  render() {
    return (
      <div className="menu">
        <button className="menu__button">&#9776;</button>
        <div className="menu__content">
          <a
            className="menu__content__link testid-about"
            href="#About"
            rel="noopener noreferrer"
          >
            About
          </a>
          <a
            className="menu__content__link testid-projects"
            href="#Projects"
            rel="noopener noreferrer"
          >
            Projects
          </a>
          <a
            className="menu__content__link testid-contact"
            href="#Contact"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
