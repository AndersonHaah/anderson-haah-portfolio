import React from 'react';
import Card from './Card';
import './CardContainer.css';
import ProjectsImgs from '../../../../assets/imgs/projectsIMG/ProjectsImgs';

export default function CardContainer() {
  const cards = [
    {
      title: 'Portfolio',
      description: 'Portfólio de desenvolvedor front-end que demonstra minhas habilidades em criar interfaces de usuário modernas e interativas. A aplicação, desenvolvida com React, utiliza Framer Motion para gerenciar transições e animações fluidas entre as seções de "Conhecimentos" e "Projetos". A seção de conhecimentos, em particular, apresenta cards interativos que exibem descrições detalhadas ao passar o mouse.',
      image: ProjectsImgs.PI1
    },
    {
      title: 'AH Store',
      description: (
        <p>
          Uma plataforma de e-commerce moderna e responsiva, desenvolvida em React para demonstrar habilidades em Front-end. O projeto inclui uma interface de usuário otimizada, carrinho de compras interativo, navegação dinâmica com React Router DOM e animações fluidas com Framer Motion.
          <br />
          <a href="https://andersonhaah.github.io/projeto-loja-online" target='_blank'>Acesse-o aqui</a>
        </p>
      ),
      image: ProjectsImgs.PI2
    },
    {
      title: 'Em construção',
      description: 'Aguardem um pouco',
      image: ProjectsImgs.PI3
    },
    {
      title: 'Em construção',
      description: 'Aguardem um pouco',
      image: ProjectsImgs.EmConstrucao
    }
  ];

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </div>
  );
}

