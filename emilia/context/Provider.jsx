import React, { createContext, useContext, useState } from "react";

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
            "https://th.bing.com/th/id/OIP.SLfbbKaE88Q7NqSdsASwRAHaD4?rs=1&pid=ImgDetMain",
        title: "FACTS.MP3  EMILIA",
    },
    {
        id: 2,
        imageUrl:
            "https://images.genius.com/dde8f6e0336a3845a5d3eb8028efddd7.1000x1000x1.jpg",
        title: "JAGGER.MP3  EMILIA",
    },
    {
        id: 3,
        imageUrl:
            "https://th.bing.com/th/id/OIP.UN6vM8vUy0TU77R5hMJyEgHaHX?rs=1&pid=ImgDetMain",
        title: "ICONIC.MP3 EMILIA",
    },
    {
        id: 4,
        imageUrl:
            "https://th.bing.com/th/id/OIP.9ybuz1HAZcySmLiLd6YXwQHaEk?rs=1&pid=ImgDetMain",
        title: "LA_ORIGINAL.MP3 EMILIA",
    },
    {
        id: 5,
        imageUrl:
            "https://inforbano.com.ar/wp-content/uploads/2023/06/Emilia-0.jpg",
        title: "GTA.MP3 EMILIA",
    },
    {
        id: 6,
        imageUrl:
            "https://th.bing.com/th/id/OIP.0Nm_23mmsCS-n3hzgD-fswHaEK?rs=1&pid=ImgDetMain",
        title: "EXCLUSIVE.MP3 EMILIA",
    },
    {
        id: 7,
        imageUrl:
            "https://th.bing.com/th/id/OIP.9ih8EPAGwO8t2txntBZoJAHaHa?rs=1&pid=ImgDetMain",
        title: "NO_SE_VE.MP3 EMILIA",
        
    },
    {
        id: 8,
        imageUrl:
            "https://akamai.sscdn.co/uploadfile/letras/fotos/8/8/a/3/88a34a347fea9c2c7279a51c5e8496a4.jpg",
        title: "OJITOS_VERDES.MP3 EMILIA",
    },
    {
        id: 9,
        imageUrl:
            "https://th.bing.com/th/id/OIP.ZL7_SMdMb4Gds49IZk_ILwAAAA?rs=1&pid=ImgDetMain",
        title: "GUERRERO.MP3 EMILIA",
    },

  ]);

  const [busqueda, setBusqueda] = useState("");

  return (<>
      <Contexto.Provider value={{ jugadores, setJugadores, busqueda, setBusqueda }}>
          {children}
      </Contexto.Provider>
      </>)
}