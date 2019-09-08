import React, { Component } from 'react';
import data from '../model/data';

class Projects extends Component {
    render() {
        return (
            <div className="section section--projects" id="Projects">
                <div className="projects__gallery">

                    {data.projects.map((project, i)=>(
                        <a className="project__link" href={project.link} target="_blank" rel="noopener noreferrer" key={i}> 
                        <p className="project__title">{project.title}</p>
                        <img className="projects__gallery__img" src={project.img} alt="projects__gallery__img" key={i}></img>
                        </a>
                    ))}
                </div>
            </div>);
    }
}

export default Projects;