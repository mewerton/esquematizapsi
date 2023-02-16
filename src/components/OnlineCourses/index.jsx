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
                {online.map((val) => (
                    <div className="box" key={val.courseName}>
                        <div className="img">
                            <img src={val.cover} alt="" />
                            
                        </div>
                        <h1>{val.courseName}</h1>
                        <div className="author">
                            
                            <p>de {val.authorName}</p>
                        </div>
                        <a href={val.link} target="_blank"><span>{val.course}</span></a>
                        
                    </div>
                ))}
            </div>
            </div>
        </section>
    </Container>
   )
}