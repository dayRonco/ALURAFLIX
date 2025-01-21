import "./App.css";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./componente/header/header";
import Footer from "./componente/footer/footer";
import EditarVideo from "./componente/editarCards/edit";
import Home from "./pages/home";
import NuevoVideo from "./pages/nuevoVideo"

const cards = [
  {
    id: 1,
    categoria: "GRUPO CHICAS",
    titulo: "XG-WOKE UP",
    linkVideo: "https://youtu.be/5sT20edl02I?si=YBwEmIkcu2BfJyr7",
    urlImg:
      "https://i.ytimg.com/vi/5sT20edl02I/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCDO6l1dMve9mEs0K492jlc23br2Q",
  },
  {
    id: 2,
    categoria: "GRUPO CHICAS",
    titulo: "KISS OF LIFE- IGLOO",
    linkVideo: "https://youtu.be/dCBsFUnyXl0?si=WdAQs-pY8C5HIP4b",
    urlImg: "https://i.ytimg.com/vi/dCBsFUnyXl0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBC84hBUSruQddTBb5T_8kFg7eh1A",
  },
  {
    id: 3,
    categoria: "SOLISTA",
    titulo: "SUELGUI-28 REASONS",
    linkVideo: "https://youtu.be/G_BYjnopO6U?si=ctIfUJpX3zlomOll",
    urlImg:
      "https://i.ytimg.com/vi/G_BYjnopO6U/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBzwyI6L_zJf1eE5EhwlmuZIQXYdA",
  },
  {
    id: 4,
    categoria: "SOLISTA",
    titulo: "LIM-DANGEROUS",
    linkVideo: "https://youtu.be/NP7uIrj6mY4?si=s_7hbYRgOfLmuvQ9",
    urlImg:
      "https://i.ytimg.com/vi/NP7uIrj6mY4/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDgRuxEhydTg5w9RJDlNdjK8ayaaA",
  },
  {
    id: 5,
    categoria: "GRUPO CHICA",
    titulo: "BABYMONSTER-SHEES",
    linkVideo: "https://youtu.be/2wA_b6YHjqQ?si=T-XgyhT2xOKm8KZx",
    urlImg:
      "https://i.ytimg.com/vi/2wA_b6YHjqQ/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBIw-8p7BxvowDevitJD6MIPGEKBA",
  },
  {
    id: 6,
    categoria: "BANDA CHICOS",
    titulo: "STRAY KIDS-WALKIN ON WATER",
    linkVideo: "https://youtu.be/NP7uIrj6mY4?si=s_7hbYRgOfLmuvQhttps://youtu.be/ovHoY8UBIu8?si=BLkKLLikjulkdTOg",
    urlImg:
      "https://i.ytimg.com/vi/ovHoY8UBIu8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC7HH3V9D5YmOx1wcoC8w7bOmckQQ",
  },
  {
    id: 7,
    categoria: "BANDA CHICOS",
    titulo: "STRAY KIDS- CHK CHK B0OM",
    linkVideo: "https://youtu.be/0P0aQreFs8w?si=fudZyupYmsPeK24p",
    urlImg: "https://i.ytimg.com/vi/0P0aQreFs8w/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCIsQ_oj3w4R8AtLPXDSfLBol-NrQ",
  },
];

function App() {

  
  const [ dataCard, setDataCard] = useState(cards)
    
  const addVideo = (card) =>{
    setDataCard([...dataCard, card])
  }

  const deleteVideo = (id) => {
    const nuevaCard = dataCard.filter(
      (card) => card.id !== id
    );
    setDataCard(nuevaCard);
  };

  const updateVideo = (updatedVideo) => {
    const updatedCards = dataCard.map((card) => 
      card.id === updatedVideo.id ? updatedVideo : card
    );
    setDataCard(updatedCards);
  };

  
  return (
    <Router>
      <div className="contenedor-global">
        <Header />
        <Routes>
        <Route path="/" element={<Home dataCard={dataCard} deleteVideo={deleteVideo}  />} />
          <Route path="/nuevo_video" element={<NuevoVideo addVideo={addVideo}/>} />
        </Routes>
        <Footer />
     </div>
    </Router>
  );
}

export default App;