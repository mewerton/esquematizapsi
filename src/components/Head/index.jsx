import { Container } from "./styles";

export function Head(){
    return(
        <Container>
            <section className="head">
                <div className="container flexSB">
                    <div className="logo">
                        <h1>ESQUEMATIZA</h1>
                        <span>Psicologia</span>
                    </div>
                    <div className="social">
                        <i className="fab fa-facebook icon"></i>
                        <i className="fab fa-instagram icon"></i>
                        <i className="fab fa-youtube icon"></i>
                    </div>
                </div>
            </section>

            
        </Container>
    )

}