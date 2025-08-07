import './NavA.css'
import react from 'react'
import Header from '../HeaderP/HeaderA'

export default props =>
    <div className="containerHeader">
        <aside className="menu-area">
            <nav className="menu">
                <a href="#/Principal">
                    Inicio
                </a>
                <a href="#/SobreMim">
                    Sobre Mim
                </a>
                <a href="#/Projetos">
                    Projetos
                </a>
                <a href="#/Contatos">
                    Contatos
                </a>
            </nav>
        </aside>
        <aside className="header">
            <Header />
        </aside>

    </div>