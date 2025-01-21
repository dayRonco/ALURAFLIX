/* eslint-disable react/prop-types */
import { useState } from "react";

import "./formulario.css";
import Campo from "../campotexto/campo";
import ListaOpciones from "../listaopciones/listaopciones";
import Textarea from "../textarea/textarea";

const Formulario = (props) => {
  const [titulo, setTitulo] = useState("");
  const [linkVideo, setLinkVideo] = useState("");
  const [urlImg, setUrlImg] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] =useState("")
  const [errors, setErrors] = useState({});

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  const validate = () => {
    let errors = {};
    if (!titulo) {
      errors.titulo = "El título es obligatorio";
    }
    if (!linkVideo) {
      errors.linkVideo = "El URL del video es obligatorio";
    } else if (!/^https?:\/\/.+\..+/.test(linkVideo)) {
      errors.linkVideo = "El URL del video no es válido";
    }
    if (!urlImg) {
      errors.urlImg = "El URL de la imagen es obligatorio";
    } else if (!/^https?:\/\/.+\..+/.test(urlImg)) {
      errors.urlImg = "El URL de la imagen no es válido";
    }
    if (!categoria) {
      errors.categoria = "la categoria es obligatoria";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    console.log("manejo del envio");
    let datosAEnviar = {
      titulo,
      linkVideo,
      urlImg,
      categoria,
      descripcion: descripcion,
      id: getRandomInt(1, 500),
    };
    props.addVideo(datosAEnviar);

    setTitulo("");
    setLinkVideo("");
    setUrlImg("");
    setCategoria("");
    setDescripcion("");

    alert("Tu video ha sido creado con éxito");
  };

  return (
    <>
      <section className="form-section">
        <h1 className="titulo-form">NUEVO VIDEO</h1>
        <h2 className="subtitulo-form">
          COMPLETA EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO
        </h2>
      </section>
      <div>
        <h1 className="titulo-crear">CREAR TARJETA</h1>
      </div>
      <form onSubmit={manejarEnvio}>
        <div className="campo-section">
          <Campo
            titulo="Título"
            placeholder="Ingrese el título de la película"
            required
            valor={titulo}
            setValor={setTitulo}
            error={errors.titulo}
          />
          <ListaOpciones
            required
            valor={categoria}
            setCategoria={setCategoria}
            error={errors.categoria}
          />
          <Campo
            titulo="URL del video"
            placeholder="Ingrese el URL del video/trailer de la película"
            required
            valor={linkVideo}
            setValor={setLinkVideo}
            error={errors.linkVideo}
          />
          <Campo
            titulo="Imagen"
            placeholder="Ingrese el URL de la imagen"
            required
            valor={urlImg}
            setValor={setUrlImg}
            error={errors.urlImg}
          />
          <Textarea
            titulo="Descripcion"
            placeholder="de que se trata este video"
            valor={descripcion.descripcion}
            setValor={setDescripcion}
            

          />
        </div>
        <button className="button-form-save">GUARDAR</button>
      </form>
    </>
  );
};

export default Formulario;