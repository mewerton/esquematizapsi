import { Link } from "react-router-dom";
import { Head } from "../Head";
import { Container } from "./styles";

export function Header(){
    return(
        <Container>
            <Head/>
            <header>
                <nav className="flexSB">
                    <ul>
                        <li><Link to="/">Início</Link></li>
                        <li><Link to="/cursos">Cursos</Link></li>
                        <li><Link to="/sobre">Sobre</Link></li>
                        <li><Link to="/instruturas">Instrutoras</Link></li>
                    </ul>
                </nav>
            </header>
        </Container>
    )

}