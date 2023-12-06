import React, { useContext, useState } from 'react';
import Card from './Card';
import { ContextProvider} from '../context/Provider';

export default function Cards() {
  const { cardsData, BorrarCard } = useContext(ContextProvider);

  return (
    <div> 
      <h1 className="titulo">Album de emilia mamii</h1>
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