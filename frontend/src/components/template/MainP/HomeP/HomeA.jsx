import React, { useEffect, useState } from "react";
import { Typewriter } from 'react-simple-typewriter'
import './HomeA.css'

function MeuComponente() {
    const [iniciarTypewriter, setIniciarTypewriter] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIniciarTypewriter(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <h1 className="display-2 width-text">
            {iniciarTypewriter && (
                <Typewriter
                    words={['Código, design e paixão tudo em uma só linha de front-end.']}
                    cursor
                    cursorStyle='_'
                    typeSpeed={150}
                />
            )}
        </h1>
    );
}


export default props =>
    <div className="home">
        <h1 className="display-1 welcome-animation welcome-welcome" data-aos="fade" data-aos-delay="300"
            data-aos-duration="3000">Bem-Vindo</h1>
        <aside className="welcome-text">
            <MeuComponente />
        </aside>
        <aside className="logo-home">
            <h1>AH<span className="animation-logo">_</span>
            </h1>
        </aside>
    </div>