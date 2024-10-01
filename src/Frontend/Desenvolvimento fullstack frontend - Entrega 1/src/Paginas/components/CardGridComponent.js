import React from 'react';
import './CardGridComponent.css'; 

function CardGridComponent() {
  
  const cards = [
    { title: 'Histórias de impacto', text: 'Textinho sobre' },
    { title: 'Onde trabalhamos', text: 'Textinho sobre' },
    { title: 'Desastres explicados', text: 'Textinho sobre' },
    { title: 'Clube do livro', text: 'Textinho sobre' },
    { title: 'Deixe um presente', text: 'Textinho sobre' },
    { title: 'Faça parte do time', text: 'Textinho sobre' },
  ];

  return (
    <div className="card-grid">
      <div className="section-title">
        <h2>Entenda sobre</h2>
      </div>
      <div className="card-row">
        {cards.slice(0, 3).map((card, index) => (
          <div className="card" key={index}>
            <div className="card-image">
              <img src="link-da-imagem" alt="Ícone" />
            </div>
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <button className="saiba-mais-btn">SAIBA MAIS</button>
            </div>
          </div>
        ))}
      </div>

      <div className="section-title">
        <h2>Formas de se envolver</h2>
      </div>
      <div className="card-row">
        {cards.slice(3).map((card, index) => (
          <div className="card" key={index}>
            <div className="card-image">
              <img src="link-da-imagem" alt="Ícone" />
            </div>
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <button className="saiba-mais-btn">SAIBA MAIS</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardGridComponent;
