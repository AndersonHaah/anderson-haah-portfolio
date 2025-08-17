import React, { useEffect, useState } from "react";
import './AboutA.css'
import { Typewriter } from 'react-simple-typewriter'


export default props =>
    <div className="about" id="about">
        <div className="col-12 principal" data-aos="fade-right" data-aos-delay="300"
            data-aos-duration="1000">
            <aside className="about-text" data-aos="fade-right" data-aos-delay="300"
            data-aos-duration="1500">
                <h1 className="display-6 open-to-work" data-aos="fade-right" data-aos-delay="300"
            data-aos-duration="2000">#OpenToWork</h1>
                <h1 className="display-6" data-aos="fade-right" data-aos-delay="300"
            data-aos-duration="2000">Anderson Pereira 26</h1>
                <p
                data-aos="fade-right" data-aos-delay="300"
            data-aos-duration="2000">Olá! Eu sou um estudante apaixonado por desenvolvimento <strong>front-end</strong> e viciado em transformar código em <strong>interfaces bonitas e funcionais.</strong>
                    <br />
                    <br />
                    Tenho conhecimentos em <strong>HTML, CSS, JavaScript, React e Bootstrap</strong>, e também já me aventurei bastante com <strong>AJAX e JSON Server</strong> pra lidar com dados e simular APIs.
                    <br />
                    <br />
                    Desde os 9 anos sou fascinado pelo mundo da tecnologia, videogames e cultura geek, cresci entre controles, animes, HQs e curiosidade sobre como as coisas funcionam por trás das telas. Isso me levou naturalmente a mergulhar no universo da programação e nunca mais sair.
                    <br />
                    <br />
                    Gosto de desenvolver projetos que vão além do visual, com foco em <strong>responsividade, acessibilidade</strong> e <strong>boas práticas de código.</strong> Estou sempre estudando novas ferramentas e buscando maneiras de deixar meu código mais limpo, performático e organizado.
                    <br />
                    <br />
                    Atualmente, estou construindo meu portfólio com projetos próprios que refletem meu aprendizado, minha criatividade e a vontade real de crescer na área tech.</p>
            </aside>
            <aside data-aos="fade-right" data-aos-delay="300"
            data-aos-duration="2500">
                <div className="about-img">
                </div>
            </aside>
        </div>
    </div>