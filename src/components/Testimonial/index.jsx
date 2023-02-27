import { Title } from "../Title";
import { Container } from "./styles";

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"

import 'swiper/css'
import 'swiper/css/pagination'

import t1 from "../../../public/images/testo/t1.jpg"
import t2 from "../../../public/images/testo/t2.jpg"
import t3 from "../../../public/images/testo/t3.jpg"
import t4 from "../../../public/images/testo/t4.jpg"
import t5 from "../../../public/images/testo/t5.jpg"

export function Testimonial(){
    return(
        <Container>
            <section className="testimonial padding">
                <div className="container">
                                  
                    
                    <div className="content">

                   
                    {/* Segunda opção de testemunhas com Swiper */}

                    <Title subtitle={"TESTEMUNHAS"} title={"PROFISSIONAIS NOS RECOMENDAM"}/>

                    <Swiper
                    freeMode={true}
                    grabCursor={true}
                    pagination={{
                        dynamicBullets: true,
                      }}
                    modules={[Pagination]}
                
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        550: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        760: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                    }}
                    className="swiper-h">
                      <SwiperSlide>
                        <div className="items shadow">
                            <div className="new-slide">
                                <div className="box flex">
                                    <div className="img">
                                        <img src={t1} alt="" />
                                        <i className="fa fa-quote-left icon"></i>
                                    </div>
                                    <div className="name">
                                        <h2>Juliana Silva</h2>
                                        <span>Psicóloga</span>
                                    </div>
                                </div>
                                <p>O grupo de estudos do Esquematiza Psicologia me ajudou a ampliar minha expertise como psicóloga. Agora, me sinto mais segura e capaz de lidar com problemas emocionais profundos e duradouros dos meus pacientes.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items shadow">
                            <div className="new-slide">
                                <div className="box flex">
                                    <div className="img">
                                        <img src={t2} alt="" />
                                        <i className="fa fa-quote-left icon"></i>
                                    </div>
                                    <div className="name">
                                        <h2>André Oliveira</h2>
                                        <span>Psicólogo</span>
                                    </div>
                                </div>
                                <p>Os encontros online do Esquematiza Psicologia foram um divisor de águas na minha carreira. Aprendi muito sobre a terapia do esquema e pude aplicar esse conhecimento com sucesso em diversos casos clínicos.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items shadow">
                            <div className="new-slide">
                                <div className="box flex">
                                    <div className="img">
                                        <img src={t3} alt="" />
                                        <i className="fa fa-quote-left icon"></i>
                                    </div>
                                    <div className="name">
                                        <h2>Mariana Santos</h2>
                                        <span>Psicóloga</span>
                                    </div>
                                </div>
                                <p>Recomendo muito o grupo de estudos do Esquematiza Psicologia. As terapeutas são excelentes profissionais e ensinam de forma clara e objetiva sobre a terapia do esquema. Vale muito a pena!</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items shadow">
                            <div className="new-slide">
                                <div className="box flex">
                                    <div className="img">
                                        <img src={t4} alt="" />
                                        <i className="fa fa-quote-left icon"></i>
                                    </div>
                                    <div className="name">
                                        <h2>Pedro Silva</h2>
                                        <span>Psicólogo</span>
                                    </div>
                                </div>
                                <p>Estou muito satisfeito com o grupo de estudos do Esquematiza Psicologia. Aprendi bastante sobre a terapia do esquema e pude aplicar esse conhecimento com sucesso em casos clínicos difíceis. Recomendo!</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items shadow">
                            <div className="new-slide">
                                <div className="box flex">
                                    <div className="img">
                                        <img src={t5} alt="" />
                                        <i className="fa fa-quote-left icon"></i>
                                    </div>
                                    <div className="name">
                                        <h2>Ana Paula Rodrigues</h2>
                                        <span>Psicóloga</span>
                                    </div>
                                </div>
                                <p>O Esquematiza Psicologia é um projeto incrível. As terapeutas são extremamente competentes e ensinam de forma didática sobre a terapia do esquema. Com certeza, recomendo para todos os psicólogos que querem ampliar sua expertise.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                  
                 
                </Swiper>
                    </div>
                </div>
            </section>
        </Container>
    )

}