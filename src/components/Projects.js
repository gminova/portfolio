import React, { Component } from 'react';
import data from '../model/data';

class Projects extends Component {
  render() {
    return (
      <div className="section section--projects" id="Projects">
        <div className="projects__gallery">
          {data.projects.map((project, i) => (
            <div className="project__card" key={i}>
              <a
                className="project__link"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="project__title">{project.title}</h3>
              </a>
              <p className="project__text">{project.text}</p>
              <a
                className="project__link"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="projects__gallery__img"
                  src={project.img}
                  alt="projects__gallery__img"
                ></img>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
