import React from 'react';
import './style.css';
import Data from '../../assets/projects.json';

const ProjectBlock = () => {
  return (
    <div className='main-project-block'>
      {Data.projects.map( (project) => (
        <div className='project-tile'>
          <img src={project.image} alt='Project GIF'></img>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      ))}
    </div>
  )
}

export default ProjectBlock;