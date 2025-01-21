import "./header.css"
import { Link } from "react-router-dom"

function Header (){
    return(
        <header>
            <img src="/img/Logo.png" alt="logo"/>
           
             <div className="botones-header">
                <button className="button-header"><Link to="/">HOME</Link></button>
                <button className="button-header"><Link to="/nuevo_video" >NUEVO VIDEO</Link></button>
            </div>
        </header>
    )
}

export default Header