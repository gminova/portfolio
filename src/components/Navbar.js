import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
class Navbar extends Component {
    state = {}
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() {
        return (
            <div className="menu">
                <button className="menu__button">&#9776;</button>
                <div className="menu__content">
                    <a className="menu__content__link" href="#">About</a>
                    <a className="menu__content__link" href="#">Projects</a>
                    <a className="menu__content__link" href="#">Contact</a>
                </div>
            </div>);
    }
}

export default Navbar;