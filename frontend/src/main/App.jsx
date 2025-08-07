import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css'
import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'
import Header from '../components/template/HeaderP/HeaderA'
import Logo from '../components/template/LogoP/LogoA'
import Nav from '../components/template/NavP/NavA'
import Main from '../components/template/MainP/MainA'
import Footer from '../components/template/FooterP/FooterA'

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
                <Nav />
                <Main />
                <Footer />
            </div>
        </BrowserRouter>
    )
}