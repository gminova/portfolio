import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="section" id="About">
                <img className="profile" src="https://i.imgur.com/wbshJ54.jpg" alt="profile"></img>
                <h1>
                    Gergana Minova
                </h1>
                <p>
                    Full-Stack JavaScript Developer
                </p>
                <a className="arrow__link" href="#Projects">
                    <p className="arrow">
                        &#x2193;
                        </p>
                </a>
            </div>);
    }
}


export default About;