import React, { Component } from 'react';
class Navbar extends Component {
    render() {
        return (
            <div className="menu">
                <button className="menu__button">
                    &#9776;
                    </button>
                <div className="menu__content">
                    <a className="menu__content__link" href="#About" rel="noopener noreferrer">
                        About
                    </a>
                    <a className="menu__content__link" href="#Projects" rel="noopener noreferrer">
                        Projects
                    </a>
                    <a className="menu__content__link" href="#Contact" rel="noopener noreferrer">
                        Contact
                    </a>
                </div>
            </div>);
    }
}

export default Navbar;