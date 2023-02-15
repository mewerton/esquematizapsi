import { useState } from "react";
import { Link } from "react-router-dom";
import { Head } from "../Head";
import { Container } from "./styles";

export function HeaderB(){

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
                        <li><Link to="/contato">Contato</Link></li>
                    </ul>
                    <div className="start">
                        <div className="button">ÁREA ALUNO</div>
                    </div>
                    <button className="toggle" onClick={() => setClick(!click)}>
                        {click ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
                    </button>
                </nav>
            </header>
        </Container>
    )

}