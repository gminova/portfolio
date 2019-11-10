import React, { Component } from 'react';
import data from '../model/data';

class About extends Component {
  render() {
    return (
      <div className="section" id="About">
        <img className="profile" src={data.profileImgSrc} alt="profile"></img>
        <h1 className="about__header">{data.name}</h1>
        {data.aboutText.map((text, i) => (
          <p className="about__text" key={i}>
            {text}
          </p>
        ))}
        <div className="about__grid">
          {data.aboutGrid.map((img, i) => (
            <img className="logo" alt="logo" src={img} key={i}></img>
          ))}
        </div>
        <a className="arrow__link" href="#Projects">
          <p className="arrow">&#x2193;</p>
        </a>
      </div>
    );
  }
}

export default About;
