import React from 'react';
import Card from './Card';
import './CardContainer.css';
import ProjectsImgs from '../../../../assets/imgs/projectsIMG/ProjectsImgs';

export default function CardContainer() {
  const cards = [
    { title: 'Projeto 1', description: 'Descrição do projeto 1', image: ProjectsImgs.PI1 },
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

