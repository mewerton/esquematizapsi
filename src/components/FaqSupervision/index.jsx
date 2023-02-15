import { useState } from "react";
import { faqSupervision } from "../../dummydata";
import { Title } from "../Title";
import { Container } from "./styles";

export function FaqSupervision(){

    const [click, setClick] = useState(false)

    const toggle = (index) => {
        if (click === index) {
          return setClick(null)
        }
        setClick(index)
      }

    return(
        <Container>
            <Title  title={"DÚVIDAS FREQUENTES"}/>
            <section className="faq">
                <div className="container">
                    {faqSupervision.map((val, index) => (
                        <div className="box" key={index}>
                            <button className="accordion" onClick={()=> toggle(index)} >
                                <h2>{val.title}</h2>
                            <span>{click === index? <i className="fa fa-chevron-down"></i> : <i className="fa fa-chevron-right"></i> }</span>
                            </button>
                           {click === index ? (
                             <div className="text">
                             <p>{val.desc}</p>
                            </div>
                           ) : null}
                        </div>
                    ))}
                </div>
            </section>
        </Container>
    )

}