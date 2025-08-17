import './NavA.css'
import react from 'react'

export default props =>
    <div className="container-header">
            <aside className="logo-home">
                <h1>AH<span className="animation-logo">_</span>
                </h1>
            </aside>
        <aside className="menu-area">
            <nav className="menu">
                <a href="#home">
                    Inicio
                </a>
                <a href="#about">
                    Sobre Mim
                </a>
                <a href="#KnowledgeAndProjects">
                    Conhecimentos
                </a>
                <a href="#contact">
                    Contatos
                </a>
            </nav>
        </aside>
    </div>