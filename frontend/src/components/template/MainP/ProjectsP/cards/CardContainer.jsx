import React from 'react';
import Card from './Card';
import './CardContainer.css';
import ProjectsImgs from '../../../../assets/imgs/projectsIMG/ProjectsImgs';

export default function CardContainer() {
  const cards = [
    { title: 'Portfolio', description: 'Portfólio de desenvolvedor front-end que demonstra minhas habilidades em criar interfaces de usuário modernas e interativas. A aplicação, desenvolvida com React, utiliza Framer Motion para gerenciar transições e animações fluidas entre as seções de "Conhecimentos" e "Projetos". A seção de conhecimentos, em particular, apresenta cards interativos que exibem descrições detalhadas ao passar o mouse.', image: ProjectsImgs.PI1 },
    { title: 'Projeto 2', description: 'Descrição do projeto 2', image: '/path/to/img2.jpg' },
    { title: 'Projeto 3', description: 'Descrição do projeto 3', image: '/path/to/img3.jpg' },
    { title: 'Projeto 4', description: 'Descrição do projeto 4', image: '/path/to/img4.jpg' }
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

