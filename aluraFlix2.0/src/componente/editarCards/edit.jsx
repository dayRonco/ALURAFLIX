import { useState } from "react";
import Campo from "../campotexto/campo";
import ListaOpciones from "../listaopciones/listaopciones";
import "./edit.css"

const EditarVideo = (props) => {
  const { id, titulo, linkVideo, urlImg, categoria } = props.video;
  const { video, updateVideo} = props

  const [newTitulo, setNewTitulo] = useState(titulo);
  const [newLinkVideo, setNewLinkVideo] = useState(linkVideo);
  const [newUrlImg, setNewUrlImg] = useState(urlImg);
  const [newCategoria, setNewCategoria] = useState(categoria);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};
    if (!newTitulo) {
      errors.titulo = "El título es obligatorio";
    }
    if (!newLinkVideo) {
      errors.linkVideo = "El URL del video es obligatorio";
    } else if (!/^https?:\/\/.+\..+/.test(newLinkVideo)) {
      errors.linkVideo = "El URL del video no es válido";
    }
    if (!newUrlImg) {
      errors.urlImg = "El URL de la imagen es obligatorio";
    } else if (!/^https?:\/\/.+\..+/.test(newUrlImg)) {
      errors.urlImg = "El URL de la imagen no es válido";
    }
    if (!newCategoria) {
      errors.categoria = "El género es obligatorio";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    const updatedVideo = {
      id,
      titulo: newTitulo,
      linkVideo: newLinkVideo,
      urlImg: newUrlImg,
      categoria: newCategoria,
    };

    updateVideo(updatedVideo); // Actualizamos el video
  };

  return (
    <form onSubmit={manejarEnvio}>
       <div className="campo-sectionedit">
      <Campo
        titulo="Título"
        placeholder="Ingrese el título de la película"
        required
        valor={newTitulo}
        setValor={setNewTitulo}
        error={errors.titulo}
      />
      <ListaOpciones
        required
        valor={newCategoria}
        setCategoria={setNewCategoria}
        error={errors.categoria}
      />
      <Campo
        titulo="URL del video"
        placeholder="Ingrese el URL del video/trailer de la película"
        required
        valor={newLinkVideo}
        setValor={setNewLinkVideo}
        error={errors.linkVideo}
      />
      <Campo
        titulo="Imagen"
        placeholder="Ingrese el URL de la imagen"
        required
        valor={newUrlImg}
        setValor={setNewUrlImg}
        error={errors.urlImg}
      />
      </div>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default EditarVideo;
