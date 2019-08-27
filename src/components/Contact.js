import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="section" id="Contact">
                <a className="contact__link" href="https://linkedin.com/in/gminova" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                            </a>
                <a className="contact__link" href="https://github.com/gminova" target="_blank" rel="noopener noreferrer">
                    GitHub
                            </a>
                <a className="contact__link" href="../assets/Gergana MinovaCV.pdf" download="GerganaMinovaCV">Download CV.pdf</a>
            </div>);
    }
}

export default Contact;