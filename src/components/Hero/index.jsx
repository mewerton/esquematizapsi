import { Container } from "./styles";
import CapaImg from "../../assets/capa.jpg"
import { Title } from "../Title";
import { Link } from "react-router-dom";

export function Hero(){
    return(
        <Container>
            <section className="hero">
               
                <img src={CapaImg} alt="" />
                <div className="container">
                    <div className="row">
                        <Title 
                            subtitle={"Esquematiza Psicologia: Desenvolvendo a terapia do esquema e fortalecendo terapeutas"}
                        />
                        <p>"Esquematiza Psicologia" é um exemplo de como a paixão e a amizade podem ser combinadas para criar algo realmente transformador. Nosso projeto não apenas ensina a Terapia do Esquema, mas também inspira outros a seguirem seus sonhos e a se unirem em causas que acreditam. Bem-vindos ao nosso site! </p>
                        <div className="button">
                            <Link to="/supervisao">
                                <button className="primary-btn">
                                    SUPERVISÃO <i className=" fa fa-long-arrow-alt-right"></i>
                                </button>
                            </Link>
                            <Link to="/cursos">
                                <button>
                                    CURSOS <i className=" fa fa-long-arrow-alt-right"></i>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <div className="padding"></div>
        </Container>
    )

}