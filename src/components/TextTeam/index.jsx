import { teamText } from "../../dummydata";
import { Title } from "../Title";
import { Container } from "./styles";

export function TextTeam(){
    return(
        <Container>
            <section className="testimonial ">
                <div className="container">
                    <Title subtitle={"CONHEÇA-NOS"} />

                    <div className="content">
                        {teamText.map((val) => (
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
                                    <br />
                                    <p>{val.desc2}</p>
                                    <br />
                                    <p>{val.desc3}</p>
                                    <br />
                                    <p>{val.desc4}</p>
                                    <br />
                                    
                                   
                                
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Container>
    )

}