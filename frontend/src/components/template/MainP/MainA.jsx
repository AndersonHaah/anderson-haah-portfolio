import './MainA.css'
import react from 'react'
import AboutA from './AboutP/AboutA'
import HomeA from './HomeP/HomeA'
import KnowledgeA from './KnowledgeP/KnowledgeA'
import ContactA from './ContactP/ContactA'

export default props => 
    <div className="main">
        <HomeA />
        <AboutA />
        <KnowledgeA />
        <ContactA />
    </div>