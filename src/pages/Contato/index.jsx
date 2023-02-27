import { Footer } from "../../components/Footer";
import { HeaderB } from "../../components/HeaderB";
import { Title } from "../../components/Title";
import { Container } from "./styles";

import { motion } from "framer-motion"

export function Contato(){
    return(
        <Container>
        <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}  
            exit={{ opacity:0 }}             
            >
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
                                    <a href="https://api.whatsapp.com/send?phone=5582981037210" target="_blank"><i className="fab fa-whatsapp icon"></i></a>
                                    <a href="https://www.instagram.com/jessica_psi/" target="_blank"><i className="fab fa-instagram icon"></i></a> 
                                </div>
                            </div>
                            <div className="contact">
                                <p> Luanna</p>
                                <div className="social">
                                    <a href="https://api.whatsapp.com/send?phone=558299102-0454" target="_blank"><i className="fab fa-whatsapp icon"></i></a>
                                    <a href="https://www.instagram.com/luannaavilapsi/" target="_blank"><i className="fab fa-instagram icon"></i></a> 
                                </div>
                            </div>
                            <div className="contact">
                                <p> Thássia</p>
                                <div className="social">
                                    <a href="https://api.whatsapp.com/send/?phone=5582996804023&text&type=phone_number&app_absent=0" target="_blank"><i className="fab fa-whatsapp icon"></i></a>
                                    <a href="https://www.instagram.com/thassialeaopsi/" target="_blank"><i className="fab fa-instagram icon"></i></a>  
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
        </motion.div>
            <Footer/>
        </Container>
    )

}