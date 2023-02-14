import { CoursesCard } from "../../components/CoursesCard";
import { HeaderB } from "../../components/HeaderB";
import { OnlineCourses } from "../../components/OnlineCourses";
import { Container } from "./styles";

export function Cursos(){
    return(
        <Container>
            <HeaderB/>
            <CoursesCard/>
            <OnlineCourses/>
        </Container>
    )
}