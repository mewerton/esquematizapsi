import { testimonial } from "../../dummydata";
import { Title } from "../Title";
import { Container } from "./styles";

export function Testimonial(){
    return(
        <Container>
            <section className="testimonial padding">
                <div className="container">
                    <Title subtitle={"TESTEMUNHAS"} title={"Profissionais que nos recomendam"}/>

                    <div className="content grid2">
                        {testimonial.map((val) => (
                            <div className="items shadow" key={val.id}>
                                <div className="box flex">
                                    <div className="img">
                                        <img src={val.cover} alt="" />
                                        <i className="fa fa-quote-left icon"></i>
                                    </div>
                                    <div className="name">
                                        <h2>{val.name}</h2>
                                        <span>{val.post}</span>
                                    </div>
                                </div>
                                <p>{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Container>
    )

}