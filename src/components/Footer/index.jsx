import { Link } from "react-router-dom";
import { blog } from "../../dummydata";
import { Container } from "./styles";

export function Footer(){
    return(
        <Container>
            <footer>
                <div className='container padding'>
                    <div className='box logo'>
                        <h1>ESQUEMATIZA</h1>
                        <span>Psicologia</span>
                        <p>Terapia do Esquema: uma abordagem eficaz para tratamento de problemas emocionais</p>

                        <i className='fab fa-facebook-f icon'></i>
                        <i className='fab fa-whatsapp icon'></i>
                        <i className='fab fa-instagram icon'></i>
                    </div>
                    <div className='box link'>
                        <h3>Explorar</h3>
                        <div className="list">
                            <ul>
                                <li><Link to="/">Início</Link></li>
                                <li><Link to="/cursos">Cursos</Link></li>
                                <li><Link to="/supervisao">Supervisão</Link></li>
                            </ul>
                            <ul>
                                <li><Link to="/sobre">Sobre</Link></li>
                                <li><Link to="/terapeuras">Terapeutas</Link></li>
                                <li><Link to="/contato">Contato</Link></li>
                            </ul>
                        </div>
                    </div>
                    
                
                    <div className='box last'>
                        <h3>Alguma dúvida?</h3>
                        <ul>
                        <li>
                            <i className='fa fa-phone-alt'></i>
                            82 88888 8888
                        </li>
                        <li>
                            <i className='fa fa-paper-plane'></i>
                            contato@esquematizapsi.com
                        </li>
                        </ul>
                    </div>
                </div>
      </footer>
      <div className='legal'>
        <p>
        Copyright ©2023 Todos os direitos reservados | Desenvolvedor Mewerton Melo
        </p>
      </div>
        </Container>
    )

}