import { Container } from "./styles";
import CapaImg from "../../assets/capa.png"

export function Hero(){
    return(
        <Container>
            <section className="hero">
               
                <img src={CapaImg} alt="" />
                <div className="container">
                    <div className="row">
                        <p>A terapia do esquema é uma abordagem eficaz para tratar problemas emocionais profundos e duradouros. É importante que os psicólogos estejam familiarizados com essa abordagem para oferecer tratamentos personalizados e eficazes aos pacientes. Aprender sobre a terapia do esquema ajuda os profissionais a fornecer soluções mais efetivas para seus pacientes, promovendo uma vida mais saudável e feliz. </p>
                        <div className="button">
                            <button className="primary-btn">
                                TERAPEUTAS <i className=" fa fa-long-arrow-alt-right"></i>
                            </button>
                            <button >
                                VER CURSOS <i className=" fa fa-long-arrow-alt-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <div className="margin"></div>
        </Container>
    )

}