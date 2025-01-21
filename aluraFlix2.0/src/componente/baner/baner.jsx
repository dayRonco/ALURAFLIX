import "./baner.css";

function Banner() {
  return (
    <>
      <div className="contenedor-banner">
      <div className="capa">

                <div className="video-banner">
                    <div className="contenerdor-bescripcion">
                        <h1 className="genero-destacado">SOLISTA</h1>
                        <h2 className="titulo-destacado"> Challenge React </h2>
                        <p className="descripcion-destacado">Curso donde todos los conocimientos adquiridos en el curso de Alura React</p>
                        <p className="descripcion-destacado">  se ponene en juego y asi demostrar lo aprendido.</p>
                        <p className="descripcion-destacado"> Con el destaque personal de tematica Kpop</p>
                    </div>
                    <iframe width="660" 
                    height="415" 
                    src="https://www.youtube.com/embed/8KpvPHcXr1c?si=eSf6F5jZzHvxTLgC" 
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen></iframe>
                </div>

            </div>
      </div>
    </>
  );
}

export default Banner;