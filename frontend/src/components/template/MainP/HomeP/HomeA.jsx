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
                    words={[
                        'Criando experiências digitais que conectam pessoas e ideias.',
                        'Transformando curiosidade em soluções digitais.',
                        'Interfaces bonitas, código limpo, performance afiada.',
                        'Código, design e paixão, tudo em uma só linha de front-end.'
                    ]}
                    cursor
                    cursorStyle='_'
                    deleteSpeed={40}
                    typeSpeed={150}
                    delaySpeed={2000}
                />
            )}
        </h1>
    );
}


export default props =>
    <div className="home" id="home">
        <h1 className="display-1 welcome-animation welcome-welcome"
            data-aos="fade"
            data-aos-delay="300"
            data-aos-duration="3000">
            {"<Hello World/>"}
        </h1>
        <aside className="welcome-text">
            <MeuComponente />
        </aside>
    </div>