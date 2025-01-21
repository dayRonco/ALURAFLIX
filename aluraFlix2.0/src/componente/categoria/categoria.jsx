import Cards from "../cards/card";
import "./categoria.css";

const Categoria = (props) => {
  const { colorPrimario, tituloCategoria } = props.datos;
  const { dataCards, deleteVideo,updateVideo } = props;

  const fondo = {
    backgroundColor: colorPrimario,
  };

  return (
    <section className="section-container">
      <h1 style={fondo} className="titulo-categoria">
        {tituloCategoria.toUpperCase()}
      </h1>
      <div className="categoria-container">
        {dataCards.map((card) => {
          return (
            <Cards
              dataCards={card}
              key={card.titulo}
              colorPrimario={colorPrimario}
              deleteVideo={deleteVideo}
              updateVideo={updateVideo}  
            />
          );
        })}
      </div>
    </section>
  );
};

export default Categoria;