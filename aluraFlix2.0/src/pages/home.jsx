import { useState } from "react";
import Banner from "../componente/baner/baner";
import Categoria from "../componente/categoria/categoria";



function Home({ dataCard, deleteVideo }) {
 

  const categorias = [
    {
      id: 1,
      tituloCategoria: "SOLISTA",
      colorPrimario: "#1111e4",
    },
    {
      id: 7,
      tituloCategoria: "GRUPO CHICAS",
      colorPrimario: "#2ed30d",
    },
    {
      id: 2,
      tituloCategoria: "BANDA CHICOS",
      colorPrimario: "#db5209",
    },
  ];

  return (
    <>
      <Banner/>
      {categorias.map((categoria) => {
        return (
          <Categoria
            deleteVideo={deleteVideo}
            datos={categoria}
            key={categoria.tituloCategoria}
            dataCards={dataCard.filter(
              (card) => card.categoria === categoria.tituloCategoria
            )}
          />
        );
      })}
    

      
    </>
  );
}

export default Home;