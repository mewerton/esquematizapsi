import { Footer } from "../../components/Footer";
import { HeaderB } from "../../components/HeaderB";
import { Title } from "../../components/Title";
import { Container } from "./styles";

export function Contato(){
    return(
        <Container>
            <HeaderB/>
            <Title title={"CONTATO"}/>
            <section className="contacts padding">
                <div className="container shadow ">

                    <div className="right row">
                        <h1>Entre em contato com nossas terapeutas</h1>
                          

                        <div className='items  '>
                            
                        
                        <div className='box'>
                            <div className="contact">
                                <p> Jéssica</p>
                                <div className="social">
                                <i className="fab fa-whatsapp icon"></i>
                                <i className="fab fa-instagram icon"></i> 
                                </div>
                            </div>
                            <div className="contact">
                                <p> Luanna</p>
                                <div className="social">
                                <i className="fab fa-whatsapp icon"></i>
                                <i className="fab fa-instagram icon"></i> 
                                </div>
                            </div>
                            <div className="contact">
                                <p> Thássia</p>
                                <div className="social">
                                <i className="fab fa-whatsapp icon"></i>
                                <i className="fab fa-instagram icon"></i> 
                                </div>
                            </div> 
                        </div>
                        </div>
                        <div className="text-title">
                            <label>Ou entre em contato enviando mensagem abaixo:</label>
                        </div>
                        <form action=''>
                            <div className='flexSB'>
                                <input type='text' placeholder='Nome' />
                                <input type='email' placeholder='E-mail' />
                            </div>
                            <input type='text' placeholder='Assunto' />
                            <textarea cols='30' rows='10' placeholder='Escreva sua mensagem...' >
                               
                            </textarea>
                            <button className='primary-btn'>ENVIAR</button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer/>
        </Container>
    )

}