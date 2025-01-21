/* eslint-disable react/prop-types */
import "./listaopciones.css";

const ListaOpciones = (props) => {
  const categorias = [
    "SOLISTA",
    "GRUPO CHICAS",
    "BANDA CHICOS"
  ];

  const manejarCambio = (e) => {
    props.setCategoria(e.target.value)
  
  }

  return (
    <div className="lista-container">
      <label className="titulo-lista" >Categoria*</label>
      <select className="lista-opciones" value={props.valor} onChange={manejarCambio} required={props.required} >
      <option value="" disabled defaultValue="" hidden>Seleccionar genero de pelicula</option>
        { categorias.map((categoria, index) =>{
            return (<option key={index} value={categoria}>{categoria}</option>)
        })}
          );
      </select>
    </div>
  );
};

export default ListaOpciones;
