import { useState } from "react";
import "./textarea.css"

const Textarea = (props) => {

    const [valor, setDescripcion] = useState('');

    const manejarCambio = (e) => {
        setDescripcion(e.target.value)
    }

    return <div className="descripcion">
        <label>{props.titulo}</label>
        <textarea
            placeholder={props.placeholder}
            value={valor}
            onChange={manejarCambio}
        />

    </div>

}

export default Textarea;