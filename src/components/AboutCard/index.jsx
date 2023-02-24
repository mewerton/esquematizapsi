import { homeAbout } from "../../dummydata";
import { AwRapper } from "../AWrapper";
import { Title } from "../Title";
import { Container } from "./styles";

import ImageB from "../../assets/juntas2.jpg"

export function AboutCard(){
    return(
        <Container>
            <section className="aboutHome">
                <div className="container flexSB">
                    <div className="left row">
                        <img src={ImageB} alt="" />
                    </div>
                    <div className="right row">
                        <Title subtitle={"SAIBA MAIS"} title={"BENEFÍCIOS DO ESQUEMATIZA"}/>
                        <div className="items">
                            {homeAbout.map((val) => (

                                <div key={val.id} className="item flexSB">
                                    <div className="img">
                                        <img src={val.cover} alt="" />
                                    </div>
                                    <div className="text">
                                        <h2>{val.title}</h2>
                                        <p>{val.desc}</p>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* <AwRapper/> */}
        </Container>
    )

}