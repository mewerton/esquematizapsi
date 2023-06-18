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

export function TestimonialSup(){
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
                            spaceBetween: 10,
                        },
                        1280: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1800: {
                            slidesPerView: 2,
                            spaceBetween: 10,
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
                                        <h2>Lucila Stanziola</h2>
                                        <span>Psicóloga</span>
                                    </div>
                                </div>
                                <p>Ter sido supervisionada por três terapeutas foi muito legal! Me senti muito mais segura após a visão tridimensional do caso. A experiência foi leve, acolhedora e muito focada. Recomendo muito!</p>
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
                                        <h2>Magda</h2>
                                        <span>Psicóloga e Neuropsicóloga clínica</span>
                                    </div>
                                </div>
                                <p>Minha experiência com a supervisão das colegas queridas do Esquematize tem sido muito bacana e efetiva na prática clínica. Na supervisão é natural a dedicação, assertividade, criatividade, um toque de carinho e validação no trabalho que tenho realizado na clínica.Já já estarei de volta pra um próximo encontro.</p>
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