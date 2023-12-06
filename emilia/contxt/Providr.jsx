import React, { createContext, useContext, useState } from "react";
import gallardo from "../imagen/gallardo.jpg";
import lucas from "../imagen/Lucas.jpg"

export const MyContext = createContext();

  function ContextProvider ({ children }) {

  const [modalOn, setModalOn]= useState(false);
  const [newCardData, setNewCardData] = useState({
    title: "",
    content: "",
    img: ""
  });
  const [cardsData, setCardsData ] = useState([
    {
        id: 1,
        imageUrl:
            "https://www.clubtalleres.com.ar/wp-content/uploads/2021/01/jugadores-web_Herrera_22.png",
        title: "GUIDO GABRIEL HERRERA 22",
    },
    {
        id: 2,
        imageUrl:
            "https://www.clubtalleres.com.ar/wp-content/uploads/2023/02/jugadores-web_Martinez_12.png",
        title: "LAUREANO MARTINEZ 12",
    },
    {
        id: 3,
        imageUrl:
            "https://www.clubtalleres.com.ar/wp-content/uploads/2023/09/jugadores-web_barbi_33.png",
        title: "SANTINO BARBI 33",
    },
    {
        id: 4,
        imageUrl:
            "https://www.clubtalleres.com.ar/wp-content/uploads/2023/09/jugadores-web_Morales_23.png",
        title: "LAUTARO MORALES 23",
    },
    {
        id: 5,
        imageUrl:
            "https://www.clubtalleres.com.ar/wp-content/uploads/2023/02/jugadores-web_Suarez_03.png",
        title: "LUCAS SUAREZ 3",
    },
    {
        id: 6,
        imageUrl:
            "https://www.clubtalleres.com.ar/wp-content/uploads/2022/03/jugadores-web_Benavidez_29.png",
        title: "GASTON BENAVIDEZ 29",
    },
    {
        id: 7,
        imageUrl:
            "https://www.clubtalleres.com.ar/wp-content/uploads/2023/02/jugadores-web_Catalan_4.png",
        title: "MATIAS CATALAN 4",
        
    },
    {
        id: 8,
        imageUrl:
            "https://www.clubtalleres.com.ar/wp-content/uploads/2023/02/jugadores-web_Rodriguez_6.png",
        title: "JUAN GABRIEL RODRIGUEZ 6",
    },
    {
        id: 9,
        imageUrl:
            "https://www.clubtalleres.com.ar/wp-content/uploads/2023/09/jugadores-web_Bersano_27.png",
        title: "FERNANDO BERSANO 27",
    },
    
  ]);

  const handleDeleteCard = (id) => {
    // Filtrar las tarjetas para eliminar la que coincida con el ID
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
};

return (
<div>
    <Contexto.Provider >
        {children}
    </Contexto.Provider>



</div>
)
}

export default  ContextProvider