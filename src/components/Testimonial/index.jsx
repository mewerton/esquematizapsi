import { Title } from "../Title";
import { Container } from "./styles";

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"

import 'swiper/css'
import 'swiper/css/pagination'

import melinda from "../../../public/images/testo/melinda.jpg"
import jana from "../../../public/images/testo/jana.jpg"
import leticia from "../../../public/images/testo/leticia.jpg"
import sany from "../../../public/images/testo/sany.jpg"


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
                                        <img src={melinda} alt="" />
                                        <i className="fa fa-quote-left icon"></i>
                                    </div>
                                    <div className="name">
                                        <h2>Melinda Torres</h2>
                                        <span>Psicóloga</span>
                                    </div>
                                </div>
                                <p>Minha experiência com as meninas da esquematiza começou através do Cine TE, uma proposta super legal e que cheguei a participar em algumas edições. Então já conhecia a dedicação, organização e competência delas. No grupo de estudos não foi diferente e realmente superou às minhas expectativas! Foram momentos de aprendizado, trocas, conhecimento, sempre com muita leveza e conexão! E com certeza, indico para quem já tem alguma Formação em TE e, também, para quem quer conhecer a abordagem! Esse trio de psicólogas além de super competente, coloca amor em tudo que faz!</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items shadow">
                            <div className="new-slide">
                                <div className="box flex">
                                    <div className="img">
                                        <img src={jana} alt="" />
                                       <i className="fa fa-quote-left icon"></i>
                                    </div>
                                    <div className="name">
                                        <h2>Janaína Gaia</h2>
                                        <span>Psicóloga e Neuropsicóloga clínica</span>
                                    </div>
                                </div>
                                <p>Foi produtivo compreender os 18 esquemas propostos por Jeffrey Young e de que modo as técnicas aplicadas possibilitam evoluções com nossos pacientes, mas nada disso seria possível sem a didática que o Esquematiza Psi utiliza: um embasanento teórico consistente com material disponibilizado; discussão de estudos de caso, recursos aplicados nos encontros e o comprometimento desse trio maravilhoso de psicólogas que possibilita novos aprendizados com acolhimento e leveza. Sem dúvida é um ótimo investimento, nos possibilita novas perspectivas profissionais e impulsiona a nos mantermos atualizados.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items shadow">
                            <div className="new-slide">
                                <div className="box flex">
                                    <div className="img">
                                        <img src={leticia} alt="" />
                                        <i className="fa fa-quote-left icon"></i>
                                    </div>
                                    <div className="name">
                                        <h2>Letícia Meller</h2>
                                        <span>Psicóloga</span>
                                    </div>
                                </div>
                                <p>O Grupo de Estudos foi um abraço quentinho nesse mergulho pela TE, a didática das meninas é cheia de exemplificações e o espaço de fala que a experiência proporciona é incrível para a compreensão dos conceitos e o sentido que a teoria vai tomando para cada um nós é puro acolhimento.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="items shadow">
                            <div className="new-slide">
                                <div className="box flex">
                                    <div className="img">
                                        <img src={sany} alt="" />
                                        <i className="fa fa-quote-left icon"></i>
                                    </div>
                                    <div className="name">
                                        <h2>Sanielly de Melo Alves</h2>
                                        <span>Estudante de psicologia</span>
                                    </div>
                                </div>
                                <p>O afeto das meninas Thássia, Jéssica e Luana me cativaram ainda mais e incentivaram a me apaixonar ainda mais pela TE. Elas e o método de ambas são a prova viva do que é a terapia do esquema - uma abordagem que enxerga e dá espaço ao vínculo, ao afeto e a ternura. Os conteúdos são bem divididos e repassados de maneira muito dinâmica, lembro que tinha quiizz, indicações, referências à filmes, séries e livros…</p>
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