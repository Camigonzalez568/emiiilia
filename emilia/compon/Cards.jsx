import React, { useContext, useState } from 'react';
import Card from './Card';
import { ContextProvider} from '../context/Provider';

export default function Cards() {
  const { cardsData, BorrarCard } = useContext(ContextProvider);

  return (
    <div> 
      <h1 className="titulo">Once titular de la final de la Libertadores de 2018</h1>
      <div className="card-container">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            content={card.content}
            img={card.img}
            id={card.id}
            EliminarCard={BorrarCard}
          
          />
        ))}
      </div>
    </div>
  );
}