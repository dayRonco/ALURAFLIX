import Formulario from "../componente/formulario/formulario"

function NuevoVideo (props) {
    return(
        <>
        <Formulario addVideo={props.addVideo} />
        </>
    )
}

export default NuevoVideo