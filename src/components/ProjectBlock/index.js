import React from 'react';
import './style.css';
import Data from '../../assets/projects.json';

const ProjectBlock = () => {

  return (
    <div className='main-project-block'>
      {Data.projects.map( (project) => (
        <div className='project-tile'>
          <h2>THIS IS AN IMAGE</h2>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  )
}

export default ProjectBlock;