// Recursos
import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { motion, AnimatePresence } from 'framer-motion';
// Componentes
import './ContactA.css'
import ContactWhatsapp from '../../../assets/contact/ContactWhats'
import ContactEmail from '../../../assets/contact/ContactEmail'


export default props =>
  <div className="contact"
    id='contact'
    data-aos="fade-right"
    data-aos-delay="300"
    data-aos-duration="3000"
  >
    <h1 className="display-1 language-c">
      <Typewriter
        words={['Entre em contato']}
        cursor
        cursorStyle='_'
        typeSpeed={150}
      />
    </h1>
    <section className="contact-section">
      <p>Estou aberto a novas oportunidades, parcerias e projetos. Vamos conversar!</p>

      <div className="contact-info">
        <p>
          <strong>Email:</strong>{' '}
          <ContactEmail />
        </p>
        <p>
          <strong>Whatsapp:</strong>{' '}
          <ContactWhatsapp />
        </p>
        <p>
          <strong>Redes sociais:</strong>{' '}
          <a href="https://linkedin.com/in/anderson-pereira-83a797215/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>{' | '}
          <a href="https://github.com/andersonhaah" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>{' | '}
          <a href="https://www.instagram.com/anderson.haah/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </p>
      </div>
    </section>
  </div>
