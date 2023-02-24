import { Title } from "../Title";
import { Container } from "./styles";
import { online } from "../../dummydata";

export function OnlineCourses(){
   return(
    <Container>
        <section className="online">
            <div className="container">
                <Title subtitle={"MATERIAIS"} title={"LIVROS RECOMENDADOS"}/>
            <div className="content grid3">
                {online.map((val, index) => (
                        <a href={val.link} target="_blank" key={index}>
                            <div className="box" key={val.courseName}>
                                <div className="img">
                                    <img src={val.cover} alt="" />
                                    
                                </div>
                                <h1>{val.courseName}</h1>
                                <div className="author">
                                    
                                    <p>de {val.authorName}</p>
                                </div>
                                    <span>{val.course}</span>
                                
                            </div>
                        </a>
                ))}
            </div>
            </div>
        </section>
    </Container>
   )
}