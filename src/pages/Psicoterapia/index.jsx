import { Footer } from "../../components/Footer";
import { HeaderB } from "../../components/HeaderB";
import { Title } from "../../components/Title";
import { Container } from "./styles";

import { motion } from "framer-motion"

export function Psicoterapia(){
    return(
        <Container>
        <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}  
            exit={{ opacity:0 }}             
            >
            <HeaderB/>
            <Title title={"AGENDE SUA CONSULTA!"}/>
            <section className="contacts padding">
                <div className="container shadow ">

                    <div className="right row">
                        <h1>PSICOTERAPIA</h1>
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
                            <p>Além de facilitarmos os grupos de estudo, cursos em TE e supervisão clínica, nós permanecemos atendendo em psicoterapia. A base do nosso trabalho está numa prática clínica dedicada, responsável e acolhedora!</p>
                            <br />
                            <p>É na terapia que vamos entender a tua história, como você se relaciona consigo e com as pessoas, entender seus sentimentos, pensamentos. Perceber o que você gostaria de mudar, de melhorar. É através da psicoterapia que temos a oportunidade de conhecer tantas vidas de forma tão profunda. Tudo isso com muito embasamento teórico e afeto!</p><br />
                            <p>Nós três atendemos com a terapia do esquema e terapia cognitivo comportamental de forma presencial e online, cada uma com seu público específico e em seu consultório.</p><br />
                            <p>Para conhecer mais sobre nossa formação e atuação, clique em “terapeutas” e conheça um pouquinho mais de nós três. Se desejar iniciar o acompanhamento ou tirar dúvidas, fale diretamente com uma de nós através dos contatos. Teremos um enorme prazer em fazer parte da sua vida!</p><br />
                            <p>Local de atendimento em Maceió - AL:</p><br />
                            <p><span>Jéssica </span>- Empresarial Record Offices.  Rua Engenheiro Mário de Gusmão, 988, Ponta Verde.</p>
                            <p><span>Luanna </span>- Rather Coworking.  Rua José Maia Gomes - 211 - Jatiúca.</p>
                            <p><span>Thássia </span>- Empresarial José Lages. Rua Deputado José Lages, 555. Ponta Verde. </p>
                            

                        </div>
                        {/* <form action=''>
                            <div className='flexSB'>
                                <input type='text' placeholder='Nome' />
                                <input type='email' placeholder='E-mail' />
                            </div>
                            <input type='text' placeholder='Assunto' />
                            <textarea cols='30' rows='10' placeholder='Escreva sua mensagem...' >
                               
                            </textarea>
                            <button className='primary-btn'>ENVIAR</button>
                        </form> */}
                    </div>
                </div>
            </section>
        </motion.div>
            <Footer/>
        </Container>
    )

}