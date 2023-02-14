import { Title } from "../Title";
import { Container } from "./styles";
import { online } from "../../dummydata";

export function OnlineCourses(){
   return(
    <Container>
        <div className="online">
            <div className="container">
                <Title subtitle={"COURSES"} title={"Browse Our Online Courses"}/>
            </div>
            <div className="content grid3">
                {online.map((val) => (
                    <div className="box">
                        <div className="img">
                            <img src={val.cover} alt="" />
                            <img src={val.hoverCover} alt="" className="show" />
                        </div>
                        <h1>{val.courseName}</h1>
                        <span>{val.course}</span>
                    </div>
                ))}
            </div>
        </div>
    </Container>
   )
}