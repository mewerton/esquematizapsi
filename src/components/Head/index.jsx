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
                        <a href="https://www.instagram.com/esquematizapsi/" target="_blank">
                            <i className="fab fa-instagram icon"></i>      
                        </a>
                        {/* <a href="https://www.facebook.com/profile.php?id=100076392125825">
                            <i className="fab fa-whatsapp icon"></i>
                        </a> */}
                    </div>
                </div>
            </section>

            
        </Container>
    )

}