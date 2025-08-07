import './MainA.css'
import react from 'react'
import AboutA from './AboutP/AboutA'
import ContactA from './ContactP/ContactA'
import HomeA from './HomeP/HomeA'
import ProjectsA from './ProjectsP/ProjectsA'

export default props => 
    <div className="main">
        <HomeA />
        <AboutA />
        <ProjectsA />
        <ContactA />
    </div>