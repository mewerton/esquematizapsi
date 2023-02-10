import { awrapper } from "../../dummydata";
import { Container } from "./styles";

export function AwRapper(){
    return(
        <Container>
            <section className="awrapper">
                <div className="container grid">
                    {awrapper.map((val) => (
                        <div className="box flex">
                            <div className="img">
                                <img src={val.cover} alt="" />
                            </div>
                            <div className="text">
                               
                                <h3>{val.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Container>
    )

}