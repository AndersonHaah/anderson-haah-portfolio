// Recursos
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'

// Componentes 
import Routes from './Routes'
import Nav from '../components/template/NavP/NavA'
import Main from '../components/template/MainP/MainA'
import Footer from '../components/template/FooterP/FooterA'
import MouseAnimation from '../components/assets/animations/MouseAnimation'


export default function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);
    return (
        <BrowserRouter>
            <div className="app">
                <MouseAnimation />
                <Nav />
                <Main />
                <Footer />
            </div>
        </BrowserRouter>
    )
}