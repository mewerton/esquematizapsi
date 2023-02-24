import { supervisionAbout } from "../../dummydata";
import { AwRapper } from "../AWrapper";
import { Title } from "../Title";
import { Container } from "./styles";

import ImageB from "../../assets/supervision.jpg"

export function SupervisionCard(){
    return(
        <Container>
            <section className="aboutHome">
                <div className="container flexSB">
                    
                    <div className="right row">
                        <Title subtitle={"PORQUE UMA SUPERVISÃO? CONFIRA ALGUNS"} title={"BENEFÍCIOS DA SUPERVISÃO"}/>
                        <div className="items">
                            {supervisionAbout.map((val, index) => (

                                <div key={index} className="item flexSB">
                                    
                                    <div className="text">
                                        <h2>{val.title}</h2>
                                        <p>{val.desc}</p>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="left row">
                        <img src={ImageB} alt="" />
                    </div>
                </div>
            </section>
            {/* <AwRapper/> */}
        </Container>
    )

}