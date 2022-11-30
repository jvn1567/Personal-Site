import React from 'react';
import './style.css';
import ProjectBlock from '../../components/ProjectBlock/index.js';

const Home = () => {
  return (
    <div>
      <div className='title-block'>
        <h1>John Nguyen</h1>
        <h1>Software Developer</h1>
      </div>
      <div className='link-block'>
        <a href='mailto: jvn1567@gmail.com' target="_blank" rel="noopener noreferrer">Email</a>
        <a href='https://www.linkedin.com/in/jvn1567/' target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href='https://github.com/jvn1567' target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Resume</a>
      </div>
      <div className='project-block'>
        <ProjectBlock />
      </div>
    </div>
  )
}

export default Home;