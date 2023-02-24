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
                            subtitle={"Terapia do Esquema: uma abordagem eficaz para tratamento de problemas emocionais"}
                        />
                        <p>É importante que os psicólogos estejam familiarizados com essa abordagem para oferecer tratamentos personalizados e eficazes aos pacientes. Aprender sobre a terapia do esquema ajuda os profissionais a fornecer soluções mais efetivas para seus pacientes, promovendo uma vida mais saudável e feliz. </p>
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