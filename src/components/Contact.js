import React, { Component } from 'react';
import data from '../model/data';

class Contact extends Component {
  render() {
    return (
      <div className="section" id="Contact">
        <span role="img" aria-label="dart-emoji">
          🎯
        </span>
        {data.social.map((link, i) => (
          <a
            className="contact__link"
            target="_blank"
            rel="noopener noreferrer"
            href={link.url}
            key={i}
          >
            {link.name}{' '}
          </a>
        ))}
        <a
          className="contact__link"
          href={data.CV.url}
          download="GerganaMinovaCV.pdf"
        >
          {data.CV.name}
        </a>
      </div>
    );
  }
}

export default Contact;
