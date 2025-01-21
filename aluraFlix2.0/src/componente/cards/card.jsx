/* eslint-disable react/prop-types */
import { useState } from "react";
import Modalform from "../modal/modal";
import "./card.css";

const Cards = (props) => {
  const { titulo, linkVideo, urlImg, id } = props.dataCards;
  const { colorPrimario, deleteVideo, updateVideo, dataCards } = props;

  const [showFormu, setShowForm] = useState(false);

  const handleEdit = () => {
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
  };

  const colorBorde = {
    borderColor: colorPrimario,
    boxShadow: `inset 0em 0em 10px 1px ${colorPrimario}`,
  };

  return (
    <>
      <section className="cards" style={colorBorde}>
        <div className="img-container">
          <a href={linkVideo} target="_blank" rel="noreferrer">
            <img className="img" src={urlImg} style={colorBorde} alt="video thumbnail"></img>
          </a>
        </div>
        <h2 className="titulo-card">{titulo.toUpperCase()}</h2>
        <div className="button-cards">
          <button className="button" onClick={() => deleteVideo(id)}>
            <img
              className="delete-icon"
              src="/img/deleteIcon.png"
              alt="delete"
            />
            BORRAR
          </button>
          <button onClick={handleEdit} className="button">
            <img
              className="edit-icon"
              src="/img/editIcon.png"
              alt="edit"
            />
            EDITAR
          </button>
        </div>
      </section>

      {/* Modal para editar el video */}
      {showFormu && (
        <Modalform
          show={showFormu}
          onHide={handleClose}
          video={dataCards} // Pasar el video actual como propiedad
          updateVideo={updateVideo} // Pasar la función para actualizar el video
        />
      )}
    </>
  );
};

export default Cards;
