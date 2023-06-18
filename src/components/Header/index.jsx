import { useState } from "react";
import { Link } from "react-router-dom";
import { Head } from "../Head";
import { Container } from "./styles";

export function Header(){

    const [click, setClick] = useState(false)

    return(
        <Container>
            <Head/>
            <header>
                <nav className="flexSB">
                    <ul className={click ? "mobile-nav" : "flexSB"} onClick={() => setClick(false)}>
                        <li><Link to="/">Início</Link></li>
                        <li><Link to="/cursos">Cursos</Link></li>
                        <li><Link to="/supervisao">Supervisão</Link></li>
                        <li><Link to="/sobre">Sobre</Link></li>
                        <li><Link to="/terapeuras">Terapeutas</Link></li>
                        <li><Link to="/psicoterapia">Psicoterapia</Link></li>
                    </ul>
                    <div className="start">
                        <div className="button">TERAPIA DO ESQUEMA</div>
                    </div>
                    <button className="toggle" onClick={() => setClick(!click)}>
                        {click ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
                    </button>
                </nav>
            </header>
        </Container>
    )

}